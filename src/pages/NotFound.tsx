function NotFound() {
  return (
    <section className="NotFound" aria-live="polite">
      <div className="not-found-inner">
        <p className="not-found-eyebrow">404</p>
        <h1>Page not found</h1>
        <p className="not-found-text">
          The page you are looking for may have moved, been removed, or never existed.
        </p>

        <div className="not-found-actions">
          <a href="/" className="hero-button">
            Go back home
          </a>
          <a href="/#Contact" className="secondary-link">
            Contact me
          </a>
        </div>
      </div>
    </section>
  )
}

export default NotFound
