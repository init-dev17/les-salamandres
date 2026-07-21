export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { user_lastname, user_firstname, user_email, value, message } = req.body;

  if (!user_lastname || !user_firstname || !user_email || !value || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: process.env.VITE_EMAILJS_SERVICE_ID,
        template_id: process.env.VITE_EMAILJS_TEMPLATE_ID,
        user_id: process.env.VITE_EMAILJS_PUBLIC_KEY,
        accessToken: process.env.VITE_EMAILJS_PRIVATE_KEY, // Private key for strict mode
        template_params: { user_lastname, user_firstname, user_email, value, message },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to send email');
    }

    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}