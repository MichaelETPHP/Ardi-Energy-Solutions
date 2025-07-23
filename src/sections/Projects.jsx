import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  HiSun,
  HiCloud,
  HiLightningBolt,
  HiOfficeBuilding,
  HiHome,
  HiTrendingUp,
  HiCalendar,
  HiLocationMarker,
  HiEye,
  HiArrowRight,
} from 'react-icons/hi'
import Modal from '../components/Modal'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedProject(null)
    setIsModalOpen(false)
  }

  const projects = [
    {
      title: 'Solar Farm Complex',
      category: 'Solar Energy',
      icon: HiSun,
      location: 'Ethiopia',
      date: '2024',
      description:
        '50MW solar farm installation providing clean energy to 15,000 households.',
      specs: {
        capacity: '50MW',
        panels: '150,000',
        area: '200 acres',
        output: '85,000 MWh/year',
      },
      image: 'solar-farm',
      color: 'from-yellow-400 to-orange-500',
      status: 'Completed',
    },
    {
      title: 'Wind Energy Park',
      category: 'Wind Energy',
      icon: HiCloud,
      location: 'Ethiopia',
      date: '2023',
      description:
        '100MW wind farm with 25 turbines generating renewable energy.',
      specs: {
        capacity: '100MW',
        turbines: '25',
        height: '120m',
        output: '300,000 MWh/year',
      },
      image: 'wind-farm',
      color: 'from-blue-400 to-cyan-500',
      status: 'Completed',
    },
    {
      title: 'Smart Grid Network',
      category: 'Grid Technology',
      icon: HiLightningBolt,
      location: 'Ethiopia',
      date: '2024',
      description:
        'Advanced smart grid implementation for improved energy distribution.',
      specs: {
        coverage: '500,000 homes',
        efficiency: '98%',
        savings: '25%',
        monitoring: 'Real-time',
      },
      image: 'smart-grid',
      color: 'from-purple-400 to-pink-500',
      status: 'In Progress',
    },
    {
      title: 'Commercial Solar Installation',
      category: 'Commercial',
      icon: HiOfficeBuilding,
      location: 'Ethiopia',
      date: '2023',
      description:
        '2MW rooftop solar installation for major corporate headquarters.',
      specs: {
        capacity: '2MW',
        panels: '6,000',
        savings: '$400K/year',
        coverage: '100%',
      },
      image: 'commercial-solar',
      color: 'from-green-400 to-emerald-500',
      status: 'Completed',
    },
    {
      title: 'Residential Community',
      category: 'Residential',
      icon: HiHome,
      location: 'Ethiopia',
      date: '2024',
      description:
        '500-home community with integrated solar and battery storage.',
      specs: {
        homes: '500',
        capacity: '2.5MW',
        storage: '5MWh',
        savings: '90%',
      },
      image: 'residential',
      color: 'from-indigo-400 to-blue-500',
      status: 'Completed',
    },
    {
      title: 'Industrial Energy Hub',
      category: 'Industrial',
      icon: HiLightningBolt,
      location: 'Ethiopia',
      date: '2023',
      description:
        'Comprehensive energy solution for large manufacturing facility.',
      specs: {
        capacity: '20MW',
        efficiency: '95%',
        savings: '$2M/year',
        type: 'Hybrid',
      },
      image: 'industrial',
      color: 'from-gray-400 to-slate-500',
      status: 'Completed',
    },
  ]

  return (
    <section id='projects' className='section-padding bg-gray-50'>
      <div className='container-custom'>
        {/* Enhanced Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center mb-20'
        >
          {/* Glass Card Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='relative bg-white/80 backdrop-blur-xl rounded-3xl p-12 md:p-16 shadow-2xl border border-white/30 mb-16'
          >
            {/* Decorative Background */}
            <div className='absolute inset-0 bg-gradient-to-br from-primary-500/5 via-blue-500/5 to-secondary-500/5 rounded-3xl'></div>
            <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-transparent rounded-full blur-3xl'></div>
            <div className='absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary-500/10 to-transparent rounded-full blur-2xl'></div>

            <div className='relative z-10'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 backdrop-blur-sm border border-primary-500/20 rounded-full text-sm font-semibold text-primary-700 mb-8'
              >
                <HiTrendingUp className='w-5 h-5 mr-2' />
                Featured Projects
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-800 mb-8 leading-tight'
              >
                Success Stories
                <span className='block bg-gradient-to-r from-primary-500 via-blue-600 to-secondary-500 bg-clip-text text-transparent'>
                  Across Ethiopia
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className='text-xl md:text-2xl text-neutral-700 max-w-4xl mx-auto leading-relaxed'
              >
                Explore our portfolio of successful energy projects that have
                transformed communities and businesses across Ethiopia with
                innovative solutions.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Projects Display - Show Only 3 Projects */}
        <div className='grid lg:grid-cols-3 gap-8 lg:gap-12 mb-20'>
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className='group relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50'
            >
              {/* Project Header with Gradient */}
              <div className='relative h-64 overflow-hidden'>
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`}
                />

                {/* Decorative Elements */}
                <div className='absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl'></div>
                <div className='absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl'></div>

                {/* Icon */}
                <div className='absolute inset-0 flex items-center justify-center'>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className='w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30'
                  >
                    <project.icon className='w-10 h-10 text-white' />
                  </motion.div>
                </div>

                {/* Status Badge */}
                <div className='absolute top-6 right-6'>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border ${
                      project.status === 'Completed'
                        ? 'bg-green-500/20 text-green-700 border-green-500/30'
                        : 'bg-yellow-500/20 text-yellow-700 border-yellow-500/30'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Category Badge */}
                <div className='absolute top-6 left-6'>
                  <span className='px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30'>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className='p-8'>
                {/* Project Title */}
                <h3 className='text-2xl font-bold text-neutral-800 group-hover:text-primary-500 transition-colors mb-4 leading-tight'>
                  {project.title}
                </h3>

                {/* Location and Date */}
                <div className='flex items-center space-x-6 mb-6 text-sm text-neutral-600'>
                  <div className='flex items-center space-x-2'>
                    <HiLocationMarker className='w-4 h-4 text-primary-500' />
                    <span>{project.location}</span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <HiCalendar className='w-4 h-4 text-primary-500' />
                    <span>{project.date}</span>
                  </div>
                </div>

                {/* Description */}
                <p className='text-neutral-700 mb-8 leading-relaxed text-base'>
                  {project.description}
                </p>

                {/* Key Specifications */}
                <div className='grid grid-cols-2 gap-4 mb-8'>
                  {Object.entries(project.specs)
                    .slice(0, 4)
                    .map(([key, value]) => (
                      <div
                        key={key}
                        className='bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100'
                      >
                        <div className='text-xs text-neutral-500 uppercase tracking-wide mb-2 font-medium'>
                          {key}
                        </div>
                        <div className='font-bold text-neutral-800 text-lg'>
                          {value}
                        </div>
                      </div>
                    ))}
                </div>

                {/* Enhanced CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openModal(project)}
                  className='w-full bg-gradient-to-r from-primary-500 to-red-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 group-hover:from-primary-600 group-hover:to-red-700'
                >
                  <HiEye className='w-5 h-5' />
                  <span>View Project Details</span>
                  <HiArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </motion.button>
              </div>

              {/* Hover Overlay Effect */}
              <div className='absolute inset-0 bg-gradient-to-t from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
            </motion.div>
          ))}
        </div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100'
        >
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
            <div>
              <div className='text-3xl md:text-4xl font-bold text-primary-500 mb-2'>
                500+
              </div>
              <div className='text-neutral-700'>Projects Completed</div>
            </div>
            <div>
              <div className='text-3xl md:text-4xl font-bold text-primary-500 mb-2'>
                50MW+
              </div>
              <div className='text-neutral-700'>Total Capacity</div>
            </div>
            <div>
              <div className='text-3xl md:text-4xl font-bold text-primary-500 mb-2'>
                25+
              </div>
              <div className='text-neutral-700'>States Covered</div>
            </div>
            <div>
              <div className='text-3xl md:text-4xl font-bold text-primary-500 mb-2'>
                100%
              </div>
              <div className='text-neutral-700'>Client Satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className='text-center mt-16'
        >
          <div className='bg-gradient-to-r from-primary-500 to-red-600 rounded-2xl p-8 text-white'>
            <h3 className='text-2xl font-bold mb-4'>
              Ready to Start Your Energy Project?
            </h3>
            <p className='text-white/90 mb-6 max-w-2xl mx-auto'>
              Join hundreds of satisfied clients who have transformed their
              energy infrastructure with our innovative solutions and expert
              team.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-white text-primary-500 hover:bg-gray-50 font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl'
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedProject && (
          <div>
            <h2 className='text-2xl font-bold text-neutral-800 mb-4'>
              {selectedProject.title}
            </h2>
            <p className='text-neutral-700 mb-4'>
              {selectedProject.description}
            </p>
            <div className='grid grid-cols-2 gap-4'>
              {Object.entries(selectedProject.specs).map(([key, value]) => (
                <div key={key} className='bg-gray-100 rounded-lg p-3'>
                  <div className='text-xs text-neutral-500 uppercase tracking-wide mb-1'>
                    {key}
                  </div>
                  <div className='font-semibold text-neutral-800'>{value}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}

export default Projects
