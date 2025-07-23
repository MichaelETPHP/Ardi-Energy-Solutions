import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaTimes,
  FaComments,
} from 'react-icons/fa'
import LanguageSelector from './LanguageSelector'

const Footer = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show chatbot after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = '+1234567890'
    const message =
      'Hello! I would like to know more about your energy solutions.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <footer className='relative bg-neutral-800 text-white mt-20'>
      <div
        className='absolute top-0 left-0 w-full overflow-hidden leading-none'
        style={{ transform: 'translateY(-100%)' }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
          className='relative block w-full h-[80px]'
        >
          <path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
            className='fill-current text-neutral-800'
          ></path>
        </svg>
      </div>

      <div className='container-custom py-12'>
        <div className='grid md:grid-cols-4 gap-8'>
          {/* About */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Ardi Energy Solutions</h3>
            <p className='text-gray-400'>
              Your trusted partner in creating innovative and sustainable energy
              solutions for a brighter future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <a href='#home' className='text-gray-400 hover:text-white'>
                  Home
                </a>
              </li>
              <li>
                <a href='#about' className='text-gray-400 hover:text-white'>
                  About
                </a>
              </li>
              <li>
                <a href='#services' className='text-gray-400 hover:text-white'>
                  Services
                </a>
              </li>
              <li>
                <a href='#projects' className='text-gray-400 hover:text-white'>
                  Projects
                </a>
              </li>
              <li>
                <a href='#contact' className='text-gray-400 hover:text-white'>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Contact Us</h3>
            <p className='text-gray-400'>
              Mexico, behind School of Commerce, MEZID Plaza 3rd floor, Office
              No 300
            </p>
            <p className='text-gray-400'>ardienergysolutions97@gmail.com</p>
            <p className='text-gray-400'>+251 11 8 102143</p>
            <p className='text-gray-400'>+251 9 2323 9898</p>
          </div>

          {/* Social */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Follow Us</h3>
            <div className='flex space-x-4'>
              <a href='#' className='text-gray-400 hover:text-white'>
                <FaFacebookF />
              </a>
              <a href='#' className='text-gray-400 hover:text-white'>
                <FaTwitter />
              </a>
              <a href='#' className='text-gray-400 hover:text-white'>
                <FaLinkedinIn />
              </a>
              <a href='#' className='text-gray-400 hover:text-white'>
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400'>
          <p>
            &copy; {new Date().getFullYear()} Ardi Energy Solutions. All Rights
            Reserved. | ETHIOPIA
          </p>
          <div className='mt-4 md:mt-0'>
            <LanguageSelector />
          </div>
        </div>
      </div>

      {/* WhatsApp Chatbot */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.8 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
            className='fixed bottom-8 left-8 z-50'
          >
            {/* Chat Bubble */}
            <AnimatePresence>
              {isChatOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className='absolute bottom-20 left-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden'
                >
                  {/* Chat Header */}
                  <div className='bg-gradient-to-r from-green-500 to-green-600 p-4 text-white'>
                    <div className='flex items-center space-x-3'>
                      <div className='w-10 h-10 bg-white/20 rounded-full flex items-center justify-center'>
                        <FaWhatsapp className='w-5 h-5' />
                      </div>
                      <div>
                        <h4 className='font-semibold'>Ardi Energy Solutions</h4>
                        <p className='text-sm text-green-100'>
                          Online • Responds instantly
                        </p>
                      </div>
                      <button
                        onClick={() => setIsChatOpen(false)}
                        className='ml-auto p-1 hover:bg-white/20 rounded-full transition-colors'
                      >
                        <FaTimes className='w-4 h-4' />
                      </button>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className='p-4 space-y-3 max-h-64 overflow-y-auto'>
                    <div className='flex items-start space-x-2'>
                      <div className='w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0'>
                        <FaWhatsapp className='w-4 h-4 text-white' />
                      </div>
                      <div className='bg-gray-100 rounded-2xl rounded-tl-md px-4 py-2 max-w-xs'>
                        <p className='text-sm text-gray-800'>
                          👋 Hello! Welcome to Ardi Energy Solutions. How can I
                          help you today?
                        </p>
                      </div>
                    </div>

                    <div className='flex items-start space-x-2 justify-end'>
                      <div className='bg-green-500 rounded-2xl rounded-tr-md px-4 py-2 max-w-xs'>
                        <p className='text-sm text-white'>
                          Hi! I'd like to know more about your energy solutions.
                        </p>
                      </div>
                      <div className='w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0'>
                        <span className='text-xs font-semibold text-gray-600'>
                          You
                        </span>
                      </div>
                    </div>

                    <div className='flex items-start space-x-2'>
                      <div className='w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0'>
                        <FaWhatsapp className='w-4 h-4 text-white' />
                      </div>
                      <div className='bg-gray-100 rounded-2xl rounded-tl-md px-4 py-2 max-w-xs'>
                        <p className='text-sm text-gray-800'>
                          Great! We offer solar, wind, and smart grid solutions.
                          Would you like to chat on WhatsApp for more details?
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Chat Actions */}
                  <div className='p-4 border-t border-gray-100'>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleWhatsAppClick}
                      className='w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl'
                    >
                      <FaWhatsapp className='w-5 h-5' />
                      <span>Continue on WhatsApp</span>
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Chat Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsChatOpen(!isChatOpen)}
              className='relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl border-4 border-white flex items-center justify-center transition-all duration-300 group'
            >
              <AnimatePresence mode='wait'>
                {isChatOpen ? (
                  <motion.div
                    key='close'
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaTimes className='w-6 h-6 text-white' />
                  </motion.div>
                ) : (
                  <motion.div
                    key='whatsapp'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaWhatsapp className='w-7 h-7 text-white' />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Pulse Animation */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className='absolute inset-0 bg-green-400 rounded-full'
              />

              {/* Notification Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: 'spring', stiffness: 500 }}
                className='absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center border-2 border-white'
              >
                <span className='text-xs font-bold text-white'>1</span>
              </motion.div>
            </motion.button>

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className='absolute bottom-20 left-0 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300'
            >
              Chat with us on WhatsApp
              <div className='absolute top-full left-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900'></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  )
}

export default Footer
