import { motion, AnimatePresence } from 'framer-motion'
import { HiX } from 'react-icons/hi'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='modal-backdrop'
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.2 }}
            className='relative bg-white/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl z-50 w-[90%] max-w-2xl'
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className='absolute top-4 right-4 text-gray-600 hover:text-gray-900'
            >
              <HiX className='w-6 h-6' />
            </motion.button>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default Modal
