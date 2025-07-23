import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import logo from '../assets/logo.png' // Import the logo

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section
      id='about'
      className='section-padding bg-gray-100'
      style={{
        backgroundImage: 'linear-gradient(to right, #f7f7f7, #e8e8e8)',
      }}
    >
      <div className='container-custom'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className='bg-white/30 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-xl border border-white/40'
        >
          <div className='grid md:grid-cols-2 gap-8 md:gap-12 items-center'>
            {/* Left Column - Logo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='flex justify-center items-center p-6 bg-white/50 rounded-xl shadow-inner'
            >
              <img
                src={logo}
                alt='Ardi Energy Solutions Logo'
                className='max-w-xs w-full'
              />
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='text-left'
            >
              <h2 className='text-3xl md:text-4xl font-bold text-neutral-800'>
                Ardi Energy Solutions
              </h2>
              <p className='text-primary-500 font-semibold text-lg mt-2 mb-4'>
                Electrical Power Supply Works CONTRACTOR
              </p>
              <p className='text-neutral-700 leading-relaxed'>
                ARDI Energy Solutions, was established by an individual called
                FISEHA, who used to be employed in France company referred to as
                ETDE which has been performing quality works since its
                introduction in 2009/10; and, it also had a time where adequate
                experience and training on Electrical power distribution and
                Transmission was shared from professional and renowned French
                and other foreign workers while working with them.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='mt-6 bg-primary-500 text-white font-medium py-3 px-6 rounded-full shadow-lg'
              >
                Read More
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
