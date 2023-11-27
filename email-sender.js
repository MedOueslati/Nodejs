const nodemailer = require('nodemailer');

// Create a transporter using your email service's SMTP settings
const transporter = nodemailer.createTransport({
    service: 'your service here',
    auth: {
        user: 'your email here',
        pass: 'your pass here',
    },
});


// Email content
const mailOptions = {
    from: 'your mail here',
    to: 'your pass here',
    subject: 'Test Email',
    text: 'This is a test email sent using Nodemailer!',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});