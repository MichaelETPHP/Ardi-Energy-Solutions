import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import image1 from '../assets/45.jpg'
import image2 from '../assets/Ethiopia.png'

const slides = [
  {
    image: image1,
    title: 'Welcome to Ardi Energy Solutions',
    subtitle:
      'Your trusted partner in creating innovative and sustainable energy solutions for a brighter future.',
  },
  {
    image: image2,
    title: "Powering Ethiopia's Future",
    subtitle:
      'We are committed to providing reliable and affordable energy to homes and businesses across Ethiopia.',
  },
]

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section id='home' className='relative h-screen overflow-hidden'>
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1 }}
          className='absolute inset-0 bg-cover bg-center'
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        />
      </AnimatePresence>

      <div className='absolute inset-0 bg-black opacity-40'></div>

      <div className='container-custom relative z-10 flex flex-col items-center justify-center h-full text-center text-white'>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='bg-black/20 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20'
        >
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-shadow'>
            {slides[currentSlide].title}
          </h1>
          <p className='text-lg md:text-xl mb-8 max-w-2xl mx-auto text-shadow-sm'>
            {slides[currentSlide].subtitle}
          </p>
          <div className='flex gap-4 justify-center'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-red-600 text-white font-medium py-3 px-6 rounded-full shadow-lg'
            >
              Our Services
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-white/20 text-white font-medium py-3 px-6 rounded-full border border-white/30'
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Elementor-style Slide Indicators */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20'>
        <div className='flex items-center space-x-6'>
          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className='w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group'
          >
            <HiChevronLeft className='w-6 h-6 group-hover:text-red-500 transition-colors' />
          </motion.button>

          {/* Slide Dots */}
          <div className='flex space-x-3'>
            {slides.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-white scale-125 shadow-lg'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className='w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group'
          >
            <HiChevronRight className='w-6 h-6 group-hover:text-red-500 transition-colors' />
          </motion.button>
        </div>
      </div>

      {/* Slide Counter */}
      <div className='absolute bottom-8 right-8 z-20'>
        <div className='bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium border border-white/20'>
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </section>
  )
}

export default Hero
