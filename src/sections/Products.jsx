import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  HiBolt,
  HiCog,
  HiWrench,
  HiShieldCheck,
  HiEye,
  HiChevronDown,
  HiTruck,
  HiBuildingOffice2,
  HiCpuChip,
  HiBeaker,
  HiWrenchScrewdriver,
  HiCog6Tooth,
  HiScale,
  HiAcademicCap,
  HiStar,
  HiCheckCircle,
} from 'react-icons/hi2'

const Products = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeCategory, setActiveCategory] = useState('distribution')

  const categories = [
    { id: 'distribution', name: 'Distribution Equipment', icon: HiBolt },
    { id: 'tools', name: 'Tools & Equipment', icon: HiWrench },
  ]

  const distributionProducts = [
    {
      name: 'Transformers & Switchgear',
      category: 'Power Equipment',
      icon: HiCog,
      description:
        'High-quality transformers, RMU and switchgear for MV and LV distribution systems.',
      items: [
        'Distribution Transformers (11kV/0.4kV)',
        'Power Transformers',
        'Ring Main Units (RMU)',
        'Switchgear Panels',
        'Compact Substations',
        'Load Break Switches',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Distribution Line Components',
      category: 'Line Equipment',
      icon: HiBolt,
      description:
        'Complete range of distribution line components for overhead and underground systems.',
      items: [
        'Dropout Fuse Arresters',
        'Pin and Post Insulators',
        'Cross Arms and Ti-straps',
        'Collars and Long Bolts',
        'Pillars and Support Structures',
        'Conductor Accessories',
      ],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      name: 'Protection & Control',
      category: 'Protection Equipment',
      icon: HiShieldCheck,
      description:
        'Protection devices and control equipment for safe and reliable power distribution.',
      items: [
        'HRC Fuses and Fuse Bases',
        'Bus Bars and Busbar Systems',
        'Protection Relays',
        'Current Transformers (CT)',
        'Voltage Transformers (VT)',
        'Metering Equipment',
      ],
      color: 'from-red-500 to-red-600',
    },
    {
      name: 'Cables & Conductors',
      category: 'Cable Systems',
      icon: HiBolt,
      description:
        'High-quality cables, wires and conductor systems for power transmission.',
      items: [
        'MV Power Cables (11kV, 33kV)',
        'LV Power Cables',
        'Control Cables',
        'Aluminum Conductors',
        'Copper Conductors',
        'Cable Accessories',
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      name: 'Consumables & Gases',
      category: 'Consumables',
      icon: HiBeaker,
      description:
        'Essential consumables and gases for electrical equipment maintenance.',
      items: [
        'Transformer Oil (Mineral & Synthetic)',
        'Power Factor Corrector (PFC)',
        'SF6 Gas for Switchgear',
        'Insulating Materials',
        'Lubricants and Greases',
        'Cleaning Compounds',
      ],
      color: 'from-purple-500 to-purple-600',
    },
  ]

  const toolsProducts = [
    {
      name: 'Safety Equipment',
      category: 'Personal Protection',
      icon: HiShieldCheck,
      description:
        'Complete range of electrical safety equipment for personnel protection.',
      items: [
        'Electrical Safety Gloves (Class 0-4)',
        'Electrical Safety Boots',
        'Heel Mats and Insulating Mats',
        'Safety Helmets and Face Shields',
        'Arc Flash Protection Suits',
        'Safety Harnesses and Lanyards',
      ],
      color: 'from-red-500 to-red-600',
    },
    {
      name: 'Testing & Measurement',
      category: 'Test Equipment',
      icon: HiScale,
      description:
        'Professional testing and measurement equipment for electrical systems.',
      items: [
        'MV and LV Voltage Detectors',
        'Ground Fault Detectors',
        'Digital Multimeters',
        'Insulation Testers (Meggers)',
        'Phase Sequence Testers',
        'Cable Fault Locators',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Cable Tools',
      category: 'Cable Equipment',
      icon: HiWrenchScrewdriver,
      description:
        'Specialized tools for cable installation, termination and maintenance.',
      items: [
        'Cable Cutters and Strippers',
        'Crimping Tools and Dies',
        'Cable Pulling Equipment',
        'Cable Jointing Kits',
        'Termination Tools',
        'Cable Testing Equipment',
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      name: 'Installation Tools',
      category: 'Installation Equipment',
      icon: HiWrench,
      description:
        'Professional tools for electrical equipment installation and maintenance.',
      items: [
        'Torque Wrenches and Drivers',
        'Terminal Crimping Tools',
        'Wire Strippers and Cutters',
        'Cable Tray Tools',
        'Transformer Lifting Equipment',
        'Specialized Hand Tools',
      ],
      color: 'from-yellow-500 to-orange-500',
    },
  ]

  const getProductsByCategory = () => {
    return activeCategory === 'distribution'
      ? distributionProducts
      : toolsProducts
  }

  return (
    <section id='products' className='section-padding bg-white'>
      <div className='container-custom'>
        {/* Section Header */}
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
            <HiTruck className='w-4 h-4 mr-2' />
            Manufacturing & Supply
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'
          >
            Quality Electrical
            <span className='block text-gradient'>Equipment & Tools</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='text-lg text-gray-600 max-w-3xl mx-auto'
          >
            We manufacture, import and supply a comprehensive range of MV and LV
            distribution equipment, tools, and safety gear. All products meet
            international standards and come with quality assurance.
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='flex justify-center mb-12'
        >
          <div className='bg-gray-100 rounded-2xl p-2 flex space-x-2'>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-white text-red-600 shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <category.icon className='w-5 h-5' />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className='grid lg:grid-cols-2 gap-8'
          >
            {getProductsByCategory().map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                whileHover={{ y: -5 }}
                className='group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-200 border border-gray-100'
              >
                {/* Product Header */}
                <div className='flex items-start space-x-4 mb-6'>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-full flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
                    style={{ aspectRatio: '1 / 1' }}
                  >
                    <product.icon className='w-6 h-6 text-white' />
                  </motion.div>
                  <div className='flex-1'>
                    <div className='text-sm text-red-600 font-medium mb-1'>
                      {product.category}
                    </div>
                    <h3 className='text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors'>
                      {product.name}
                    </h3>
                    <p className='text-gray-600 text-sm mt-2'>
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Product Items */}
                <div className='space-y-3'>
                  {product.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.4 + index * 0.1 + itemIndex * 0.05,
                      }}
                      className='flex items-center space-x-3'
                    >
                      <HiCheckCircle className='w-4 h-4 text-green-500 flex-shrink-0' />
                      <span className='text-sm text-gray-700'>{item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Product Footer */}
                <div className='mt-6 pt-6 border-t border-gray-100'>
                  <div className='flex items-center justify-center'>
                    <div className='flex items-center space-x-2'>
                      <HiStar className='w-4 h-4 text-yellow-400 fill-current' />
                      <span className='text-sm text-gray-600'>
                        Quality Assured
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='text-center mt-16'
        >
          <div className='bg-gradient-to-r from-red-50 to-gray-50 rounded-2xl p-8 border border-red-100'>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>
              Need Bulk Supply or Custom Equipment?
            </h3>
            <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
              We offer competitive pricing for bulk orders and can manufacture
              custom equipment according to your specifications. Contact us for
              quotes and technical support.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='btn-primary rounded-full'
              >
                Request Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='btn-secondary rounded-full'
              >
                Download Catalog
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Products
