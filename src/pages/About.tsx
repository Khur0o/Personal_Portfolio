import SkillsIcon from '../components/SkillsIcon'
import {
  LanguagesList,
  FrameworksList,
  DatabasesList,
  RuntimeList,
  PlatformsList,
} from '../data/projectData'

function SkillGroup({
  title,
  description,
  items,
}: {
  title: string
  description: string
  items: any[]
}) {
  return (
    <div className="skill-group">
      <div className="skill-group-header">
        <div>
          <h3>{title}</h3>
          <span>{description}</span>
        </div>

        <span className="skill-count">
          {items.length.toString().padStart(2, '0')}
        </span>
      </div>

      <div className="skills-container">
        {items.map((item, index) => (
          <SkillsIcon
            key={`${item.iconName}-${index}`}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}

function About() {
  const frameworkAndRuntime = [
    ...FrameworksList,
    ...RuntimeList,
  ]

  return (
    <section className="About" id="About">

      {/* =========================
          INTRO
      ========================== */}
      <div className="about-header animate-on-scroll">

        <div className="about-heading">
          <h2>
            Engineering with
            <span> creativity in mind.</span>
          </h2>
        </div>

        <p className="about-summary">
          I'm Patrick B. Comon, known online as{' '}
          <strong>Khur0o</strong> — a software engineer and
          game developer interested in building practical,
          thoughtful, and engaging digital experiences.
        </p>

      </div>


      {/* =========================
          PROFILE
      ========================== */}
      <div className="about-main">

        <div className="about-profile animate-on-scroll">

          <div className="profile-top">
            <span className="profile-label">
              PROFILE
            </span>

            <span className="profile-status">
              <i />
              Building & Learning
            </span>
          </div>

          <div className="profile-content">

            <h3>
              I like building things
              <br />
              from the ground up.
            </h3>

            <p>
              My work sits between software engineering,
              game development, and digital design. I enjoy
              turning an idea into a working system, refining
              the details, and making the final experience
              feel intentional rather than template-made.
            </p>

            <p>
              I'm particularly interested in game systems,
              interactive experiences, web applications,
              3D environments, and creative technology.
            </p>

          </div>


          <div className="profile-focus">

            <div className="focus-item">
              <span className="focus-number">01</span>

              <div>
                <strong>Software Engineering</strong>
                <p>
                  Building maintainable applications,
                  APIs, and practical systems.
                </p>
              </div>
            </div>

            <div className="focus-item">
              <span className="focus-number">02</span>

              <div>
                <strong>Game Development</strong>
                <p>
                  Designing mechanics, systems,
                  environments, and playable experiences.
                </p>
              </div>
            </div>

            <div className="focus-item">
              <span className="focus-number">03</span>

              <div>
                <strong>Creative Technology</strong>
                <p>
                  Combining development, illustration,
                  design, and experimentation.
                </p>
              </div>
            </div>

          </div>

        </div>


        {/* =========================
            APPROACH
        ========================== */}
        <aside className="about-approach animate-on-scroll">

          <span className="about-kicker">
            Approach
          </span>

          <h3>
            Useful.
            <br />
            Intentional.
            <br />
            Memorable.
          </h3>

          <p>
            I prefer solutions that have a reason
            behind them — from architecture and
            interaction to the smallest visual detail.
          </p>

          <div className="approach-line">
            <span>01</span>
            Understand
          </div>

          <div className="approach-line">
            <span>02</span>
            Design
          </div>

          <div className="approach-line">
            <span>03</span>
            Build
          </div>

          <div className="approach-line">
            <span>04</span>
            Refine
          </div>

        </aside>

      </div>


      {/* =========================
          TECH STACK
      ========================== */}
      <div className="technical-section animate-on-scroll">

        <div className="technical-header">

          <div>
            <h2>
              Technical Skills
            </h2>
          </div>

          <p>
            Technologies and tools I use to turn
            ideas into working products.
          </p>

        </div>


        <div className="skills-layout">

          <SkillGroup
            title="Languages"
            description="Core programming languages"
            items={LanguagesList}
          />

          <SkillGroup
            title="Frameworks & Runtime"
            description="Application development"
            items={frameworkAndRuntime}
          />

          <SkillGroup
            title="Databases"
            description="Data & persistence"
            items={DatabasesList}
          />

          <SkillGroup
            title="Tools & Platforms"
            description="Development ecosystem"
            items={PlatformsList}
          />

        </div>

      </div>

    </section>
  )
}

export default About