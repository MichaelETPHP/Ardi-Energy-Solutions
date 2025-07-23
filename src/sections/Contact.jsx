import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  HiEnvelope,
  HiPhone,
  HiMapPin,
  HiArrowTrendingUp,
  HiPaperAirplane,
  HiCheckCircle,
  HiUser,
  HiChatBubbleOvalLeft,
  HiDevicePhoneMobile,
} from 'react-icons/hi2'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: HiEnvelope,
      title: 'Email',
      details: ['ardienergysolutions97@gmail.com'],
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: HiPhone,
      title: 'Telephone',
      details: ['+251 11 8 102143'],
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: HiDevicePhoneMobile,
      title: 'Mobile',
      details: ['+251 9 2323 9898'],
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: HiMapPin,
      title: 'Location',
      details: [
        'Mexico, behind School of Commerce',
        'MEZID Plaza 3rd floor, Office No 300',
        'Addis Ababa, Ethiopia',
      ],
      color: 'from-orange-400 to-red-500',
    },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section id='contact' className='section-padding bg-white'>
      <div className='container-custom'>
        {/* Enhanced "Let's Build the Future Together" Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='mb-20'
        >
          {/* Glass Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='relative overflow-hidden'
          >
            {/* Background Gradient */}
            <div className='absolute inset-0 bg-gradient-to-br from-primary-500/10 via-blue-500/10 to-secondary-500/10 rounded-3xl'></div>

            {/* Glass Card */}
            <div className='relative bg-white/80 backdrop-blur-xl rounded-3xl p-12 md:p-16 shadow-2xl border border-white/30'>
              {/* Decorative Elements */}
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-transparent rounded-full blur-3xl'></div>
              <div className='absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary-500/20 to-transparent rounded-full blur-2xl'></div>

              {/* Content Container */}
              <div className='relative z-10 text-center max-w-4xl mx-auto'>
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 backdrop-blur-sm border border-primary-500/20 rounded-full text-sm font-semibold text-primary-700 mb-8'
                >
                  <HiArrowTrendingUp className='w-5 h-5 mr-2' />
                  Transform Your Energy Future
                </motion.div>

                {/* Main Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className='text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-8 leading-tight'
                >
                  Let's Build the Future
                  <span className='block bg-gradient-to-r from-primary-500 via-blue-600 to-secondary-500 bg-clip-text text-transparent'>
                    Together
                  </span>
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className='text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed'
                >
                  Ready to transform your energy infrastructure? Our team of
                  experts is here to help you design and implement the perfect
                  energy solution for your needs.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className='flex flex-col sm:flex-row gap-4 justify-center items-center'
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className='bg-gradient-to-r from-primary-500 to-red-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2'
                  >
                    <HiPaperAirplane className='w-5 h-5' />
                    <span>Start Your Project</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className='bg-white/80 backdrop-blur-sm text-gray-900 font-semibold py-4 px-8 rounded-full border-2 border-gray-200 hover:border-primary-300 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2'
                  >
                    <HiChatBubbleOvalLeft className='w-5 h-5' />
                    <span>Get Consultation</span>
                  </motion.button>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className='grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-200/50'
                >
                  <div className='text-center'>
                    <div className='text-3xl md:text-4xl font-bold text-primary-500 mb-2'>
                      500+
                    </div>
                    <div className='text-gray-600 font-medium'>
                      Projects Completed
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl md:text-4xl font-bold text-blue-500 mb-2'>
                      50MW+
                    </div>
                    <div className='text-gray-600 font-medium'>
                      Energy Generated
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl md:text-4xl font-bold text-secondary-500 mb-2'>
                      100%
                    </div>
                    <div className='text-gray-600 font-medium'>
                      Client Satisfaction
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16'>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='bg-gray-50 rounded-2xl p-8'
          >
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>
              Send us a Message
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className='text-center py-12'
              >
                <HiCheckCircle className='w-16 h-16 text-green-500 mx-auto mb-4' />
                <h4 className='text-xl font-bold text-gray-900 mb-2'>
                  Message Sent!
                </h4>
                <p className='text-gray-600'>
                  Thank you for contacting us. We'll get back to you within 24
                  hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Full Name *
                  </label>
                  <div className='relative'>
                    <HiUser className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' />
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300'
                      placeholder='Enter your full name'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Email Address *
                  </label>
                  <div className='relative'>
                    <HiEnvelope className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' />
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300'
                      placeholder='Enter your email address'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Message *
                  </label>
                  <div className='relative'>
                    <HiChatBubbleOvalLeft className='absolute left-3 top-3 w-5 h-5 text-gray-400' />
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none'
                      placeholder='Tell us about your energy needs...'
                    />
                  </div>
                </div>

                <motion.button
                  type='submit'
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full btn-primary rounded-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2'
                >
                  {isSubmitting ? (
                    <>
                      <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <HiPaperAirplane className='w-5 h-5' />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='space-y-8'
          >
            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                Contact Information
              </h3>
              <p className='text-gray-600 mb-8'>
                Get in touch with our team of energy experts. We're here to help
                you find the perfect solution for your energy needs.
              </p>
            </div>

            <div className='space-y-6'>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className='flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300'
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <info.icon className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-2'>
                      {info.title}
                    </h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className='text-gray-600'>
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className='bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-6 border border-primary-100'
            >
              <h4 className='font-semibold text-gray-900 mb-3'>
                Need Immediate Assistance?
              </h4>
              <p className='text-gray-600 mb-4'>
                Our technical support team is available 24/7 for emergency
                consultations.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='btn-primary rounded-full'
              >
                Emergency Contact
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className='mt-16 bg-gray-200 rounded-2xl h-64 flex items-center justify-center'
        >
          <div className='text-center text-gray-500'>
            <HiMapPin className='w-12 h-12 mx-auto mb-4' />
            <p className='text-lg font-medium'>Interactive Map</p>
            <p className='text-sm'>Our office locations and service areas</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
