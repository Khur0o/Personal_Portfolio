import { useRef } from 'react'
import underConstruction from '../assets/images/under-construction-warning-sign.png'

function Home() {
  const imageRef = useRef<HTMLImageElement | null>(null)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const wrapper = event.currentTarget
    const img = imageRef.current

    if (!img) return

    const rect = wrapper.getBoundingClientRect()

    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5

    img.style.transform = `
      rotateX(${y * -8}deg)
      rotateY(${x * 8}deg)
      translateY(-6px)
    `
  }

  const handleMouseLeave = () => {
    if (imageRef.current) {
      imageRef.current.style.transform =
        'rotateX(0deg) rotateY(0deg) translateY(0)'
    }
  }

  return (
    <section className="Home animate-on-scroll" id="Home">
      <div className="hero-grid">
        {/* LEFT */}
        <div className="Home-LeftSide">
          <div className="hero-intro">
            <span className="hero-greeting">
              Hello, I'm
            </span>
            <h1>
              Khur0o
            </h1>
          </div>

          <p className="hero-bio">
            I build software, games, and digital experiences —
            turning ideas into practical systems and memorable
            experiences.
          </p>

          <div className="hero-actions">
            <a href="#Projects" className="hero-button">
              <span>View my work</span>
            </a>

            <div className="hero-socials">
              <a
                href="https://www.linkedin.com/in/pcomon/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg"
                  alt=""
                />
              </a>

              <a
                href="https://github.com/Khur0o"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="hero-status">
            <span className="status-dot" />
            <span>Currently building & learning</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="Home-RightSide">
          <div
            className="image-wrapper"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="hero-image-glow" />

            <div className="hero-image-frame">
              <div className="hero-frame-label">
                <span>KHUR0O</span>
                <span>DEV / 2026</span>
              </div>

              <img
                ref={imageRef}
                src={underConstruction}
                alt="Khur0o creative developer illustration"
                className="follow-cursor"
              />

              <div className="hero-frame-corner top-left" />
              <div className="hero-frame-corner top-right" />
              <div className="hero-frame-corner bottom-left" />
              <div className="hero-frame-corner bottom-right" />
            </div>

            <span className="hero-orbit orbit-one" />
            <span className="hero-orbit orbit-two" />
          </div>
        </div>
      </div>

<br /><br /><br /><br />
      <div className="hero-scroll">
        <span className="hero-scroll-line" />
        <span>SCROLL TO EXPLORE</span>
        <span className="hero-scroll-line" />
      </div>
    </section>
  )
}

export default Home