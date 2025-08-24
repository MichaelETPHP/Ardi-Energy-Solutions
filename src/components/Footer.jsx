import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTelegram, FaTimes, FaComments } from 'react-icons/fa'
import LanguageSelector from './LanguageSelector'

const Footer = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const openChat = () => setIsChatOpen(true)
  const closeChat = () => setIsChatOpen(false)

  const handleTelegramClick = () => {
    window.open('https://t.me/ardienergysolutions', '_blank')
    closeChat()
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
            className='fill-current'
          ></path>
        </svg>
      </div>

      <div className='container-custom py-12'>
        <div className='grid md:grid-cols-4 gap-8'>
          {/* About */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Ardi Energy Solutions</h3>
            <p className='text-gray-400 leading-relaxed'>
              Your trusted partner in creating innovative and sustainable energy
              solutions for a brighter future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Quick Links</h3>
            <ul className='space-y-3'>
              <li>
                <a
                  href='#home'
                  className='text-gray-400 hover:text-white transition-colors duration-200'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  className='text-gray-400 hover:text-white transition-colors duration-200'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='#services'
                  className='text-gray-400 hover:text-white transition-colors duration-200'
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href='#projects'
                  className='text-gray-400 hover:text-white transition-colors duration-200'
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='text-gray-400 hover:text-white transition-colors duration-200'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Contact Us</h3>
            <div className='space-y-3'>
              <p className='text-gray-400'>
                Mexico, behind School of Commerce, MEZID Plaza 3rd floor, Office
                No 300
              </p>
              <p className='text-gray-400'>
                <a
                  href='mailto:ardienergysolutions97@gmail.com'
                  className='hover:text-white transition-colors duration-200'
                >
                  ardienergysolutions97@gmail.com
                </a>
              </p>
              <p className='text-gray-400'>
                <a
                  href='tel:+251118102143'
                  className='hover:text-white transition-colors duration-200'
                >
                  +251 11 8 102143
                </a>
              </p>
              <p className='text-gray-400'>
                <a
                  href='tel:+251923239898'
                  className='hover:text-white transition-colors duration-200'
                >
                  +251 9 2323 9898
                </a>
              </p>
            </div>
          </div>

          {/* Social & Language */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Connect With Us</h3>
            <div className='space-y-4'>
              <div className='flex space-x-4'>
                <a
                  href='#'
                  className='w-10 h-10 bg-neutral-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110'
                >
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
                  </svg>
                </a>
                <a
                  href='#'
                  className='w-10 h-10 bg-neutral-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110'
                >
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z' />
                  </svg>
                </a>
                <a
                  href='#'
                  className='w-10 h-10 bg-neutral-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110'
                >
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                  </svg>
                </a>
              </div>
              <LanguageSelector />
            </div>
          </div>
        </div>

        <div className='border-t border-neutral-700 mt-8 pt-8 text-center'>
          <p className='text-gray-400'>
            © 2024 Ardi Energy Solutions. All rights reserved.
          </p>
        </div>
      </div>

      {/* Floating Telegram Chat Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 50 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
            className='fixed bottom-6 right-6 z-50'
          >
            <motion.button
              onClick={openChat}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group'
            >
              <FaTelegram className='w-8 h-8 text-white' />

              {/* Pulse Animation */}
              <motion.div
                className='absolute inset-0 rounded-full bg-blue-400'
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Modal */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4'
            onClick={closeChat}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className='bg-white rounded-2xl shadow-2xl max-w-md w-full p-6'
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className='flex items-center justify-between mb-6'>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center'>
                    <FaComments className='w-5 h-5 text-white' />
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-gray-900'>
                      Chat with Us
                    </h3>
                    <p className='text-sm text-gray-600'>
                      Get instant support via Telegram
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeChat}
                  className='w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors'
                >
                  <FaTimes className='w-4 h-4 text-gray-600' />
                </button>
              </div>

              {/* Content */}
              <div className='text-center mb-6'>
                <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <FaTelegram className='w-8 h-8 text-blue-600' />
                </div>
                <h4 className='text-lg font-semibold text-gray-900 mb-2'>
                  Start a Conversation
                </h4>
                <p className='text-gray-600 mb-6'>
                  Connect with our team instantly for quick support, quotes, or
                  any questions about our energy solutions.
                </p>
              </div>

              {/* Action Buttons */}
              <div className='space-y-3'>
                <button
                  onClick={handleTelegramClick}
                  className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2'
                >
                  <FaTelegram className='w-5 h-5' />
                  <span>Open Telegram Chat</span>
                </button>
                <button
                  onClick={closeChat}
                  className='w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200'
                >
                  Maybe Later
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  )
}

export default Footer
