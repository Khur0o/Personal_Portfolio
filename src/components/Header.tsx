import { useEffect, useState } from 'react'

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>('Home')
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved === 'dark' || saved === 'light') return saved
    } catch (e) {
      // ignore
    }

    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    return 'light'
  })

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

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    root.style.colorScheme = theme

    try {
      localStorage.setItem('theme', theme)
    } catch (e) {
      // ignore
    }
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  const handleNavClick = (section: string) => (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault()
    setMenuOpen(false)

    const target = section === 'Home' ? '/' : `/#${section}`
    const currentPath = window.location.pathname
    const currentHash = window.location.hash

    if (currentPath !== '/' && currentPath !== '/index.html') {
      window.location.assign(target)
      return
    }

    if (currentHash === `#${section}`) {
      const element = document.getElementById(section)
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    window.history.pushState(null, '', target)
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const getSectionHref = (section: string): string => (section === 'Home' ? '/' : `/#${section}`)

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
        <a href={getSectionHref('Home')} onClick={handleNavClick('Home')} className={activeSection === 'Home' ? 'active' : ''}>Home</a>
        <a href={getSectionHref('About')} onClick={handleNavClick('About')} className={activeSection === 'About' ? 'active' : ''}>About</a>
        <a href={getSectionHref('Projects')} onClick={handleNavClick('Projects')} className={activeSection === 'Projects' ? 'active' : ''}>Projects</a>
        <a href={getSectionHref('Services')} onClick={handleNavClick('Services')} className={activeSection === 'Services' ? 'active' : ''}>Services</a>
        <a href={getSectionHref('Contact')} onClick={handleNavClick('Contact')} className={activeSection === 'Contact' ? 'active' : ''}>Contact</a>
      </nav>

      <div className="header-actions">
        <button
          type="button"
          className={`theme-toggle ${theme === 'dark' ? 'theme-toggle-dark' : 'theme-toggle-light'}`}
          onClick={toggleTheme}
          aria-pressed={theme === 'dark'}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <span className="theme-toggle-track">
            <span className="theme-toggle-thumb">{theme === 'dark' ? '☾' : '☀'}</span>
          </span>
        </button>
      </div>
    </header>
  )
}

export default Header
