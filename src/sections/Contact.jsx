import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  HiEnvelope,
  HiPhone,
  HiMapPin,
  HiDevicePhoneMobile,
  HiClock,
  HiGlobeAlt,
} from 'react-icons/hi2'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.8 }}
          className='text-center bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 md:p-12 text-white'
        >
          <h3 className='text-2xl md:text-3xl font-bold mb-4'>
            Ready to Start Your Project?
          </h3>
          <p className='text-red-100 text-lg mb-8 max-w-2xl mx-auto'>
            Contact us today for a free consultation and let our expert team
            help you design and implement the perfect electrical solution for
            your needs.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <motion.a
              href='tel:+251118102143'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-white text-red-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center'
            >
              <HiPhone className='w-5 h-5 mr-2' />
              Call Now
            </motion.a>

            <motion.a
              href='mailto:ardienergysolutions97@gmail.com'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold py-4 px-8 rounded-full transition-all duration-200 flex items-center'
            >
              <HiEnvelope className='w-5 h-5 mr-2' />
              Send Email
            </motion.a>
          </div>
        </motion.div>

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
    </section>
  )
}

export default Contact
