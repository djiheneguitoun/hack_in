
const nodemailer = require('nodemailer');

async function sendEmail() {
  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use your email service provider
    auth: {
        user: '',
        pass: ''
      }
  });

  // Email options
  const mailOptions = {
    from: '', // List of recipients
    to: '', // Sender address

    subject: 'Here is the password for you account '  , // Subject line
    text: 'This is a test email sent from Nodemailer.' // Plain text body
  };

  // Send email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return 'Email sent successfully';
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Error sending email');
  }
}

 sendEmail()
