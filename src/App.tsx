import { useEffect, useLayoutEffect, useState, type ReactElement } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import FullProjects from './pages/FullProjects'
import ProjectDetail from './pages/ProjectDetail'

function App(): ReactElement {
  const [location, setLocation] = useState(() => ({
    pathname: window.location.pathname,
    hash: window.location.hash,
  }))
  const { pathname: currentPath, hash: currentHash } = location
  const cleanHash = currentHash.replace('#', '')
  const isRootPath = currentPath === '/' || currentPath === '/index.html'

  useEffect(() => {
    const updateLocation = () => {
      setLocation({
        pathname: window.location.pathname,
        hash: window.location.hash,
      })
    }

    window.addEventListener('hashchange', updateLocation)
    window.addEventListener('popstate', updateLocation)

    return () => {
      window.removeEventListener('hashchange', updateLocation)
      window.removeEventListener('popstate', updateLocation)
    }
  }, [])

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
  }, [location.pathname, location.hash])

  useLayoutEffect(() => {
    if (cleanHash.startsWith('/project/') || cleanHash === '/all-projects') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [cleanHash, currentPath])

  useEffect(() => {
    if (!currentHash) return

    // Handle special routes
    if (cleanHash.startsWith('/project/') || cleanHash === '/all-projects') {
      return
    }

    const target = document.getElementById(cleanHash)
    if (!target) return

    let secondFrame = 0
    const frame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    })

    return () => {
      window.cancelAnimationFrame(frame)
      window.cancelAnimationFrame(secondFrame)
    }
  }, [currentHash, currentPath])

  // Show Project Detail page
  if (cleanHash.startsWith('/project/')) {
    return (
      <>
        <Header />
        <ProjectDetail slug={cleanHash.slice('/project/'.length)} />
        <Footer />
      </>
    )
  }

  // Show All Projects page
  if (cleanHash === '/all-projects') {
    return (
      <>
        <Header />
        <FullProjects />
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
