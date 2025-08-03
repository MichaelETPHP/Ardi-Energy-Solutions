import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiBell, HiCheckCircle, HiXCircle } from 'react-icons/hi2'

const Notification = ({
  isVisible,
  message,
  type = 'success', // 'success' or 'error'
  onClose,
  duration = 5000,
}) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, onClose])

  const getIcon = () => {
    if (type === 'success') {
      return <HiCheckCircle className='w-5 h-5 text-green-500' />
    }
    return <HiXCircle className='w-5 h-5 text-red-500' />
  }

  const getBgColor = () => {
    if (type === 'success') {
      return 'bg-green-50 border-green-200'
    }
    return 'bg-red-50 border-red-200'
  }

  const getTextColor = () => {
    if (type === 'success') {
      return 'text-green-800'
    }
    return 'text-red-800'
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={`fixed top-4 right-4 z-50 max-w-sm w-full ${getBgColor()} border rounded-lg shadow-lg p-4`}
        >
          <div className='flex items-start space-x-3'>
            <div className='flex-shrink-0'>
              <HiBell className='w-5 h-5 text-gray-400' />
            </div>

            <div className='flex-1 min-w-0'>
              <div className='flex items-center space-x-2'>
                {getIcon()}
                <p className={`text-sm font-medium ${getTextColor()}`}>
                  {type === 'success' ? 'Success!' : 'Error!'}
                </p>
              </div>
              <p className={`mt-1 text-sm ${getTextColor()}`}>{message}</p>
            </div>

            <div className='flex-shrink-0'>
              <button
                onClick={onClose}
                className='text-gray-400 hover:text-gray-600 transition-colors'
              >
                <HiXCircle className='w-4 h-4' />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Notification
