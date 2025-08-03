const express = require('express')
const { body, validationResult } = require('express-validator')
const { sendContactEmail } = require('../services/emailService')
const router = express.Router()

// Contact form submission
router.post(
  '/',
  [
    body('fullName')
      .trim()
      .isLength({ min: 2 })
      .withMessage('Full name must be at least 2 characters long'),
    body('email')
      .isEmail()
      .normalizeEmail()
      .withMessage('Please provide a valid email address'),
    body('phone')
      .trim()
      .isLength({ min: 10 })
      .withMessage('Phone number must be at least 10 characters long'),
  ],
  async (req, res) => {
    try {
      // Check for validation errors
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array(),
        })
      }

      const { fullName, email, phone } = req.body

      // Try to send email notification, but don't fail the request if email fails
      try {
        await sendContactEmail({ fullName, email, phone })
        console.log('Email sent successfully')
      } catch (emailError) {
        console.error(
          'Email sending failed, but contact form will still be processed:',
          emailError.message
        )
        // Continue with the request even if email fails
      }

      res.status(200).json({
        success: true,
        message:
          'Thank you for contacting us! We will get back to you within 24 hours.',
        data: {
          id: Date.now(),
          fullName,
          email,
          phone,
          submittedAt: new Date().toISOString(),
        },
      })
    } catch (error) {
      console.error('Contact form error:', error)
      res.status(500).json({
        success: false,
        message: 'Failed to submit contact form. Please try again later.',
      })
    }
  }
)

// Get contact information
router.get('/info', (req, res) => {
  res.json({
    success: true,
    data: {
      email: 'info@ardienergy.com',
      phone: '+1 (555) 123-4567',
      address: '123 Energy Street, San Francisco, CA 94105',
      hours: {
        weekdays: '8AM-6PM',
        saturday: '9AM-3PM',
        sunday: 'Closed',
      },
    },
  })
})

module.exports = router
