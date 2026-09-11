import { useEffect, type ReactElement } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import AllProjects from './pages/AllProjects'
import ProjectDetail from './pages/ProjectDetail'

function App(): ReactElement {
  useEffect(() => {
    const animatedItems = document.querySelectorAll('.animate-on-scroll')

    if (!animatedItems.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18 },
    )

    animatedItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/'
  const currentHash = typeof window !== 'undefined' ? window.location.hash : ''
  const isRootPath = currentPath === '/' || currentPath === '/index.html'

  useEffect(() => {
    if (!currentHash) return

    const cleanHash = currentHash.replace('#', '')

    // Handle special routes
    if (cleanHash.startsWith('/project/') || cleanHash === '/all-projects') {
      return
    }

    const target = document.getElementById(cleanHash)
    if (!target) return

    const frame = window.requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [currentHash, currentPath])

  // Determine which page to show
  const cleanHash = currentHash.replace('#', '')

  // Show Project Detail page
  if (cleanHash.startsWith('/project/')) {
    return (
      <>
        <Header />
        <ProjectDetail />
        <Footer />
      </>
    )
  }

  // Show All Projects page
  if (cleanHash === '/all-projects') {
    return (
      <>
        <Header />
        <AllProjects />
        <Footer />
      </>
    )
  }

  // Show 404 only if NOT on root path and NOT using hash navigation
  if (!isRootPath && !currentHash) {
    return (
      <>
        <Header />
        <NotFound />
        <Footer />
      </>
    )
  }

  // Always show portfolio when on root path or when using hash navigation
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App
