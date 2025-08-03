import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiCalendar, HiUser, HiArrowRight } from 'react-icons/hi2'

const WordPressPosts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        // WordPress REST API endpoint for posts
        const response = await fetch(
          'https://admin.ardienergysolutions.com/wp-json/wp/v2/posts?_embed&per_page=6'
        )

        if (!response.ok) {
          throw new Error('Failed to fetch posts')
        }

        const data = await response.json()
        setPosts(data)
      } catch (err) {
        console.error('Error fetching WordPress posts:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const stripHtml = (html) => {
    const tmp = document.createElement('div')
    tmp.innerHTML = html
    return tmp.textContent || tmp.innerText || ''
  }

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
  }

  if (loading) {
    return (
      <div className='flex items-center justify-center py-12'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-red-600'></div>
        <span className='ml-3 text-gray-600'>Loading posts...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className='text-center py-12'>
        <div className='bg-red-50 border border-red-200 rounded-lg p-6'>
          <h3 className='text-lg font-semibold text-red-800 mb-2'>
            Error Loading Posts
          </h3>
          <p className='text-red-600'>{error}</p>
          <p className='text-sm text-red-500 mt-2'>
            Unable to fetch posts from WordPress. Please check the connection.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className='py-8'>
      <div className='text-center mb-8'>
        <h2 className='text-3xl font-bold text-gray-900 mb-4'>
          Latest Blog Posts
        </h2>
        <p className='text-gray-600 max-w-2xl mx-auto'>
          Stay updated with our latest news, insights, and updates from Ardi
          Energy Solutions
        </p>
      </div>

      {posts.length === 0 ? (
        <div className='text-center py-12'>
          <div className='bg-gray-50 rounded-lg p-8'>
            <h3 className='text-lg font-semibold text-gray-800 mb-2'>
              No Posts Available
            </h3>
            <p className='text-gray-600'>
              No blog posts are currently available. Check back soon for
              updates!
            </p>
          </div>
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'
            >
              {/* Featured Image */}
              {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                <div className='aspect-video overflow-hidden'>
                  <img
                    src={post._embedded['wp:featuredmedia'][0].source_url}
                    alt={post.title.rendered}
                    className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                  />
                </div>
              )}

              <div className='p-6'>
                {/* Post Meta */}
                <div className='flex items-center text-sm text-gray-500 mb-3'>
                  <HiCalendar className='w-4 h-4 mr-1' />
                  <span>{formatDate(post.date)}</span>
                  {post._embedded?.author?.[0] && (
                    <>
                      <span className='mx-2'>•</span>
                      <HiUser className='w-4 h-4 mr-1' />
                      <span>{post._embedded.author[0].name}</span>
                    </>
                  )}
                </div>

                {/* Post Title */}
                <h3
                  className='text-xl font-bold text-gray-900 mb-3 overflow-hidden text-ellipsis'
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {post.title.rendered}
                </h3>

                {/* Post Excerpt */}
                <p
                  className='text-gray-600 mb-4 overflow-hidden text-ellipsis'
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {truncateText(stripHtml(post.excerpt.rendered))}
                </p>

                {/* Read More Button */}
                <a
                  href={post.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors'
                >
                  Read More
                  <HiArrowRight className='w-4 h-4 ml-1' />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* View All Posts Button */}
      {posts.length > 0 && (
        <div className='text-center mt-8'>
          <a
            href='https://admin.ardienergysolutions.com'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors'
          >
            View All Posts
            <HiArrowRight className='w-4 h-4 ml-2' />
          </a>
        </div>
      )}
    </div>
  )
}

export default WordPressPosts
