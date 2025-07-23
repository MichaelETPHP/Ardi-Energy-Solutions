import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  HiBuildingOffice2,
  HiShieldCheck,
  HiStar,
  HiHeart,
  HiChevronLeft,
  HiChevronRight,
} from 'react-icons/hi2'

const Recommendations = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentIndex, setCurrentIndex] = useState(0)

  const recommendations = [
    {
      name: 'Midroc',
      icon: HiBuildingOffice2,
      description: 'Leading construction and development company',
      color: 'from-blue-500 to-blue-600',
      testimonial:
        'Exceptional electrical engineering services with outstanding quality and reliability.',
    },
    {
      name: 'TSD',
      icon: HiShieldCheck,
      description: 'Technology and Systems Development',
      color: 'from-green-500 to-green-600',
      testimonial:
        'Professional team delivering innovative electrical solutions with precision.',
    },
    {
      name: 'MOHA',
      icon: HiStar,
      description: 'Ministry of Health Affairs',
      color: 'from-purple-500 to-purple-600',
      testimonial:
        'Reliable electrical infrastructure services that meet our high standards.',
    },
    {
      name: 'PYRAMID',
      icon: HiHeart,
      description: 'Pyramid Construction and Development',
      color: 'from-red-500 to-red-600',
      testimonial:
        'Outstanding project management and technical expertise in electrical systems.',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % recommendations.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [recommendations.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % recommendations.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + recommendations.length) % recommendations.length
    )
  }

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
            <HiStar className='w-4 h-4 mr-2' />
            Client Recommendations
          </motion.div>

          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            Trusted by
            <span className='block text-gradient'>Leading Companies</span>
          </h2>
          <p className='text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto'>
            We are proud to have earned the trust and recommendations of major
            companies across various industries for our electrical engineering
            expertise.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className='relative max-w-4xl mx-auto'
        >
          {/* Main Carousel */}
          <div className='relative overflow-hidden rounded-3xl bg-white shadow-2xl'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
                className='p-8 md:p-12'
              >
                <div className='text-center'>
                  {/* Client Icon */}
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className={`w-24 h-24 bg-gradient-to-br ${recommendations[currentIndex].color} rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg`}
                  >
                    {React.createElement(recommendations[currentIndex].icon, {
                      className: 'w-12 h-12 text-white',
                    })}
                  </motion.div>

                  {/* Client Name */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'
                  >
                    {recommendations[currentIndex].name}
                  </motion.h3>

                  {/* Client Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className='text-lg text-gray-600 mb-8'
                  >
                    {recommendations[currentIndex].description}
                  </motion.p>

                  {/* Testimonial */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className='bg-gradient-to-r from-red-50 to-gray-50 rounded-2xl p-6 border border-red-100'
                  >
                    <p className='text-gray-700 italic text-lg leading-relaxed'>
                      "{recommendations[currentIndex].testimonial}"
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className='absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200 z-10'
            >
              <HiChevronLeft className='w-6 h-6 text-gray-700' />
            </button>
            <button
              onClick={nextSlide}
              className='absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200 z-10'
            >
              <HiChevronRight className='w-6 h-6 text-gray-700' />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className='flex justify-center mt-8 space-x-3'>
            {recommendations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-red-500 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Client Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.6 }}
          className='mt-16'
        >
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto'>
            {recommendations.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 text-center'
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${client.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  {React.createElement(client.icon, {
                    className: 'w-8 h-8 text-white',
                  })}
                </div>
                <h4 className='font-semibold text-gray-900'>{client.name}</h4>
                <p className='text-sm text-gray-600 mt-1'>
                  {client.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Recommendations
