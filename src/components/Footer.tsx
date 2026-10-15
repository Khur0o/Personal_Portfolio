function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-status">
            <span className="status-dot" />
              Open for opportunities
          </span>
          <p>I build software, games, and digital experiences — turning ideas into reality.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {year} Khur0o</span>
      </div>
    </footer>
  )
}

export default Footer