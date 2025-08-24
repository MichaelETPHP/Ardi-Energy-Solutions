import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiDocumentText, HiStar, HiCheckCircle } from 'react-icons/hi2'
import { useState } from 'react'

// Import certification images directly
import acemeCert from '../assets/Recomendations/ACEME CERTIFICAT.jpg'
import efdaCert from '../assets/Recomendations/efda.jpg'
import fcaCert from '../assets/Recomendations/FCA.jpg'
import iomCert from '../assets/Recomendations/IOM.jpg'
import midrocCert from '../assets/Recomendations/Midroc.jpg'
import mohaCert from '../assets/Recomendations/Moha Soft Drink.jpg'
import pyramideCert from '../assets/Recomendations/Pyramide Hotel spa DZ.jpg'
import semicCert from '../assets/Recomendations/Semic.jpg'
import taffCert from '../assets/Recomendations/TAFF BB BUSINUS .jpg'
import tsdCert from '../assets/Recomendations/tsd.jpg'
import walyaCert from '../assets/Recomendations/walya steel.jpg'
import zamraCert from '../assets/Recomendations/Zamra .jpg'

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const certifications = [
    {
      id: 1,
      name: 'ACEME Certificate',
      image: acemeCert,
      type: 'Certificate',
      company: 'ACEME',
      year: '2024'
    },
    {
      id: 2,
      name: 'EFDA Recommendation',
      image: efdaCert,
      type: 'Recommendation',
      company: 'EFDA',
      year: '2024'
    },
    {
      id: 3,
      name: 'FCA Certification',
      image: fcaCert,
      type: 'Certificate',
      company: 'FCA',
      year: '2024'
    },
    {
      id: 4,
      name: 'IOM Recommendation',
      image: iomCert,
      type: 'Recommendation',
      company: 'IOM',
      year: '2024'
    },
    {
      id: 5,
      name: 'Midroc Recommendation',
      image: midrocCert,
      type: 'Recommendation',
      company: 'Midroc',
      year: '2024'
    },
    {
      id: 6,
      name: 'MOHA Soft Drinks',
      image: mohaCert,
      type: 'Recommendation',
      company: 'MOHA',
      year: '2024'
    },
    {
      id: 7,
      name: 'Pyramide Hotel Spa',
      image: pyramideCert,
      type: 'Recommendation',
      company: 'Pyramide Hotel',
      year: '2024'
    },
    {
      id: 8,
      name: 'Semic Recommendation',
      image: semicCert,
      type: 'Recommendation',
      company: 'Semic',
      year: '2024'
    },
    {
      id: 9,
      name: 'TAFF BB Business',
      image: taffCert,
      type: 'Recommendation',
      company: 'TAFF BB',
      year: '2024'
    },
    {
      id: 10,
      name: 'TSD Certification',
      image: tsdCert,
      type: 'Certificate',
      company: 'TSD',
      year: '2024'
    },
    {
      id: 11,
      name: 'Walya Steel',
      image: walyaCert,
      type: 'Recommendation',
      company: 'Walya Steel',
      year: '2024'
    },
    {
      id: 12,
      name: 'Zamra Recommendation',
      image: zamraCert,
      type: 'Recommendation',
      company: 'Zamra',
      year: '2024'
    }
  ]

  const [selectedCert, setSelectedCert] = useState(null)

  const openModal = (cert) => setSelectedCert(cert)
  const closeModal = () => setSelectedCert(null)

  return (
    <>
      <section id='certifications' className='section-padding bg-gradient-to-br from-gray-50 to-blue-50'>
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
              <HiDocumentText className='w-4 h-4 mr-2' />
              Certifications & Recommendations
            </motion.div>

            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
              Our
              <span className='block text-gradient'>Accreditations</span>
            </h2>
            <p className='text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto'>
              Discover our industry-recognized certifications and client recommendations that demonstrate our commitment to excellence and quality in energy solutions.
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12'>
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className='group cursor-pointer'
                onClick={() => openModal(cert)}
              >
                <div className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100'>
                  {/* Image Container */}
                  <div className='relative overflow-hidden aspect-square'>
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                    />
                    {/* Overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                    {/* Type Badge */}
                    <div className='absolute top-3 left-3'>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        cert.type === 'Certificate'
                          ? 'bg-green-500/90 text-white'
                          : 'bg-blue-500/90 text-white'
                      }`}>
                        {cert.type === 'Certificate' ? (
                          <HiCheckCircle className='w-3 h-3 inline mr-1' />
                        ) : (
                          <HiStar className='w-3 h-3 inline mr-1' />
                        )}
                        {cert.type}
                      </span>
                    </div>

                    {/* Company Name */}
                    <div className='absolute bottom-3 left-3 right-3'>
                      <p className='text-white text-sm font-semibold truncate'>
                        {cert.company}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className='p-4'>
                    <h3 className='font-semibold text-gray-900 text-sm mb-2 line-clamp-2 group-hover:text-red-600 transition-colors'>
                      {cert.name}
                    </h3>
                    <div className='flex items-center justify-between text-xs text-gray-500'>
                      <span>{cert.year}</span>
                      <span className='text-red-500 font-medium'>Click to view</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.7 }}
            className='grid grid-cols-1 md:grid-cols-3 gap-8 bg-white rounded-2xl p-8 shadow-lg'
          >
            <div className='text-center'>
              <div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <HiCheckCircle className='w-8 h-8 text-red-600' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-2'>12+</h3>
              <p className='text-gray-600'>Total Accreditations</p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <HiStar className='w-8 h-8 text-blue-600' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-2'>10+</h3>
              <p className='text-gray-600'>Client Recommendations</p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <HiDocumentText className='w-8 h-8 text-green-600' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-2'>2+</h3>
              <p className='text-gray-600'>Industry Certifications</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal for viewing certificates */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className='bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden'
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className='bg-gradient-to-r from-red-600 to-red-700 text-white p-6 flex items-center justify-between'>
                <div>
                  <h2 className='text-2xl font-bold'>{selectedCert.name}</h2>
                  <p className='text-red-100'>{selectedCert.company} • {selectedCert.year}</p>
                </div>
                <button
                  onClick={closeModal}
                  className='w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors'
                >
                  <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className='p-6'>
                <div className='flex justify-center'>
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.name}
                    className='max-w-full max-h-[70vh] object-contain rounded-lg shadow-lg'
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Certifications
