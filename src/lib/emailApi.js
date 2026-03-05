const DEFAULT_EMAIL_ENDPOINT = '/api/send-email';

const buildFrontendProviderPayload = (payload) => {
  if (payload?.formType === 'support_ticket') {
    return {
      name: payload.name,
      email: payload.email,
      subject: `[Support Ticket][${(payload.priority || 'medium').toUpperCase()}] ${payload.subject}`,
      message: payload.description
    };
  }

  const fullName = `${payload?.first_name || ''} ${payload?.last_name || ''}`.trim();
  return {
    name: fullName || 'Website Visitor',
    email: payload?.email,
    subject: `[Contact Form] ${fullName || 'New Inquiry'}`,
    message: [
      `Phone: ${payload?.phone || '-'}`,
      `Company: ${payload?.company || '-'}`,
      '',
      payload?.message || ''
    ].join('\n')
  };
};

const buildAutoResponseMessage = (payload) => {
  if (payload?.formType === 'support_ticket') {
    return [
      'Thanks for contacting Inventia support.',
      '',
      `Ticket Subject: ${payload?.subject || '-'}`,
      `Priority: ${payload?.priority || 'medium'}`,
      '',
      'Our team has received your request and will get back to you shortly.'
    ].join('\n');
  }

  const fullName = `${payload?.first_name || ''} ${payload?.last_name || ''}`.trim();
  return [
    `Hi ${fullName || 'there'},`,
    '',
    'Thank you for contacting Inventia.',
    'We have received your message and our team will respond soon.'
  ].join('\n');
};

const sendViaServerApi = async (endpoint, payload) => {
  let response;
  try {
    response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
  } catch (err) {
    throw new Error(`Could not reach email endpoint (${endpoint}).`);
  }

  let responseBody = {};
  let responseText = '';
  try {
    responseBody = await response.json();
  } catch (err) {
    try {
      responseText = await response.text();
    } catch (textErr) {
      responseText = '';
    }
  }

  if (!response.ok) {
    const messageFromApi = responseBody?.error;
    const fallback = response.status === 404
      ? `Email endpoint not found (${endpoint}).`
      : `Email request failed (${response.status} ${response.statusText}).`;
    const message = messageFromApi || (responseText ? `${fallback} ${responseText.slice(0, 120)}` : fallback);
    throw new Error(message);
  }

  // Server API must explicitly acknowledge mail dispatch.
  if (responseBody?.ok !== true) {
    throw new Error('Email API did not confirm delivery.');
  }

  return responseBody;
};

const sendViaFormSubmit = async (payload) => {
  const recipient = process.env.REACT_APP_FORM_EMAIL_TO;
  if (!recipient) {
    throw new Error('Set REACT_APP_FORM_EMAIL_TO in .env for frontend-only email sending.');
  }

  const mapped = buildFrontendProviderPayload(payload);
  const autoResponse = buildAutoResponseMessage(payload);
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`;

  let response;
  try {
    response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        ...mapped,
        _subject: mapped.subject,
        _replyto: mapped.email,
        _autoresponse: autoResponse,
        _template: 'table',
        _captcha: 'false'
      })
    });
  } catch (err) {
    throw new Error('Could not reach FormSubmit service.');
  }

  let body = {};
  try {
    body = await response.json();
  } catch (err) {
    body = {};
  }

  if (!response.ok || body?.success === 'false') {
    throw new Error(body?.message || 'Frontend email provider rejected the request.');
  }

  return body;
};

export const sendFormEmail = async (payload) => {
  const endpoint = process.env.REACT_APP_EMAIL_API_URL || DEFAULT_EMAIL_ENDPOINT;
  const hasFrontendRecipient = Boolean(process.env.REACT_APP_FORM_EMAIL_TO);

  // If no dedicated backend is configured, skip /api call and use frontend provider.
  if (hasFrontendRecipient && endpoint === DEFAULT_EMAIL_ENDPOINT) {
    return sendViaFormSubmit(payload);
  }

  try {
    return await sendViaServerApi(endpoint, payload);
  } catch (err) {
    // Fallback to frontend provider when backend route is missing or invalid.
    if (
      hasFrontendRecipient &&
      (
        String(err?.message || '').includes('not found') ||
        String(err?.message || '').includes('did not confirm delivery')
      )
    ) {
      return sendViaFormSubmit(payload);
    }
    throw err;
  }
};
