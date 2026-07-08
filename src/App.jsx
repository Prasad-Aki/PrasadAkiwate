import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handlePointerMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener('pointermove', handlePointerMove)
    setIsLoaded(true)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])

  return (
    <Router>
      <div className="min-h-screen overflow-x-hidden text-slate-100" style={{ background: '#050B14' }}>
        <div
          className="pointer-events-none fixed z-50 h-16 w-16 rounded-full border border-cyan-300/40 bg-cyan-300/10 blur-[1px] transition-transform duration-75"
          style={{ transform: `translate(${mousePosition.x - 32}px, ${mousePosition.y - 32}px)` }}
        />

        <AnimatePresence>
          {!isLoaded && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.7 }}
              className="fixed inset-0 z-[100] flex items-center justify-center" style={{ background: '#050B14' }}
            >
              <div className="h-24 w-24 animate-spin rounded-full border border-cyan-400/40 border-t-cyan-300" />
            </motion.div>
          )}
        </AnimatePresence>

        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="mx-auto flex max-w-7xl items-center justify-between px-6 py-10 text-sm text-slate-500 sm:px-10 lg:px-12">
          <p>© 2026 Prasad Akiwate. Building scalable software with clean architecture, modern technologies, and continuous learning.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App

