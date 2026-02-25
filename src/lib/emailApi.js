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

  return responseBody;
};

const sendViaFormSubmit = async (payload) => {
  const recipient = process.env.REACT_APP_FORM_EMAIL_TO;
  if (!recipient) {
    throw new Error('Set REACT_APP_FORM_EMAIL_TO in .env for frontend-only email sending.');
  }

  const mapped = buildFrontendProviderPayload(payload);
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

  try {
    return await sendViaServerApi(endpoint, payload);
  } catch (err) {
    if (String(err?.message || '').includes('not found')) {
      return sendViaFormSubmit(payload);
    }
    throw err;
  }
};
