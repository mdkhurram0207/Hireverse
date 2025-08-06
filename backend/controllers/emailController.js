const axios = require('axios');

exports.sendEmail = async (req, res) => {
  const { name, email, phone, message } = req.body;

  const serviceID = 'your_service_id';
  const templateID = 'your_template_id';
  const userID = 'your_public_key';

  const templateParams = {
    user_name: name,
    user_email: email,
    user_phone: phone,
    message: message,
  };

  try {
    const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: serviceID,
      template_id: templateID,
      user_id: userID,
      template_params: templateParams,
    });

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
};
