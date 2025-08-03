import { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TestingPage from './pages/TestingPage'
import Navbar from './components/Navbar'
import LoadingScreen from './components/LoadingScreen'

const Hero = lazy(() => import('./sections/Hero'))
const About = lazy(() => import('./sections/About'))
const Services = lazy(() => import('./sections/Services'))
const Products = lazy(() => import('./sections/Products'))
const Projects = lazy(() => import('./sections/Projects'))
const Recommendations = lazy(() => import('./sections/Recommendations'))
const Partners = lazy(() => import('./sections/Partners'))
const Team = lazy(() => import('./sections/Team'))

const Contact = lazy(() => import('./sections/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  const [loading, setLoading] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000) // 3 seconds

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <Router>
      <div className='min-h-screen bg-white'>
        <Navbar isScrolled={isScrolled} />
        <Suspense fallback={<div className='h-screen'></div>}>
          <Routes>
            <Route
              path='/'
              element={
                <main>
                  <Hero />
                  <About />
                  <Services />
                  <Products />
                  <Projects />
                  <Recommendations />
                  <Partners />
                  <Team />
                  <Contact />
                </main>
              }
            />
            <Route path='/testing' element={<TestingPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  )
}

export default App
