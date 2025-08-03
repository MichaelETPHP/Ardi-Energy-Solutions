import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HiArrowLeft } from 'react-icons/hi2'
import WordPressPosts from '../components/WordPressPosts'

const TestingPage = () => {
  const navigate = useNavigate()

  return (
    <div className='min-h-screen bg-gray-100'>
      {/* Header */}
      <div className='bg-white shadow-sm border-b'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <button
              onClick={() => navigate('/')}
              className='flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors'
            >
              <HiArrowLeft className='w-5 h-5' />
              <span>Back to Home</span>
            </button>
            <h1 className='text-2xl font-bold text-gray-900'>Testing Page</h1>
            <div className='w-20'></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Test Section */}
        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Test Display from WP
          </h2>
          <p className='text-gray-700 mb-6'>
            This section displays posts dynamically from our WordPress blog at{' '}
            <a
              href='https://admin.ardienergysolutions.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-red-600 hover:text-red-700 underline'
            >
              admin.ardienergysolutions.com
            </a>
          </p>

          {/* WordPress Posts Component */}
          <WordPressPosts />
        </div>
      </div>
    </div>
  )
}

export default TestingPage
