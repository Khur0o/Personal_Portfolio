import { useEffect, useState } from 'react'
import { ProjectsLists, type ProjectItem } from '../data/projectData'
import '../styles/project-detail.css'

function ProjectDetail() {
  const [project, setProject] = useState<ProjectItem | null>(null)

  useEffect(() => {
    const hash = window.location.hash
    const slug = hash.replace('#/project/', '')
    
    const foundProject = ProjectsLists.find((p) => p.slug === slug)
    setProject(foundProject || null)
  }, [])

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="detail-container">
          <div className="project-not-found">
            <h1>Project Not Found</h1>
            <p>Sorry, the project you're looking for doesn't exist.</p>
            <a href="/#Projects" className="back-link">
              ← Back to Projects
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="project-detail-page">
      <div className="detail-container">
        <div className="detail-header">
          <a href="/#Projects" className="back-link">
            ← Back to Projects
          </a>
          <h1>{project.CardTitle}</h1>
        </div>

        <div className="detail-hero">
          <img src={project.source} alt={project.CardTitle} className="detail-image" />
        </div>

        <div className="detail-content">
          <div className="detail-info">
            <div className="info-section">
              <h2>About Project</h2>
              <p className="full-description">
                {project.fullDescription || project.CardDescription}
              </p>
            </div>

            <div className="info-grid">
              <div className="info-card">
                <h3>Category</h3>
                <p className="category-badge">{project.category}</p>
              </div>

              <div className="info-card">
                <h3>Type</h3>
                <p>{project.Type}</p>
              </div>

              <div className="info-card">
                <h3>Status</h3>
                <p className={`status-badge ${project.Status.toLowerCase()}`}>
                  {project.Status}
                </p>
              </div>
            </div>

            <div className="info-section">
              <h2>Technologies Used</h2>
              <div className="technologies-list">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="info-section">
              <h2>Project Links</h2>
              <div className="project-links">
                <a
                  href={project.Github_SRC}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <span>🔗</span> View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="related-projects">
          <h2>More Projects</h2>
          <a href="/#Projects" className="view-all-btn">
            View All Projects
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
