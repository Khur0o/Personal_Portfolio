import { useRef } from 'react'
import TypewriterColored from '../components/TypewriterColored'
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

    img.style.transform = `rotateX(${y * -10}deg) rotateY(${x * 10}deg)`
  }

  const handleMouseLeave = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)'
    }
  }

  return (
    <section className="Home" id="Home">
      <div className="Home-LeftSide">
        <h3>Hello, my name is</h3>
        <h1>Patrick B. Comon</h1>
        <TypewriterColored
          segments={[
            { text: 'I’m a ', color: 'white' },
            { text: 'Freelancer', color: '#4BF3FF' },
            { text: ', ', color: 'white' },
            { text: 'Software Developer', color: '#E6C200' },
            { text: ',', color: 'white' },
            { text: ' Game Developer', color: '#32CD32' },
            { text: ' and', color: 'white' },
            { text: ' Multimedia Creator', color: '#FF4C4C' },
            { text: ' passionate about building innovative digital experiences.', color: 'white' },
          ]}
        />
        <div className="set">
          <a href="/public/Resume_PC.pdf" target="_blank" download className="download-button">
            Download CV
          </a>
          <a href="https://www.linkedin.com/in/pcomon/" target="_blank">
            <img className="linkedin" src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" alt="linkedin-icon" />
          </a>
          <a href="https://github.com/Khur0o" target="_blank">
            <img className="github" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github-icon" />
          </a>
        </div>
      </div>

      <div className="Home-RightSide">
        <div className="image-wrapper" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <img ref={imageRef} src={underConstruction} alt="Interactive" className="follow-cursor" />
        </div>
      </div>
    </section>
  )
}

export default Home