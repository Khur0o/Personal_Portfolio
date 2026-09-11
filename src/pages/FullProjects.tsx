import ProjectCard from '../components/ProjectCard'
import { ProjectsLists } from '../data/projectData'

function ProjectsPage() {
  return (
    <main className="ProjectsPage">
      <header className="projects-page-header">
        <span className="projects-kicker">
          Project Archive / 01
        </span>

        <h1>
          All
          <span> Projects.</span>
        </h1>

        <p>
          A collection of projects I've built, experimented
          with, and contributed to across software engineering,
          game development, and creative technology.
        </p>
      </header>

      <div className="projects-page-meta">
        <span>PROJECT ARCHIVE</span>

        <span>
          {ProjectsLists.length.toString().padStart(2, '0')} PROJECTS
        </span>
      </div>

      <div className="project-grid project-grid-full">
        {ProjectsLists.map((project, index) => (
          <ProjectCard
            key={`${project.CardTitle}-${index}`}
            {...project}
          />
        ))}
      </div>
    </main>
  )
}

export default ProjectsPage