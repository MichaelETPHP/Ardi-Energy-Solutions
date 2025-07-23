import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import belayab from '../assets/belayab.jpg'
import intex from '../assets/intex.jpeg'
import smico from '../assets/smico.jpg'
import tabour from '../assets/tabour.png'

const Partners = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const partners = [
    { src: belayab, alt: 'Belayab Cable' },
    { src: intex, alt: 'Intex UPS, Inverter' },
    { src: smico, alt: 'SMICO' },
    { src: tabour, alt: 'Tabour Ceramics' },
  ]

  return (
    <section id='partners' className='section-padding bg-gray-100'>
      <div className='container-custom'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl font-bold text-gray-900'>Our Partners</h2>
          <p className='text-lg text-gray-600 mt-4'>
            We are proud to work with these amazing companies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='flex flex-wrap justify-center items-center gap-8'
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className='grayscale hover:grayscale-0 transition-all duration-300'
            >
              <img src={partner.src} alt={partner.alt} className='h-12' />
              <p className='text-center text-gray-600 mt-2'>{partner.alt}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Partners
