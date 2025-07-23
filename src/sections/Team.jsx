import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import team1 from '../assets/team1.jpg'
import team2 from '../assets/team1.jpg'

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const teamMembers = [
    {
      name: 'Fiseha ',
      role: 'CEO & Founder',
      image: team1,
      isCeo: true,
      bio: "John is the visionary behind Ardi Energy Solutions, with over 20 years of experience in the renewable energy sector. His passion for sustainability drives the company's mission.",
    },
    {
      name: 'Jane Smith',
      role: 'Chief Operating Officer',
      image: team2,
      isCeo: false,
      bio: 'Jane is a seasoned operations executive with a proven track record of scaling high-growth companies. She is responsible for the day-to-day operations of the company.',
    },
  ]

  return (
    <section id='team' className='section-padding bg-white'>
      <div className='container-custom'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl font-bold text-gray-900'>Our Team</h2>
          <p className='text-lg text-gray-600 mt-4'>
            Meet the brilliant minds behind Ardi Energy Solutions
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-8'>
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group bg-gray-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 ${
                member.isCeo ? 'border-2 border-primary-500' : ''
              }`}
            >
              <img
                src={member.image}
                alt={member.name}
                className='w-32 h-32 rounded-full mx-auto mb-6'
              />
              <h3 className='text-xl font-bold text-gray-900'>{member.name}</h3>
              <p className='text-primary-500 font-medium mb-4'>{member.role}</p>
              <p className='text-gray-600'>{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
