import { motion } from 'framer-motion'
import loadingLogo from '../assets/ArdiLogo.jpg'

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='fixed inset-0 z-50 flex items-center justify-center bg-gray-900'
    >
      <div className='relative flex flex-col items-center justify-center w-48 h-64'>
        <motion.img
          src={loadingLogo}
          alt='Loading Logo'
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className='mb-8'
        />
        <motion.svg
          className='absolute top-0 left-0 w-full h-full'
          viewBox='0 0 100 100'
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          <motion.path
            d='M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90'
            fill='none'
            stroke='#dd0a1b'
            strokeWidth='2'
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </motion.svg>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className='relative z-10'
        >
          <motion.p
            className='text-white font-semibold tracking-widest uppercase text-xl'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            Stay Energized
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
