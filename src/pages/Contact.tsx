import { useState } from 'react'

function Contact() {
  const [email, setEmail] = useState('')
  const [revealed, setRevealed] = useState(false)
  const [error, setError] = useState('')

  const EMAIL_ADDRESS = 'pcomon35@gmail.com'

  const handleReveal = (event: React.FormEvent) => {
    event.preventDefault()

    const trimmedEmail = email.trim()

    setError('')
    setRevealed(false)

    // Empty
    if (!trimmedEmail) {
      setError('Please enter your email address.')
      return
    }

    // Invalid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(trimmedEmail)) {
      setError('That doesn’t look like a valid email address.')
      return
    }

    // Success
    setRevealed(true)
  }

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(EMAIL_ADDRESS)
        console.log('Email copied!')
        return
      }

      // Fallback for browsers without Clipboard API
      const textarea = document.createElement('textarea')

      textarea.value = EMAIL_ADDRESS
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'

      document.body.appendChild(textarea)

      textarea.focus()
      textarea.select()

      document.execCommand('copy')

      document.body.removeChild(textarea)

      console.log('Email copied using fallback!')
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  return (
    <section
      className="Contact animate-on-scroll"
      id="Contact"
    >
      <div className="contact-header">
        <div>
          <span className="section-kicker">
            Contact
          </span>

          <h2>
            Let's make
            <span> something useful.</span>
          </h2>
        </div>

        <p>
          Have a project, automation idea, game,
          or something interesting in mind?
          I'd be happy to hear about it.
        </p>
      </div>

      <div className="contact-unlock">
        <form
          className="contact-email-form"
          onSubmit={handleReveal}
          noValidate
        >
          <div
            className={`contact-input-wrapper ${
              error ? 'has-error' : ''
            } ${
              revealed ? 'is-valid' : ''
            }`}
          >
            <input
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                setError('')
                setRevealed(false)
              }}
              placeholder="Enter Your Email"
              autoComplete="email"
              aria-invalid={!!error}
              aria-describedby={
                error ? 'contact-error' : undefined
              }
            />

            <button
              type="submit"
              aria-label="Reveal email"
            >
              &#x2192;
            </button>
          </div>

          {error && (
            <p
              id="contact-error"
              className="contact-error"
              role="alert"
            >
              <span className="contact-error-icon">!</span>
              {error}
            </p>
          )}
        </form>

        {revealed && (
          <div className="contact-result">
            <span className="contact-result-label">
              Contact Email
            </span>

            <div className="contact-email">
              {EMAIL_ADDRESS}
            </div>

            <button
              className="contact-copy"
              type="button"
              onClick={handleCopyEmail}
            >
              Copy Email
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact