import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiUserGroup, HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

const Partners = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentPage, setCurrentPage] = useState(0)

  // Partner logos from the Trusted_Partners folder
  const partnerLogos = [
    {
      name: 'Midroc Investment Group',
      logo: '/src/assets/Trusted_Partners/midroc-investment-group.png',
    },
    { name: 'Warit Logo', logo: '/src/assets/Trusted_Partners/Warit logo.jpg' },
    {
      name: 'Waryt Logo',
      logo: '/src/assets/Trusted_Partners/Waryt-logo-2-200x200.png',
    },
    { name: 'YBP', logo: '/src/assets/Trusted_Partners/YBP L.jpg' },
    {
      name: 'Zamera CON',
      logo: '/src/assets/Trusted_Partners/Zamera CON L.jpg',
    },
    { name: 'ZS Logo', logo: '/src/assets/Trusted_Partners/zs-logo.png' },
    { name: 'Stelly RMI', logo: '/src/assets/Trusted_Partners/stelly rmi.jpg' },
    { name: 'Taf Oil', logo: '/src/assets/Trusted_Partners/taf oil (1).jpg' },
    {
      name: 'Testi Trading PLC',
      logo: '/src/assets/Trusted_Partners/Testi Trading PLC.jpg',
    },
    { name: 'UK Aid', logo: '/src/assets/Trusted_Partners/UK_AID.jpeg' },
    { name: 'UNICEF', logo: '/src/assets/Trusted_Partners/Unicef L.jpg' },
    {
      name: 'Walya Steel',
      logo: '/src/assets/Trusted_Partners/WALYA STEEL LOGO.png',
    },
    { name: 'Kobil', logo: '/src/assets/Trusted_Partners/Kobil-Logo.png' },
    { name: 'Kolya PLC', logo: '/src/assets/Trusted_Partners/Kolya plc.jpg' },
    {
      name: 'Lion Insurance',
      logo: '/src/assets/Trusted_Partners/Lion INSU L.jpg',
    },
    { name: 'NEBE', logo: '/src/assets/Trusted_Partners/NEBE LOGOl.jpg' },
    { name: 'IOM', logo: '/src/assets/Trusted_Partners/IOM L.jpg' },
    { name: 'Kaldis', logo: '/src/assets/Trusted_Partners/Kaldis .jpg' },
    {
      name: 'DKT Ethiopia',
      logo: '/src/assets/Trusted_Partners/DKT ETHIOPA.jpg',
    },
    { name: 'EFDA', logo: '/src/assets/Trusted_Partners/efda.jpg' },
    {
      name: 'Emu General Importer',
      logo: '/src/assets/Trusted_Partners/emu general Importer.png',
    },
    {
      name: 'Habesha Beer',
      logo: '/src/assets/Trusted_Partners/habesha BEER.png',
    },
    {
      name: 'Silafrica',
      logo: '/src/assets/Trusted_Partners/https __s3.amazonaws.com_appforest_uf_f1643885953696x371383582784148100_Silafrica_Logo_Color_WithTagline.jpg',
    },
    {
      name: 'Awash Wine',
      logo: '/src/assets/Trusted_Partners/AWASH-WINE-LOGO-1.png',
    },
    {
      name: 'China Electric',
      logo: '/src/assets/Trusted_Partners/China-Electric.png',
    },
    { name: 'DBU', logo: '/src/assets/Trusted_Partners/DBU LOGO.jpg' },
    {
      name: 'Delux Furniture',
      logo: '/src/assets/Trusted_Partners/delux furniture.png',
    },
    { name: 'Abay Bank', logo: '/src/assets/Trusted_Partners/abay bank.png' },
    {
      name: 'Abbahawa Trading',
      logo: '/src/assets/Trusted_Partners/Abbahawa-Trading-PLC-.png',
    },
    { name: 'Abysinya', logo: '/src/assets/Trusted_Partners/Abysinya L.jpg' },
    {
      name: 'Ethio Engineering Group',
      logo: '/src/assets/Trusted_Partners/Ethio-Engineering-Group.jpg',
    },
    {
      name: 'Moha Soft Drinks',
      logo: '/src/assets/Trusted_Partners/moha-soft-drinks-industry.jpg',
    },
    { name: 'Zamil', logo: '/src/assets/Trusted_Partners/zamil.jpg' },
    { name: 'Enat Bank', logo: '/src/assets/Trusted_Partners/enat.jpg' },
    { name: 'Akkoo', logo: '/src/assets/Trusted_Partners/akkoo.jpg' },
    { name: 'Alpha', logo: '/src/assets/Trusted_Partners/alpha.jpg' },
    { name: 'China', logo: '/src/assets/Trusted_Partners/china.jpg' },
    { name: 'Coop Bank', logo: '/src/assets/Trusted_Partners/coop.jpg' },
    { name: 'Deluxe', logo: '/src/assets/Trusted_Partners/deluxe.jpg' },
    { name: 'IMO', logo: '/src/assets/Trusted_Partners/imo.jpg' },
    { name: 'Anbessa Bank', logo: '/src/assets/Trusted_Partners/anbessa.jpg' },
    {
      name: 'Election Board',
      logo: '/src/assets/Trusted_Partners/election board.jpg',
    },
    { name: 'OBN', logo: '/src/assets/Trusted_Partners/obn.jpg' },
    {
      name: 'Prime Minister Office',
      logo: '/src/assets/Trusted_Partners/prime minister.jpg',
    },
    { name: 'Royal', logo: '/src/assets/Trusted_Partners/royal.jpg' },
    {
      name: 'Metropolitan',
      logo: '/src/assets/Trusted_Partners/metropolitan.jpg',
    },
    { name: 'Taf Oil', logo: '/src/assets/Trusted_Partners/taf oil.jpg' },
    {
      name: 'Yetebaberut',
      logo: '/src/assets/Trusted_Partners/yetebaberut.jpg',
    },
    { name: 'Yotek', logo: '/src/assets/Trusted_Partners/yotek .png' },
    {
      name: 'Wudase Diagnosis',
      logo: '/src/assets/Trusted_Partners/wudase diagnosis.png',
    },
    {
      name: 'Giant Eagle',
      logo: '/src/assets/Trusted_Partners/Giant Eagle .png',
    },
    { name: 'ILRI', logo: '/src/assets/Trusted_Partners/ILRI .png' },
    { name: 'Jenboro', logo: '/src/assets/Trusted_Partners/jenboro.png' },
    { name: 'Kasma', logo: '/src/assets/Trusted_Partners/kasma.jpg' },
    { name: 'Abay', logo: '/src/assets/Trusted_Partners/abay.png' },
    {
      name: 'Akles Paper',
      logo: '/src/assets/Trusted_Partners/akles paper.jpg',
    },
  ]

  // Carousel settings
  const logosPerPage = 12
  const totalPages = Math.ceil(partnerLogos.length / logosPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextPage()
    }, 3000) // Change page every 3 seconds

    return () => clearInterval(interval)
  }, [currentPage])

  const getCurrentLogos = () => {
    const startIndex = currentPage * logosPerPage
    return partnerLogos.slice(startIndex, startIndex + logosPerPage)
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
            <HiUserGroup className='w-4 h-4 mr-2' />
            Strategic Partners
          </motion.div>

          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            Trusted
            <span className='block text-gradient'>Partners</span>
          </h2>
          <p className='text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto'>
            We collaborate with industry leaders to deliver the highest quality
            electrical engineering solutions and innovative technologies.
          </p>
        </motion.div>

        {/* Logo Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className='relative bg-white rounded-3xl shadow-2xl p-8'
        >
          {/* Carousel Navigation */}
          <div className='flex items-center justify-between mb-6'>
            <button
              onClick={prevPage}
              className='w-12 h-12 bg-red-100 hover:bg-red-200 text-red-600 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg hover:shadow-xl'
            >
              <HiChevronLeft className='w-6 h-6' />
            </button>

            <div className='text-center'>
              <span className='text-sm text-gray-600'>
                Page {currentPage + 1} of {totalPages}
              </span>
            </div>

            <button
              onClick={nextPage}
              className='w-12 h-12 bg-red-100 hover:bg-red-200 text-red-600 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg hover:shadow-xl'
            >
              <HiChevronRight className='w-6 h-6' />
            </button>
          </div>

          {/* Logos Grid */}
          <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
            {getCurrentLogos().map((partner, index) => (
              <motion.div
                key={`${currentPage}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className='flex flex-col items-center'
              >
                <div className='w-20 h-20 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center p-3 border-2 border-gray-100 hover:border-red-200 group'>
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-300'
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className='hidden w-full h-full bg-gray-200 rounded-full items-center justify-center text-gray-500 text-xs font-medium'>
                    {partner.name.charAt(0)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Page Indicators */}
          <div className='flex justify-center mt-6 space-x-2'>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentPage
                    ? 'bg-red-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.8 }}
          className='mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white text-center'
        >
          <h3 className='text-2xl font-bold mb-4'>Why Partner With Us?</h3>
          <p className='text-white/90 text-lg max-w-3xl mx-auto'>
            Our strategic partnerships enable us to deliver cutting-edge
            electrical solutions with the highest quality standards and
            innovative technologies from industry leaders.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Partners
