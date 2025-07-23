import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import certificate1 from '../assets/certificate1.jpg'
import certificate2 from '../assets/certificate2.jpg'
import certificate3 from '../assets/certificate3.jpg'

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const certificates = [
    {
      title: 'ISO 9001:2015',
      image: certificate1,
      description: 'Quality Management System',
    },
    {
      title: 'ISO 14001:2015',
      image: certificate2,
      description: 'Environmental Management System',
    },
    {
      title: 'OHSAS 18001:2007',
      image: certificate3,
      description: 'Occupational Health and Safety Management System',
    },
  ]

  return (
    <section
      id='certifications'
      className='section-padding bg-gray-100'
      style={{
        backgroundImage: 'linear-gradient(to right, #f7f7f7, #e8e8e8)',
      }}
    >
      <div className='container-custom'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
            Our Certifications
          </h2>
          <p className='text-gray-700 leading-relaxed mt-4 max-w-3xl mx-auto'>
            We are proud to be certified by the following international
            standards organizations.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-3 gap-8'>
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className='bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
            >
              <div className='p-4 bg-black border-4 border-black rounded-t-xl'>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className='w-full h-48 object-cover rounded-md'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900'>
                  {cert.title}
                </h3>
                <p className='text-gray-600 mt-2'>{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
