import { ProjectsLists } from '../data/projectData'
import ProjectCard from '../components/ProjectCard'
import '../styles/project-detail.css'

type ProjectDetailProps = {
  slug: string
}

function ProjectDetail({ slug }: ProjectDetailProps) {
  const project = ProjectsLists.find((item) => item.slug === slug)

  if (!project) {
    return (
      <main className="project-detail-page">
        <div className="detail-container project-not-found">
          <span className="projects-kicker">Project Archive / 404</span>
          <h1>Project not found.</h1>
          <p>That project may have moved, or the link may be out of date.</p>
          <a href="#/all-projects" className="detail-action">
            Browse all projects <span aria-hidden="true">↗</span>
          </a>
        </div>
      </main>
    )
  }

  const relatedProjects = ProjectsLists.filter((item) => item.slug !== project.slug)
  const projectNumber = ProjectsLists.findIndex((item) => item.slug === project.slug) + 1

  return (
    <main className="project-detail-page">
      <div className="detail-container">
        <a href="#/all-projects" className="archive-back-link">
          <span aria-hidden="true">←</span> Back to all projects
        </a>

        <header className="detail-header">
          <span className="projects-kicker">
            Project {projectNumber.toString().padStart(2, '0')} /{' '}
            {project.category}
          </span>
          <h1>{project.CardTitle}</h1>
          <p>{project.CardDescription}</p>
        </header>

        <figure className="detail-hero">
          <img
            src={project.source}
            alt={`${project.CardTitle} project preview`}
            className="detail-image"
          />
        </figure>

        <div className="detail-content">
          <section className="detail-description">
            <span className="detail-label">ABOUT THE PROJECT</span>
            <p>{project.fullDescription || project.CardDescription}</p>
          </section>

          <aside className="detail-sidebar">
            <div className="detail-facts">
              <div className="detail-fact">
                <span className="detail-label">CATEGORY</span>
                <p>{project.category}</p>
              </div>
              <div className="detail-fact">
                <span className="detail-label">TYPE</span>
                <p>{project.Type}</p>
              </div>
              <div className="detail-fact">
                <span className="detail-label">STATUS</span>
                <p>{project.Status}</p>
              </div>
            </div>

            <div className="detail-technologies">
              <span className="detail-label">BUILT WITH</span>
              <div className="technologies-list">
                {project.technologies.map((technology) => (
                  <span key={technology} className="tech-tag">
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={project.Github_SRC}
              target="_blank"
              rel="noopener noreferrer"
              className="detail-action"
            >
              View source on GitHub
            </a>
          </aside>
        </div>

        {relatedProjects.length > 0 && (
          <section className="related-projects">
            <div className="related-projects-heading">
              <div>
                <span className="projects-kicker">Keep exploring</span>
                <h2>More projects.</h2>
              </div>
              <a href="#/all-projects" className="related-all-link">
                View the archive
              </a>
            </div>
            <div className="project-grid related-project-grid">
              {relatedProjects.slice(0, 2).map((relatedProject) => (
                <ProjectCard
                  key={relatedProject.slug}
                  {...relatedProject}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}

export default ProjectDetail
