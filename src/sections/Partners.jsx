import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  HiUserGroup,
  HiBuildingOffice2,
  HiBolt,
  HiHomeModern,
} from 'react-icons/hi2'

const Partners = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const partners = [
    {
      name: 'ZHIMING Group',
      description: 'Leading Electrical Equipment Manufacturer',
      icon: HiBuildingOffice2,
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Belay AB Cables',
      description: 'Premium Cable Solutions Provider',
      icon: HiBolt,
      color: 'from-green-500 to-green-600',
    },
    {
      name: 'Tabor Ceramic',
      description: 'Advanced Ceramic Technology',
      icon: HiHomeModern,
      color: 'from-purple-500 to-purple-600',
    },
  ]

  return (
    <section className='section-padding bg-gradient-to-br from-gray-50 to-blue-50'>
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
            <HiUserGroup className='w-4 h-4 mr-2' />
            Strategic Partners
          </motion.div>

          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            Trusted
            <span className='block text-gradient'>Partners</span>
          </h2>
          <p className='text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto'>
            We collaborate with industry leaders to deliver the highest quality
            electrical engineering solutions and innovative technologies.
          </p>
        </motion.div>

        {/* Marquee Animation Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className='relative overflow-hidden bg-white rounded-3xl shadow-2xl p-8'
        >
          {/* Marquee Text */}
          <div className='flex items-center justify-center'>
            <motion.div
              animate={{
                x: [0, -100, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className='flex items-center space-x-16 whitespace-nowrap'
            >
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className='flex items-center space-x-4'>
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${partner.color} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    {React.createElement(partner.icon, {
                      className: 'w-8 h-8 text-white',
                    })}
                  </div>
                  <div className='text-center'>
                    <h3 className='text-2xl md:text-3xl font-bold text-black tracking-wide'>
                      {partner.name}
                    </h3>
                    <p className='text-gray-600 font-medium'>
                      {partner.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Partner Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group'
            >
              <div
                className={`w-20 h-20 bg-gradient-to-br ${partner.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}
              >
                {React.createElement(partner.icon, {
                  className: 'w-10 h-10 text-white',
                })}
              </div>

              <h3 className='text-2xl font-bold text-gray-900 mb-3'>
                {partner.name}
              </h3>

              <p className='text-gray-600 leading-relaxed mb-6'>
                {partner.description}
              </p>

              <div className='inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium'>
                Strategic Partner
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.8 }}
          className='mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white text-center'
        >
          <h3 className='text-2xl font-bold mb-4'>Why Partner With Us?</h3>
          <p className='text-white/90 text-lg max-w-3xl mx-auto'>
            Our strategic partnerships enable us to deliver cutting-edge
            electrical solutions with the highest quality standards and
            innovative technologies from industry leaders.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Partners
