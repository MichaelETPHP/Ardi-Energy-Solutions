const express = require('express')
const router = express.Router()

// Mock services data
const services = [
  {
    id: 1,
    title: 'Solar Energy Solutions',
    category: 'Renewable Energy',
    description:
      'Complete solar panel installation and maintenance services for residential and commercial properties.',
    features: [
      'Grid-tied Systems',
      'Off-grid Solutions',
      'Battery Storage',
      'Maintenance',
    ],
    pricing: {
      residential: 'From $15,000',
      commercial: 'From $50,000',
      industrial: 'Custom Quote',
    },
    duration: '2-8 weeks',
    warranty: '25 years',
  },
  {
    id: 2,
    title: 'Wind Energy Projects',
    category: 'Renewable Energy',
    description:
      'Large-scale wind farm development and small wind turbine installations for various applications.',
    features: [
      'Wind Farm Design',
      'Turbine Installation',
      'Performance Monitoring',
      'Optimization',
    ],
    pricing: {
      small: 'From $25,000',
      medium: 'From $100,000',
      large: 'Custom Quote',
    },
    duration: '3-12 months',
    warranty: '10 years',
  },
  {
    id: 3,
    title: 'Smart Grid Technology',
    category: 'Technology',
    description:
      'Advanced grid management systems for efficient energy distribution and consumption monitoring.',
    features: [
      'Grid Management',
      'Real-time Monitoring',
      'Load Balancing',
      'Analytics',
    ],
    pricing: {
      basic: 'From $10,000',
      advanced: 'From $50,000',
      enterprise: 'Custom Quote',
    },
    duration: '1-6 months',
    warranty: '5 years',
  },
  {
    id: 4,
    title: 'Energy Storage',
    category: 'Storage',
    description:
      'Battery storage solutions for energy backup and peak demand management.',
    features: [
      'Lithium-ion Systems',
      'Flow Batteries',
      'Peak Shaving',
      'Backup Power',
    ],
    pricing: {
      residential: 'From $8,000',
      commercial: 'From $25,000',
      utility: 'Custom Quote',
    },
    duration: '1-4 weeks',
    warranty: '10 years',
  },
  {
    id: 5,
    title: 'Commercial Energy',
    category: 'Commercial',
    description:
      'Comprehensive energy solutions for businesses, factories, and industrial facilities.',
    features: [
      'Energy Audits',
      'Efficiency Upgrades',
      'Peak Management',
      'Cost Optimization',
    ],
    pricing: {
      audit: 'From $5,000',
      implementation: 'From $25,000',
      full: 'Custom Quote',
    },
    duration: '2-12 weeks',
    warranty: 'Varies',
  },
  {
    id: 6,
    title: 'Maintenance & Support',
    category: 'Support',
    description:
      '24/7 maintenance services and technical support for all energy systems.',
    features: [
      'Preventive Maintenance',
      'Emergency Repairs',
      'Remote Monitoring',
      'Expert Support',
    ],
    pricing: {
      basic: 'From $500/month',
      premium: 'From $1,500/month',
      enterprise: 'Custom Quote',
    },
    duration: 'Ongoing',
    warranty: 'Service-based',
  },
]

// Get all services
router.get('/', (req, res) => {
  try {
    const { category, limit } = req.query

    let filteredServices = [...services]

    // Filter by category
    if (category) {
      filteredServices = filteredServices.filter(
        (service) => service.category.toLowerCase() === category.toLowerCase()
      )
    }

    // Apply limit
    if (limit) {
      filteredServices = filteredServices.slice(0, parseInt(limit))
    }

    res.json({
      success: true,
      data: filteredServices,
      total: filteredServices.length,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch services',
    })
  }
})

// Get service by ID
router.get('/:id', (req, res) => {
  try {
    const serviceId = parseInt(req.params.id)
    const service = services.find((s) => s.id === serviceId)

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found',
      })
    }

    res.json({
      success: true,
      data: service,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch service',
    })
  }
})

// Get service categories
router.get('/categories/list', (req, res) => {
  try {
    const categories = [...new Set(services.map((service) => service.category))]

    res.json({
      success: true,
      data: categories,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch categories',
    })
  }
})

// Get service pricing
router.get('/pricing/overview', (req, res) => {
  try {
    const pricing = services.map((service) => ({
      id: service.id,
      title: service.title,
      category: service.category,
      pricing: service.pricing,
      duration: service.duration,
    }))

    res.json({
      success: true,
      data: pricing,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch pricing information',
    })
  }
})

// Request quote for service
router.post('/:id/quote', (req, res) => {
  try {
    const serviceId = parseInt(req.params.id)
    const service = services.find((s) => s.id === serviceId)

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found',
      })
    }

    const { name, email, company, requirements, budget } = req.body

    // Here you would typically:
    // 1. Validate the request
    // 2. Save to database
    // 3. Send email notification
    // 4. Generate quote

    // Mock response
    res.json({
      success: true,
      message:
        'Quote request submitted successfully! We will contact you within 24 hours.',
      data: {
        quoteId: Date.now(),
        service: service.title,
        requestedBy: name,
        email: email,
        submittedAt: new Date().toISOString(),
      },
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to submit quote request',
    })
  }
})

module.exports = router
