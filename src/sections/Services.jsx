import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  HiBriefcase,
  HiBolt,
  HiCog,
  HiWrench,
  HiScale,
  HiAcademicCap,
  HiCheckCircle,
  HiChevronDown,
  HiBeaker,
  HiCog6Tooth,
  HiWrenchScrewdriver,
  HiBuildingOffice2,
  HiCpuChip,
  HiShieldCheck,
} from 'react-icons/hi2'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const services = [
    {
      title: 'Project Consulting & Management',
      icon: HiBriefcase,
      description:
        'Expert consulting and comprehensive project management services for electrical infrastructure projects.',
      items: [
        'Project planning and feasibility studies',
        'Technical specifications and documentation',
        'Project timeline and resource management',
        'Quality control and assurance',
        'Risk assessment and mitigation',
        'Project supervision and coordination',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Electrical Design',
      icon: HiCpuChip,
      description:
        'Professional electrical system design services for power distribution networks.',
      items: [
        'Power system design and analysis',
        'Single line diagrams',
        'Load calculations and system sizing',
        'Protection system design',
        'Network planning and optimization',
        'Technical documentation',
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Distribution Line Construction',
      icon: HiBolt,
      description:
        'Complete MV & LV distribution line construction, installation, testing and commissioning.',
      items: [
        'Over-head line construction',
        'Underground line installation',
        'Distribution transformer erection',
        'Compact transformer installation',
        'Testing and commissioning',
        'Quality inspection and certification',
      ],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Cable Systems & Infrastructure',
      icon: HiWrenchScrewdriver,
      description:
        'Specialized cable installation and infrastructure services.',
      items: [
        'Cable joint installation',
        'Cable termination services',
        'Cable tray system installation',
        'Cable routing and management',
        'Testing and certification',
        'Maintenance and repairs',
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Substation Works',
      icon: HiCog6Tooth,
      description: 'Complete substation installation and maintenance services.',
      items: [
        'Substation construction',
        'Compact substation installation',
        'Net-station implementation',
        'Equipment installation',
        'Testing and commissioning',
        'Maintenance and upgrades',
      ],
      color: 'from-red-500 to-red-600',
    },
    {
      title: 'Metering & Instrumentation',
      icon: HiScale,
      description:
        'Professional installation and calibration of electrical measurement equipment.',
      items: [
        'KWHM meter installation',
        'Current Transformer (CT) setup',
        'Voltage Transformer (VT) installation',
        'Calibration services',
        'Testing and certification',
        'Maintenance and monitoring',
      ],
      color: 'from-indigo-500 to-indigo-600',
    },
  ]

  return (
    <section
      id='services'
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
            transition={{ duration: 0.6, delay: 0.2 }}
            className='inline-flex items-center px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-medium mb-6'
          >
            <HiShieldCheck className='w-4 h-4 mr-2' />
            Our Services
          </motion.div>

          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            Professional Electrical
            <span className='block text-gradient'>Engineering Services</span>
          </h2>
          <p className='text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto'>
            We provide comprehensive electrical engineering services including
            project management, design, construction, installation, testing, and
            specialized maintenance for power distribution systems and
            equipment.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-8'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
              className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-200 border border-gray-100 overflow-hidden'
            >
              <div className='p-8'>
                <div
                  className='flex items-center justify-between cursor-pointer mb-4'
                  onClick={() => toggleAccordion(index)}
                >
                  <div className='flex items-center space-x-4'>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
                      style={{ aspectRatio: '1 / 1' }}
                    >
                      <service.icon className='w-6 h-6 text-white' />
                    </motion.div>
                    <div>
                      <h3 className='text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors'>
                        {service.title}
                      </h3>
                      <p className='text-gray-600 text-sm mt-1'>
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className='flex-shrink-0'
                  >
                    <HiChevronDown className='w-6 h-6 text-gray-400 group-hover:text-red-500 transition-colors' />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className='overflow-hidden'
                    >
                      <div className='pt-4 border-t border-gray-100'>
                        <ul className='space-y-3'>
                          {service.items.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: i * 0.05 }}
                              className='flex items-start space-x-3'
                            >
                              <HiCheckCircle className='text-green-500 w-5 h-5 mt-0.5 flex-shrink-0' />
                              <span className='text-gray-700 leading-relaxed'>
                                {item}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specialized Services Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.6 }}
          className='mt-16'
        >
          <div className='bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-8 md:p-12 shadow-2xl text-white overflow-hidden relative'>
            {/* Background decorative elements */}
            <div className='absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl'></div>
            <div className='absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl'></div>

            <div className='relative z-10'>
              <div className='flex items-center justify-center mb-8'>
                <div className='w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm'>
                  <HiBeaker className='w-10 h-10 text-white' />
                </div>
              </div>

              <h3 className='text-3xl md:text-4xl font-bold text-center mb-6'>
                Specialized Services
              </h3>

              <p className='text-lg text-center mb-8 text-white/90 max-w-2xl mx-auto'>
                Expert specialized services for critical electrical equipment
                maintenance and optimization
              </p>

              <div className='grid md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
                <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20'>
                  <div className='flex items-center space-x-4 mb-4'>
                    <div className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center'>
                      <HiBeaker className='w-6 h-6 text-white' />
                    </div>
                    <h4 className='text-xl font-semibold'>
                      Transformer Oil Treatment
                    </h4>
                  </div>
                  <p className='text-white/80'>
                    Professional transformer oil analysis, treatment, and
                    maintenance services to ensure optimal performance and
                    longevity.
                  </p>
                </div>

                <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20'>
                  <div className='flex items-center space-x-4 mb-4'>
                    <div className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center'>
                      <HiCog6Tooth className='w-6 h-6 text-white' />
                    </div>
                    <h4 className='text-xl font-semibold'>
                      Power Factor Corrector (PFC)
                    </h4>
                  </div>
                  <p className='text-white/80'>
                    Analysis, design, and installation of power factor
                    correction systems to improve electrical efficiency.
                  </p>
                </div>

                <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20'>
                  <div className='flex items-center space-x-4 mb-4'>
                    <div className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center'>
                      <HiBeaker className='w-6 h-6 text-white' />
                    </div>
                    <h4 className='text-xl font-semibold'>SF6 Gas Refilling</h4>
                  </div>
                  <p className='text-white/80'>
                    Professional SF6 gas refilling and maintenance services for
                    high-voltage switchgear and equipment.
                  </p>
                </div>

                <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20'>
                  <div className='flex items-center space-x-4 mb-4'>
                    <div className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center'>
                      <HiWrenchScrewdriver className='w-6 h-6 text-white' />
                    </div>
                    <h4 className='text-xl font-semibold'>
                      Cable Joint & Termination
                    </h4>
                  </div>
                  <p className='text-white/80'>
                    Expert cable jointing and termination services with
                    precision installation and quality assurance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
