function Footer() {
  const year = new Date().getFullYear()
  const footerLinks = [
    { label: 'Home', href: '/#Home' },
    { label: 'About', href: '/#About' },
    { label: 'Projects', href: '/#Projects' },
    { label: 'Services', href: '/#Services' },
    { label: 'Contact', href: '/#Contact' },
  ]

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-status">
          <span className="status-dot" />
          Open for opportunities
        </span>
          <h3>Khur0o</h3>
          <p>I build software, games, and digital experiences — turning ideas into reality.</p>
        </div>

        <div className="footer-links">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer-connect">
          <a href="mailto:hello@khur0o.dev" className="footer-email">
            hello@khur0o.dev
          </a>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/pcomon/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/Khur0o" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {year} Khur0o</span>
      </div>
    </footer>
  )
}

export default Footer