import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Modal from '../components/Modal'
import Notification from '../components/Notification'
import {
  HiEnvelope,
  HiPhone,
  HiMapPin,
  HiDevicePhoneMobile,
  HiClock,
  HiGlobeAlt,
  HiUser,
} from 'react-icons/hi2'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState({
    isVisible: false,
    message: '',
    type: 'success',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const showNotification = (message, type = 'success') => {
    setNotification({
      isVisible: true,
      message,
      type,
    })
  }

  const hideNotification = () => {
    setNotification((prev) => ({ ...prev, isVisible: false }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        showNotification(data.message, 'success')
        setFormData({ fullName: '', email: '', phone: '' })
        setIsModalOpen(false)
      } else {
        const errorMessage =
          data.message || 'Failed to submit form. Please try again.'
        showNotification(errorMessage, 'error')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      showNotification(
        'Network error. Please check your connection and try again.',
        'error'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: HiEnvelope,
      title: 'Email',
      details: 'ardienergysolutions97@gmail.com',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: HiPhone,
      title: 'Telephone',
      details: '+251 11 8 102143',
      color: 'from-gray-700 to-gray-800',
    },
    {
      icon: HiDevicePhoneMobile,
      title: 'Mobile',
      details: '+251 9 2323 9898',
      color: 'from-red-600 to-red-700',
    },
    {
      icon: HiMapPin,
      title: 'Address',
      details: 'Addis Ababa, Ethiopia',
      color: 'from-gray-600 to-gray-700',
    },
    {
      icon: HiClock,
      title: 'Working Hours',
      details: 'Mon - Fri: 8:00 AM - 6:00 PM',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: HiGlobeAlt,
      title: 'Service Area',
      details: 'Ethiopia & Surrounding Regions',
      color: 'from-gray-700 to-gray-800',
    },
  ]

  return (
    <section
      id='contact'
      className='section-padding bg-gradient-to-br from-gray-50 to-red-50'
    >
      <div className='container-custom'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className='text-center mb-16'
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className='inline-flex items-center px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-medium mb-6'
          >
            <HiPhone className='w-4 h-4 mr-2' />
            Get In Touch
          </motion.div>

          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            Contact
            <span className='block text-gradient'>Our Team</span>
          </h2>
          <p className='text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto'>
            Ready to power your next project? Get in touch with our electrical
            engineering experts. We're here to help you with all your electrical
            infrastructure needs.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group'
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}
              >
                {React.createElement(info.icon, {
                  className: 'w-8 h-8 text-white',
                })}
              </div>

              <h3 className='text-xl font-bold text-gray-900 mb-3'>
                {info.title}
              </h3>

              <p className='text-gray-600 leading-relaxed font-medium'>
                {info.details}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Professional Services Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 1 }}
          className='mt-12 text-center'
        >
          <div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-100'>
            <h4 className='font-semibold text-gray-900 mb-3'>
              Professional Electrical Engineering Services
            </h4>
            <p className='text-gray-600 text-sm leading-relaxed'>
              Licensed and certified electrical contractors specializing in
              power distribution, transmission systems, and comprehensive
              electrical infrastructure solutions across Ethiopia.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Contact Form Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className='text-center'>
          <h3 className='text-2xl font-bold text-gray-900 mb-6'>Contact Us</h3>
          <p className='text-gray-600 mb-8'>
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label
                htmlFor='fullName'
                className='block text-sm font-medium text-gray-700 mb-2 text-left'
              >
                Full Name *
              </label>
              <input
                type='text'
                id='fullName'
                name='fullName'
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors'
                placeholder='Enter your full name'
              />
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 mb-2 text-left'
              >
                Email *
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors'
                placeholder='Enter your email address'
              />
            </div>

            <div>
              <label
                htmlFor='phone'
                className='block text-sm font-medium text-gray-700 mb-2 text-left'
              >
                Phone Number *
              </label>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleInputChange}
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors'
                placeholder='Enter your phone number'
              />
            </div>

            <motion.button
              type='submit'
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </motion.button>
          </form>
        </div>
      </Modal>

      {/* Notification Component */}
      <Notification
        isVisible={notification.isVisible}
        message={notification.message}
        type={notification.type}
        onClose={hideNotification}
      />
    </section>
  )
}

export default Contact
