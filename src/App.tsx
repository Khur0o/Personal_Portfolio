import { useEffect, type ReactElement } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'

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
  const isRootPath = currentPath === '/' || currentPath === '/index.html'

  if (!isRootPath) {
    return (
      <>
        <Header />
        <NotFound />
        <Footer />
      </>
    )
  }

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
