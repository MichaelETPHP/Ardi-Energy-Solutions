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
        'Comprehensive project management and consulting services for electrical infrastructure projects.',
      items: [
        'Project planning and feasibility studies',
        'Cost estimation and budgeting',
        'Timeline management and coordination',
        'Quality assurance and control',
        'Risk assessment and mitigation',
        'Stakeholder communication',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Electrical Design',
      icon: HiCpuChip,
      description:
        'Professional electrical design services for power distribution and control systems.',
      items: [
        'Power system design and analysis',
        'Single line diagrams and schematics',
        'Load calculations and sizing',
        'Protection system design',
        'Control system design',
        'Documentation and specifications',
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'MV & LV Distribution Lines',
      icon: HiBolt,
      description:
        'Complete construction, installation, testing and commissioning of distribution networks.',
      items: [
        'Over-head & Underground lines construction',
        'Distribution and compact transformer erection',
        'Cable joint & termination services',
        'Cable tray systems installation',
        'Sub-station, compact substation & net-station works',
        'KWHM, CT & VT installation and calibration',
      ],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Specialized Services',
      icon: HiBeaker,
      description:
        'Expert specialized services for critical electrical equipment maintenance.',
      items: [
        'Transformer Oil Treatment and analysis',
        'Power factor Corrector (PFC) analysis and installation',
        'SF6 Gas refilling and maintenance',
        'Cable joint & termination expertise',
        'Equipment testing and diagnostics',
        'Preventive maintenance programs',
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Equipment Installation & Maintenance',
      icon: HiWrenchScrewdriver,
      description:
        'Professional installation and maintenance services for electrical equipment.',
      items: [
        'Transformer installation and maintenance',
        'Switchgear installation and testing',
        'Protection relay installation',
        'Metering equipment installation',
        'Emergency power systems',
        'UPS and backup power systems',
      ],
      color: 'from-red-500 to-red-600',
    },
    {
      title: 'Training & Certification',
      icon: HiAcademicCap,
      description:
        'Comprehensive training programs for electrical equipment operation and safety.',
      items: [
        'Equipment operation training',
        'Safety procedures and protocols',
        'Maintenance best practices',
        'Troubleshooting techniques',
        'Regulatory compliance training',
        'Certification programs',
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
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6'
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
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden'
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
                      <h3 className='text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors'>
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
                    <HiChevronDown className='w-6 h-6 text-gray-400 group-hover:text-primary-500 transition-colors' />
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='text-center mt-16'
        >
          <div className='bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-100'>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>
              Ready to Start Your Project?
            </h3>
            <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
              Our team of experienced electrical engineers is ready to help you
              with your power distribution and electrical infrastructure needs.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='btn-primary rounded-full'
              >
                Get Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='btn-secondary rounded-full'
              >
                Download Service Brochure
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
