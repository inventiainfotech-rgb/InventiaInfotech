const DEFAULT_EMAIL_ENDPOINT = '/api/send-email';

export const sendFormEmail = async (payload) => {
  const endpoint = process.env.REACT_APP_EMAIL_API_URL || DEFAULT_EMAIL_ENDPOINT;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  let responseBody = {};
  try {
    responseBody = await response.json();
  } catch (err) {
    responseBody = {};
  }

  if (!response.ok) {
    const message = responseBody?.error || 'Failed to send email.';
    throw new Error(message);
  }

  return responseBody;
};
