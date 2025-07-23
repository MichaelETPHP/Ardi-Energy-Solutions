const express = require('express')
const { body, validationResult } = require('express-validator')
const router = express.Router()

// Contact form submission
router.post(
  '/',
  [
    body('name')
      .trim()
      .isLength({ min: 2 })
      .withMessage('Name must be at least 2 characters long'),
    body('email')
      .isEmail()
      .normalizeEmail()
      .withMessage('Please provide a valid email address'),
    body('message')
      .trim()
      .isLength({ min: 10 })
      .withMessage('Message must be at least 10 characters long'),
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

      const { name, email, message } = req.body

      // Here you would typically:
      // 1. Save to database
      // 2. Send email notification
      // 3. Log the contact request

      // Simulate processing time
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock response
      res.status(200).json({
        success: true,
        message:
          'Thank you for your message! We will get back to you within 24 hours.',
        data: {
          id: Date.now(),
          name,
          email,
          message,
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
