const nodemailer = require('nodemailer')

// Create transporter with cPanel email credentials
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'mail.ardienergysolutions.com',
  port: parseInt(process.env.EMAIL_PORT) || 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER || 'contact@ardienergysolutions.com',
    pass: process.env.EMAIL_PASS || 'j8F,@!ajbDg~S~%d',
  },
})

// Verify transporter connection
transporter.verify(function (error, success) {
  if (error) {
    console.log('Email service error:', error.message)
    console.log('Email service will continue but may not work properly')
  } else {
    console.log('Email service is ready to send messages')
  }
})

const sendContactEmail = async (contactData) => {
  try {
    const { fullName, email, phone } = contactData

    const mailOptions = {
      from: 'contact@ardienergysolutions.com',
      to: 'contact@ardienergysolutions.com',
      subject: 'New Contact Form Submission - Ardi Energy Solutions',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Full Name:</strong>
              <span style="color: #6b7280;">${fullName}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Email:</strong>
              <span style="color: #6b7280;">${email}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Phone Number:</strong>
              <span style="color: #6b7280;">${phone}</span>
            </div>
          </div>
          
          <div style="background-color: #fef2f2; padding: 15px; border-radius: 8px; border-left: 4px solid #dc2626;">
            <p style="margin: 0; color: #991b1b; font-size: 14px;">
              <strong>Submission Time:</strong> ${new Date().toLocaleString()}
            </p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f0f9ff; border-radius: 8px;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              This is an automated message from the Ardi Energy Solutions website contact form.
              Please respond to the customer at their provided email address.
            </p>
          </div>
        </div>
      `,
    }

    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Email sending failed:', error)
    throw new Error('Failed to send email')
  }
}

module.exports = {
  sendContactEmail,
}
