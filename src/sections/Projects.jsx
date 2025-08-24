import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  HiBuildingOffice2,
  HiBolt,
  HiHomeModern,
  HiBuildingStorefront,
  HiXMark,
  HiArrowRight,
  HiCalendarDays,
  HiMapPin,
  HiCurrencyDollar,
  HiUsers,
} from 'react-icons/hi2'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      id: 1,
      title: 'Addis Ababa MV and LV Electric Rehabilitation Project',
      client: 'POWER CHINA',
      category: 'Infrastructure',
      location: 'Addis Ababa, Ethiopia',
      duration: '18 months',
      team: '25 engineers',
      description:
        'Comprehensive rehabilitation of medium and low voltage electrical infrastructure across Addis Ababa, including transformer upgrades, distribution network improvements, and smart grid implementation.',
      icon: HiBolt,
      color: 'from-blue-500 to-blue-600',
      status: 'Completed',
      year: '2023',
      highlights: [
        'Upgraded 150+ transformers',
        'Installed smart metering systems',
        'Improved grid reliability by 40%',
        'Reduced power losses by 25%',
      ],
    },
    {
      id: 2,
      title: 'MOHA Soft Drinks S.C.',
      client: 'MOHA Soft Drinks',
      category: 'Industrial',
      location: 'Addis Ababa, Ethiopia',
      duration: '12 months',
      team: '18 engineers',
      description:
        'Complete electrical system design and installation for MOHA Soft Drinks manufacturing facility, including power distribution, lighting, and automation systems.',
      icon: HiBuildingOffice2,
      color: 'from-green-500 to-green-600',
      status: 'Completed',
      year: '2023',
      highlights: [
        'Factory automation systems',
        'Energy-efficient lighting design',
        'Backup power systems',
        'Production line integration',
      ],
    },
  ]

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <section
        id='projects'
        className='section-padding bg-gradient-to-br from-gray-50 to-blue-50'
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
              <HiBuildingOffice2 className='w-4 h-4 mr-2' />
              Our Projects
            </motion.div>

            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
              Complete
              <span className='block text-gradient'>Projects</span>
            </h2>
            <p className='text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto'>
              Discover our portfolio of successful electrical engineering
              projects across various industries, showcasing our expertise and
              commitment to excellence.
            </p>
          </motion.div>

          {/* Featured Projects Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group'
              >
                {/* Project Header */}
                <div
                  className={`bg-gradient-to-br ${project.color} p-6 text-white`}
                >
                  <div className='flex items-center justify-between mb-4'>
                    <div className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center'>
                      {React.createElement(project.icon, {
                        className: 'w-6 h-6',
                      })}
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Completed'
                          ? 'bg-green-500/20 text-green-100'
                          : 'bg-yellow-500/20 text-yellow-100'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <h3 className='text-xl font-bold mb-2 line-clamp-2'>
                    {project.title}
                  </h3>
                  <p className='text-white/80 text-sm'>{project.client}</p>
                </div>

                {/* Project Details */}
                <div className='p-6'>
                  {/* Key Project Info - Prominently Displayed */}
                  <div className='bg-gray-50 rounded-xl p-4 mb-4'>
                    <div className='grid grid-cols-3 gap-4 text-center'>
                      <div className='flex flex-col items-center'>
                        <div className='w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-2'>
                          <HiCalendarDays className='w-5 h-5 text-red-600' />
                        </div>
                        <span className='text-xs text-gray-500'>Duration</span>
                        <span className='text-sm font-semibold text-gray-900'>
                          {project.duration}
                        </span>
                      </div>
                      <div className='flex flex-col items-center'>
                        <div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2'>
                          <HiUsers className='w-5 h-5 text-blue-600' />
                        </div>
                        <span className='text-xs text-gray-500'>Team Size</span>
                        <span className='text-sm font-semibold text-gray-900'>
                          {project.team}
                        </span>
                      </div>
                      <div className='flex flex-col items-center'>
                        <div className='w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-2'>
                          <HiCalendarDays className='w-5 h-5 text-green-600' />
                        </div>
                        <span className='text-xs text-gray-500'>Year</span>
                        <span className='text-sm font-semibold text-gray-900'>
                          {project.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className='text-gray-600 text-sm line-clamp-3 mb-4'>
                    {project.description}
                  </p>

                  <div className='flex items-center justify-center'>
                    <span className='text-red-600 font-semibold'>
                      {project.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.7 }}
            className='text-center'
          >
            <motion.button
              onClick={openModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center mx-auto'
            >
              View All Projects
              <HiArrowRight className='w-5 h-5 ml-2' />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4'
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className='bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden'
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className='bg-gradient-to-r from-red-600 to-red-700 text-white p-6 flex items-center justify-between'>
                <h2 className='text-2xl font-bold'>
                  Complete Projects Portfolio
                </h2>
                <button
                  onClick={closeModal}
                  className='w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors'
                >
                  <HiXMark className='w-6 h-6' />
                </button>
              </div>

              {/* Modal Content */}
              <div className='p-6 overflow-y-auto max-h-[calc(90vh-120px)]'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                  {projects.map((project) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className='bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow'
                    >
                      {/* Project Header */}
                      <div className='flex items-center justify-between mb-4'>
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-full flex items-center justify-center`}
                        >
                          {React.createElement(project.icon, {
                            className: 'w-6 h-6 text-white',
                          })}
                        </div>
                        <div className='text-right'>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              project.status === 'Completed'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-yellow-100 text-yellow-700'
                            }`}
                          >
                            {project.status}
                          </span>
                          <p className='text-sm text-gray-500 mt-1'>
                            {project.year}
                          </p>
                        </div>
                      </div>

                      <h3 className='text-xl font-bold text-gray-900 mb-2'>
                        {project.title}
                      </h3>
                      <p className='text-red-600 font-semibold mb-3'>
                        {project.client}
                      </p>

                      <p className='text-gray-600 mb-4'>
                        {project.description}
                      </p>

                      {/* Project Stats */}
                      <div className='grid grid-cols-2 gap-3 mb-4'>
                        <div className='bg-white rounded-lg p-3'>
                          <p className='text-xs text-gray-500'>Location</p>
                          <p className='font-semibold text-sm'>
                            {project.location}
                          </p>
                        </div>
                        <div className='bg-white rounded-lg p-3'>
                          <p className='text-xs text-gray-500'>Duration</p>
                          <p className='font-semibold text-sm'>
                            {project.duration}
                          </p>
                        </div>

                        <div className='bg-white rounded-lg p-3'>
                          <p className='text-xs text-gray-500'>Team Size</p>
                          <p className='font-semibold text-sm'>
                            {project.team}
                          </p>
                        </div>
                      </div>

                      {/* Project Highlights */}
                      <div>
                        <h4 className='font-semibold text-gray-900 mb-2'>
                          Key Highlights:
                        </h4>
                        <ul className='space-y-1'>
                          {project.highlights.map((highlight, index) => (
                            <li
                              key={index}
                              className='flex items-center text-sm text-gray-600'
                            >
                              <div className='w-1.5 h-1.5 bg-red-500 rounded-full mr-2'></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Projects
