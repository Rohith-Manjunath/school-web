const nodemailer = require("nodemailer");

exports.sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP,
    port: 587,
    service: process.env.SMTP_SERVICE, // Corrected typo in SMTP_SERVICE
    auth: {
      user: process.env.SMTP_EMAIL, // Corrected typo in SMTP_EMAIL
      pass: process.env.SMTP_PASSWORD, // Corrected typo in SMTP_PASSWORD
    },
  });

  const mailOptions = {
    from: process.env.SMTP_EMAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Message sent successfully: ${info.messageId}`);
  } catch (error) {
    console.log(`Error sending message: ${error}`);
  }
};
const generateEmailContent = (data) => {
  // Convert data object to formatted string
  const formattedContent = Object.entries(data)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');

  return `
New Form Submission

${formattedContent}

This is an automated message.`;
};
exports.sendMailOnSubmit = async (options)=>{
  const teansporter  = nodemailer.createTransport ({
    host: process.env.SMTP,
    port: 587,
    service: process.env.SMTP_SERVICE, // Corrected typo in SMTP_SERVICE
    auth: {
      user: process.env.SMTP_EMAIL, // Corrected typo in SMTP_EMAIL
      pass: process.env.SMTP_PASSWORD, // Corrected typo in SMTP_PASSWORD
    },
  })
  const mailOptions = {
    from: process.env.SMTP_EMAIL,
    to: 'principal@mysoreinternationalschool.com',
    subject: options.subject,
    text: generateEmailContent(options.formData),
  };
  try {
    const info = await teansporter.sendMail(mailOptions);
    console.log(`Message sent successfully on principal@mysoreinternationalschool.com: ${info.messageId}`);
  } catch (error) {
    console.log(`Error sending message: ${error}`);
  }
}