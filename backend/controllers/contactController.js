const Contact = require('../models/Contact')

// Submit contact form
exports.submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body

    // Create new contact entry
    const contact = new Contact({
      name,
      email,
      message,
      ipAddress: req.ip,
      userAgent: req.get('User-Agent'),
    })

    await contact.save()

    // Here you would typically:
    // 1. Send email notification to admin
    // 2. Send confirmation email to user
    // 3. Log the contact request

    res.status(201).json({
      success: true,
      message:
        'Thank you for your message! We will get back to you within 24 hours.',
      data: {
        id: contact._id,
        submittedAt: contact.createdAt,
      },
    })
  } catch (error) {
    console.error('Contact submission error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to submit contact form. Please try again later.',
    })
  }
}

// Get all contacts (admin only)
exports.getAllContacts = async (req, res) => {
  try {
    const { page = 1, limit = 10, status } = req.query

    const query = {}
    if (status) {
      query.status = status
    }

    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)

    const total = await Contact.countDocuments(query)

    res.json({
      success: true,
      data: contacts,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / limit),
        totalContacts: total,
        hasNextPage: page * limit < total,
        hasPrevPage: page > 1,
      },
    })
  } catch (error) {
    console.error('Get contacts error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts',
    })
  }
}

// Get contact by ID
exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id)

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found',
      })
    }

    res.json({
      success: true,
      data: contact,
    })
  } catch (error) {
    console.error('Get contact error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contact',
    })
  }
}

// Update contact status
exports.updateContactStatus = async (req, res) => {
  try {
    const { status } = req.body

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    )

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found',
      })
    }

    res.json({
      success: true,
      message: 'Contact status updated successfully',
      data: contact,
    })
  } catch (error) {
    console.error('Update contact error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to update contact',
    })
  }
}

// Get contact statistics
exports.getContactStats = async (req, res) => {
  try {
    const stats = await Contact.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
        },
      },
    ])

    const totalContacts = await Contact.countDocuments()
    const recentContacts = await Contact.countDocuments({
      createdAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) },
    })

    const statsObject = {
      total: totalContacts,
      recent: recentContacts,
      byStatus: stats.reduce((acc, stat) => {
        acc[stat._id] = stat.count
        return acc
      }, {}),
    }

    res.json({
      success: true,
      data: statsObject,
    })
  } catch (error) {
    console.error('Get contact stats error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contact statistics',
    })
  }
}

module.exports = exports
