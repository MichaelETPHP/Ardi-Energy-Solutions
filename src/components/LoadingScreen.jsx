import { motion } from 'framer-motion'
import loadingLogo from '../assets/image.png'

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='fixed inset-0 z-50 flex items-center justify-center bg-gray-900'
    >
      <div className='relative flex items-center justify-center w-48 h-48'>
        <motion.img
          src={loadingLogo}
          alt='Loading Logo'
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className='w-24 h-24'
        />
        <motion.svg
          className='absolute w-full h-full'
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
          className='absolute inset-0 flex items-center justify-center'
        >
          <p className='text-white font-semibold tracking-widest uppercase'>
            {'Powering Up...'.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                style={{
                  transform: `rotate(${index * 20 - 110}deg)`,
                  position: 'absolute',
                  top: '-30px',
                  left: '50%',
                  transformOrigin: '0 100px',
                }}
              >
                {char}
              </motion.span>
            ))}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
