import SkillsIcon from '../components/SkillsIcon'
import {
  LanguagesList,
  FrameworksList,
  DatabasesList,
  RuntimeList,
  PlatformsList,
} from '../data/projectData'

function About() {
  return (
    <section className="About" id="About">
      <div className="About-LeftSide animate-on-scroll">
        <pre className="code-block">
          <code>
            README.md<br />
            <br />
            <span style={{ color: '#FF9F1C' }}>[About me ?]</span>
            <br />
            <br />
            Hi, I am Patrick B. Comon (aka <span style={{ color: '#4BF3FF' }}>Khur0o</span>).<br />
            <br />
            <br />
            <br />
            With expertise in web development, application development, game mechanics and multimedia design, I love crafting functional and engaging projects.<br />
            <br />
            <br />
            <br />
            <span style={{ color: '#FF9F1C' }}>[Contact ?]</span>
            <br />
            <br />
            Email : <span style={{ color: '#32CD32' }}>pcomon35@gmail.com </span>
            <br />
            Mobile : <span style={{ color: '#32CD32' }}>+639911969814 </span>
            <br />
            <br />
            <br />
            <span style={{ color: '#FF9F1C' }}>[Interest / Hobbies ?]</span>
            <br />
            <br />
            I enjoy coding, exploring new technologies, and developing games in Unity, especially working with 3D environments and gameplay mechanics.<br />
            <br />
            I'm also passionate about multimedia creation, including video editing, 2D animation, 3D modeling, digital painting, and designing posters and fanart.<br />
            <br />
            When I’m not working on projects, I like playing video games, watching anime and movies, read manga also learning about new design trends and creative<br />
            techniques.<br />
            <br />
            <br />
            <br />
            <br />
          </code>
        </pre>
      </div>

      <div className="About-RightSide animate-on-scroll">
        <h2>Technical Skills</h2>
        <p>Programming Languages</p>

        <div className="skills-container">
          {LanguagesList.map((lang, index) => (
            <SkillsIcon key={`${lang.iconName}-${index}`} {...lang} />
          ))}
        </div>

        <p>Frameworks and Runtime Environment</p>
        <div className="skills-container">
          {FrameworksList.map((framework, index) => (
            <SkillsIcon key={`${framework.iconName}-${index}`} {...framework} />
          ))}

          {RuntimeList.map((env, index) => (
            <SkillsIcon key={`${env.iconName}-${index}`} {...env} />
          ))}
        </div>

        <p>Databases</p>
        <div className="skills-container">
          {DatabasesList.map((db, index) => (
            <SkillsIcon key={`${db.iconName}-${index}`} {...db} />
          ))}
        </div>

        <p>Tools and Platforms</p>
        <div className="skills-container">
          {PlatformsList.map((tool, index) => (
            <SkillsIcon key={`${tool.iconName}-${index}`} {...tool} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
