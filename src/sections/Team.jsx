import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import team1 from '../assets/team1.jpg'

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const teamMembers = [
    {
      name: 'Fiseha',
      role: 'CEO & Founder',
      image: team1,
      isCeo: true,
      bio: "Fiseha is the visionary behind Ardi Energy Solutions, with over 20 years of experience in the renewable energy sector. His passion for sustainability drives the company's mission.",
    },
  ]

  return (
    <section
      id='team'
      className='section-padding bg-gradient-to-br from-gray-50 to-blue-50'
    >
      <div className='container-custom'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            Our
            <span className='block text-gradient'>Team</span>
          </h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            Meet the brilliant minds behind Ardi Energy Solutions
          </p>
        </motion.div>

        {/* Centered Single Team Member */}
        <div className='flex justify-center'>
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className='group bg-white rounded-3xl p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-300 max-w-md mx-auto border-2 border-red-100 hover:border-red-200'
            >
              <div className='relative mb-8'>
                <img
                  src={member.image}
                  alt={member.name}
                  className='w-40 h-40 rounded-full mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300'
                />
                {member.isCeo && (
                  <div className='absolute -top-2 -right-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg'>
                    CEO
                  </div>
                )}
              </div>

              <h3 className='text-2xl font-bold text-gray-900 mb-3'>
                {member.name}
              </h3>
              <p className='text-red-600 font-semibold text-lg mb-6'>
                {member.role}
              </p>
              <p className='text-gray-600 leading-relaxed'>{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
