import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import logo from '../assets/logo.png'

const Navbar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'products', label: 'Products' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id)
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

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const navTextColor = isScrolled || isOpen ? 'text-neutral-500' : 'text-white'
  const navHoverColor =
    isScrolled || isOpen ? 'hover:text-primary-500' : 'hover:text-gray-200'
  const activeColor =
    isScrolled || isOpen ? 'text-primary-500' : 'text-secondary-500'

  return (
    <div className='fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4'>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`w-full max-w-6xl transition-all duration-300 ${
          isOpen ? 'rounded-2xl bg-white shadow-lg' : 'rounded-full'
        } ${
          !isOpen &&
          (isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-lg'
            : 'bg-black/20 backdrop-blur-sm')
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
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isScrolled || isOpen
                    ? 'bg-gray-100 hover:bg-red-100'
                    : 'bg-white/20 hover:bg-white/30'
                }`}
              >
                <FaFacebook
                  className={`text-lg ${
                    isScrolled || isOpen
                      ? 'text-red-500 hover:text-green-500'
                      : 'text-white hover:text-red-400'
                  }`}
                />
              </a>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isScrolled || isOpen
                    ? 'bg-gray-100 hover:bg-red-100'
                    : 'bg-white/20 hover:bg-white/30'
                }`}
              >
                <FaTwitter
                  className={`text-lg ${
                    isScrolled || isOpen
                      ? 'text-red-500 hover:text-green-500'
                      : 'text-white hover:text-red-400'
                  }`}
                />
              </a>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isScrolled || isOpen
                    ? 'bg-gray-100 hover:bg-red-100'
                    : 'bg-white/20 hover:bg-white/30'
                }`}
              >
                <FaLinkedin
                  className={`text-lg ${
                    isScrolled || isOpen
                      ? 'text-red-500 hover:text-green-500'
                      : 'text-white hover:text-red-400'
                  }`}
                />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-full transition-colors ${navTextColor}`}
          >
            {isOpen ? (
              <HiX className='w-6 h-6' />
            ) : (
              <HiMenu className='w-6 h-6' />
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
              <div className='py-2 space-y-2 px-4 pb-4'>
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center justify-center py-3 rounded-lg transition-all duration-300 text-neutral-500 ${
                      activeSection === item.id
                        ? 'text-primary-500 bg-primary-50'
                        : 'hover:text-primary-500 hover:bg-gray-50'
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
