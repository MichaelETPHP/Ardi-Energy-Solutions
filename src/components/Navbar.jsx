import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../assets/ArdiLogo.jpg'

const Navbar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'products', label: 'Products' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  useEffect(() => {
    // Handle route-based active section
    if (location.pathname === '/testing') {
      setActiveSection('testing')
      return
    }

    const handleScroll = () => {
      const sections = navItems
        .filter((item) => !item.isRoute)
        .map((item) => item.id)
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    // Only add scroll listener if we're on the home page
    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [navItems, location.pathname])

  const scrollToSection = (sectionId) => {
    const navItem = navItems.find((item) => item.id === sectionId)

    if (navItem && navItem.isRoute) {
      // Handle route navigation
      navigate(`/${sectionId}`)
    } else {
      // Handle scroll to section
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsOpen(false)
  }

  const navTextColor = 'text-gray-700'
  const navHoverColor = 'hover:text-red-600'
  const activeColor = 'text-red-600'

  return (
    <div className='fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4'>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`w-full max-w-6xl transition-all duration-300 ${
          isScrolled || isOpen
            ? 'bg-white shadow-lg rounded-2xl'
            : 'bg-white shadow-lg rounded-full'
        }`}
      >
        <div className='flex items-center justify-between h-16 px-6'>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className='flex items-center'
          >
            <img
              src={logo}
              alt='Ardi Energy Solutions'
              className='w-32 h-auto'
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map((item, index) => (
              <div key={item.id} className='flex items-center'>
                <motion.button
                  whileHover={{ y: -2 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? activeColor
                      : `${navTextColor} ${navHoverColor}`
                  }`}
                >
                  {item.label}
                </motion.button>
                {index < navItems.length - 1 && (
                  <span className='text-gray-300 ml-8'>|</span>
                )}
              </div>
            ))}
            {/* Social Media Icons */}
            <div className='flex space-x-4'>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-gray-100 hover:bg-red-100'
              >
                <FaFacebook className='text-lg text-red-600 hover:text-red-700' />
              </a>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-gray-100 hover:bg-red-100'
              >
                <FaTwitter className='text-lg text-red-600 hover:text-red-700' />
              </a>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-gray-100 hover:bg-red-100'
              >
                <FaLinkedin className='text-lg text-red-600 hover:text-red-700' />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden p-2 rounded-full transition-colors text-gray-700'
          >
            {isOpen ? (
              <HiXMark className='w-6 h-6' />
            ) : (
              <HiBars3 className='w-6 h-6' />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='md:hidden'
            >
              <div className='py-2 space-y-2 px-6 pb-4 bg-white border-t border-gray-100'>
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center justify-center py-3 rounded-lg transition-all duration-300 text-gray-700 ${
                      activeSection === item.id
                        ? 'text-red-600 bg-red-50'
                        : 'hover:text-red-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className='font-medium'>{item.label}</span>
                  </motion.button>
                ))}
                {/* Social Media Icons for Mobile */}
                <div className='flex justify-center space-x-4 mt-6'>
                  <a
                    href='https://facebook.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 rounded-full bg-gray-100 hover:bg-red-100 flex items-center justify-center transition-all duration-300'
                  >
                    <FaFacebook className='text-lg text-red-500 hover:text-green-500' />
                  </a>
                  <a
                    href='https://twitter.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 rounded-full bg-gray-100 hover:bg-red-100 flex items-center justify-center transition-all duration-300'
                  >
                    <FaTwitter className='text-lg text-red-500 hover:text-green-500' />
                  </a>
                  <a
                    href='https://linkedin.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 rounded-full bg-gray-100 hover:bg-red-100 flex items-center justify-center transition-all duration-300'
                  >
                    <FaLinkedin className='text-lg text-red-500 hover:text-green-500' />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}

export default Navbar
