const DEFAULT_EMAIL_ENDPOINT = '/api/send-email';

export const sendFormEmail = async (payload) => {
  const endpoint = process.env.REACT_APP_EMAIL_API_URL || DEFAULT_EMAIL_ENDPOINT;

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
      ? `Email endpoint not found (${endpoint}). Configure REACT_APP_EMAIL_API_URL.`
      : `Email request failed (${response.status} ${response.statusText}).`;
    const message = messageFromApi || (responseText ? `${fallback} ${responseText.slice(0, 120)}` : fallback);
    throw new Error(message);
  }

  return responseBody;
};
