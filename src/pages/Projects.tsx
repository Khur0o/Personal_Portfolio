import ProjectCard from '../components/ProjectCard'
import { ProjectsLists } from '../data/projectData'

function Projects() {
  const featuredProjects = ProjectsLists.slice(0, 3)

  return (
    <section className="Projects animate-on-scroll" id="Projects">
      <span className="section-kicker">Projects</span>
      <div className="projects-header">
        <div>
          <h2>
            Things I've
            <span> built.</span>
          </h2>
        </div>

        <p>
          A selection of software, games, experiments, and
          other projects I've worked on while learning and
          building.
        </p>
      </div>

      <div className="line"/>
    

      <div className="project-grid">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={`${project.CardTitle}-${index}`}
            {...project}
          />
        ))}
      </div>

      <div className="see-more-container">
        <a
          href="/#/all-projects"
          className="see-more-link"
        >
          <span>View all projects</span>
        </a>
      </div>
    </section>
  )
}

export default Projects
