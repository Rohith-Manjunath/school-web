const nodemailer = require("nodemailer");

// Direct email configuration object - no .env file needed
const emailConfig = {
  // Primary configuration - Hostinger SMTP
  host: "smtp.hostinger.com",
  port: 587,
  secure: false,
  auth: {
    user: "admissions@mysoreinternationalschool.com",
    pass: "Mis@mys984",
  },
  // You can add a backup configuration if the primary fails
  backupService: null, // Set to 'gmail' if you want to use Gmail as backup
  backupAuth: {
    user: null, // Your backup email
    pass: null  // Your backup password
  }
};

/**
 * Generate formatted email content from form data
 * @param {Object} data - Form data to format
 * @returns {String} - Formatted email content
 */
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

/**
 * Create a standardized transporter with proper configuration
 * @returns {Object} - Nodemailer transporter
 */
const createTransporter = () => {
  // Create and return the transporter with direct configuration
  return nodemailer.createTransport({
    host: emailConfig.host,
    port: emailConfig.port,
    secure: emailConfig.secure,
    auth: {
      user: emailConfig.auth.user,
      pass: emailConfig.auth.pass,
    },
  });
};

/**
 * Generic email sending function
 * @param {Object} options - Email options
 * @returns {Promise} - Resolves with email info
 */
exports.sendEmail = async (options) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: emailConfig.auth.user,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Message sent successfully: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error(`Error sending message:`, error);
    return { success: false, error: error.message };
  }
};

/**
 * Send email on form submission
 * @param {Object} options - Email options
 * @returns {Promise} - Resolves with email info
 */
exports.sendMailOnSubmit = async (options) => {
  const transporter = createTransporter(); // Fixed typo in variable name

  const mailOptions = {
    from: emailConfig.auth.user,
    to: 'principal@mysoreinternationalschool.com',
    subject: options.subject,
    text: generateEmailContent(options.formData),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Message sent successfully to principal@mysoreinternationalschool.com: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error(`Error sending message:`, error);
    return { success: false, error: error.message };
  }
};

/**
 * Send admission query confirmation to parent
 * @param {Object} parentDetails - Parent details
 * @returns {Promise} - Resolves with email info
 */
exports.sendAdmissionQuery = async (parentDetails) => {
  const { parentName, email, phone, grade, referenceNumber } = parentDetails;
  const transporter = createTransporter();

  const htmlContent = `
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #eaeaea;
        border-radius: 5px;
      }
      .header {
        background: linear-gradient(to right, #8A2E88, #E76F51);
        padding: 10px 20px;
        color: white;
        border-radius: 5px 5px 0 0;
      }
      .content {
        padding: 20px;
        background-color: #f8f8f8;
      }
      .footer {
        text-align: center;
        padding: 10px;
        font-size: 12px;
        color: #777;
      }
      .button {
        display: inline-block;
        background-color: #E76F51;
        color: white;
        text-decoration: none;
        padding: 10px 15px;
        border-radius: 5px;
        margin-top: 15px;
      }
      .contact-info {
        background-color: #f0f0f0;
        padding: 10px 15px;
        margin-top: 20px;
        border-radius: 5px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h2>Thank You for Your Interest in Mysore International School!</h2>
      </div>
      
      <div class="content">
        <p>Dear ${parentName},</p>
        
        <p>Thank you for submitting your admission inquiry for Grade ${grade} at Mysore International School. We have received your information and our admissions team will contact you shortly at ${phone} to provide further details.</p>
        
        <p>Here's a summary of the information you provided:</p>
        <ul>
          <li><strong>Parent Name:</strong> ${parentName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Grade Applying For:</strong> ${grade}</li>
          <li><strong>Your reference number:</strong> ${referenceNumber}</li>
        </ul>
        
        <p>We're excited to connect with you and discuss how Mysore International School can provide an exceptional educational experience for your child.</p>
        
        <div class="contact-info">
          <p><strong>For any immediate inquiries, please contact us:</strong></p>
          <p>Phone: 0821 2971010 | +91 8884 300 400</p>
          <p>Email: admissions@mysoreinternationalschool.com</p>
          <p>Visit Us: Monday to Saturday, 9:00 AM - 4:00 PM</p>
        </div>
      </div>
      
      <div class="footer">
        <p>© ${new Date().getFullYear()} Mysore International School. All rights reserved.</p>
        <p>This is an automated email. Please do not reply to this message.</p>
      </div>
    </div>
  </body>
  </html>
  `;

  // Email options
  const mailOptions = {
    from: `"Mysore International School" <${emailConfig.auth.user}>`,
    to: email,
    subject: 'Thank You for Your Admission Inquiry - Mysore International School',
    html: htmlContent,
  };

  try {
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Notify admissions team about new inquiry
 * @param {Object} parentDetails - Parent details
 * @returns {Promise} - Resolves with email info
 */
exports.notifyAdmissionsTeam = async (parentDetails) => {
  const { parentName, email, phone, grade, referenceNumber } = parentDetails;
  
  // Create a dedicated transporter specifically for admissions notifications
  const transporter = nodemailer.createTransport({
    host: emailConfig.host,
    port: emailConfig.port,
    secure: emailConfig.secure,
    auth: {
      user: emailConfig.auth.user,
      pass: emailConfig.auth.pass,
    },
    // These settings can help with debugging
    debug: true, 
    logger: true
  });

  // Log connection attempt before sending
  console.log("Attempting to connect to SMTP server for admissions notification...");
  
  // Verify connection before sending
  try {
    await transporter.verify();
    console.log("SMTP connection verified successfully");
  } catch (error) {
    console.error("SMTP connection verification failed:", error);
    return { success: false, error: error.message };
  }

  const mailOptions = {
    from: `"Admissions Portal" <${emailConfig.auth.user}>`,
    to: 'vk8942422@gmail.com', // Change to desired recipient
    subject: 'New Admission Inquiry Received',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #8A2E88;">New Admission Inquiry</h2>
        <p>A new admission inquiry has been received from the website with the following details:</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr style="background-color: #f2f2f2;">
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Parent Name</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${parentName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr style="background-color: #f2f2f2;">
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Grade Applying For</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${grade}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Reference number</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${referenceNumber}</td>
          </tr>
          <tr style="background-color: #f2f2f2;">
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Submission Time</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${new Date().toLocaleString()}</td>
          </tr>
        </table>
        <p style="margin-top: 20px;">Please follow up with this inquiry within 24 hours.</p>
      </div>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Notification email sent to admissions team:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending notification to admissions team:', error);
    return { success: false, error: error.message };
  }
};