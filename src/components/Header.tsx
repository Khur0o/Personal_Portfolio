import { useEffect, useState } from 'react'

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>('Home')
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const options: IntersectionObserverInit = {
      rootMargin: '0px',
      threshold: 0.2,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, options)

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const handleNavClick = (): void => setMenuOpen(false)

  return (
    <header className="header">
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            setMenuOpen((open) => !open)
          }
        }}
      >
        ☰
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <a href="#Home" onClick={handleNavClick} className={activeSection === 'Home' ? 'active' : ''}>Home</a>
        <a href="#About" onClick={handleNavClick} className={activeSection === 'About' ? 'active' : ''}>About</a>
        <a href="#Projects" onClick={handleNavClick} className={activeSection === 'Projects' ? 'active' : ''}>Projects</a>
        <a href="#Services" onClick={handleNavClick} className={activeSection === 'Services' ? 'active' : ''}>Services</a>
        <a href="#Contact" onClick={handleNavClick} className={activeSection === 'Contact' ? 'active' : ''}>Contact</a>
      </nav>
    </header>
  )
}

export default Header
