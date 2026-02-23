const nodemailer = require('nodemailer');

const parseSecureFlag = (value) => {
  if (typeof value === 'boolean') return value;
  if (typeof value !== 'string') return false;
  return value.toLowerCase() === 'true';
};

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: parseSecureFlag(process.env.SMTP_SECURE),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

const buildMailContent = (data) => {
  const formType = data.formType || 'contact_form';

  if (formType === 'support_ticket') {
    const subject = `[Support Ticket][${(data.priority || 'medium').toUpperCase()}] ${data.subject}`;
    const text = [
      'New support ticket submitted.',
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Priority: ${data.priority}`,
      `Subject: ${data.subject}`,
      '',
      'Description:',
      data.description
    ].join('\n');

    return { subject, text, replyTo: data.email };
  }

  const fullName = `${data.first_name || ''} ${data.last_name || ''}`.trim();
  const subject = `[Contact Form] ${fullName || 'New Inquiry'}`;
  const text = [
    'New contact form submitted.',
    `Name: ${fullName || '-'}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || '-'}`,
    `Company: ${data.company || '-'}`,
    '',
    'Message:',
    data.message
  ].join('\n');

  return { subject, text, replyTo: data.email };
};

const validatePayload = (data) => {
  if (!data || typeof data !== 'object') {
    return 'Invalid request body.';
  }

  if (data.formType === 'support_ticket') {
    if (!data.name || !data.email || !data.subject || !data.priority || !data.description) {
      return 'Missing required support ticket fields.';
    }
    return null;
  }

  if (!data.first_name || !data.last_name || !data.email || !data.message) {
    return 'Missing required contact form fields.';
  }

  return null;
};

module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(200).json({ ok: true });
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const missingConfig = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'SMTP_FROM', 'SMTP_TO']
    .filter((key) => !process.env[key]);
  if (missingConfig.length > 0) {
    return res.status(500).json({ error: `Missing SMTP config: ${missingConfig.join(', ')}` });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (err) {
      return res.status(400).json({ error: 'Invalid JSON body.' });
    }
  }

  const validationError = validatePayload(body);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const { subject, text, replyTo } = buildMailContent(body);

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      replyTo,
      subject,
      text
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({
      error: err?.message || 'Failed to send email.'
    });
  }
};
