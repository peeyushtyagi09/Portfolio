import React , {useState, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Loader from './components/Loader/Loader.jsx'
import Navbar from './components/Navbar.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx' 
import Contact from './pages/Contact.jsx'
import Lenis from '@studio-freight/lenis'
const App = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 3,
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])
  return (
    <>  
   {showNavbar && <Navbar closeNavbar={() => setShowNavbar(false)} />}
      <Routes>
        <Route path="/" element={
          loading ? (
            <Loader onFinish={() => setLoading(false)} />
          ) : (
          <Home openNavbar={() => setShowNavbar(true)} /> )}
           />
          <Route path="/projects" element={<Projects openNavbar={() => setShowNavbar(true)} />} />
          <Route path="/about" element={<About openNavbar={() => setShowNavbar(true)} />} />
          <Route path="/contact" element={<Contact openNavbar={() => setShowNavbar(true)} />} />
      </Routes> 
    </>
  )
}

export default App
