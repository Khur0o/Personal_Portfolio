import { useState } from 'react'
import { ProjectsLists } from '../data/projectData'
import ProjectCard from '../components/ProjectCard'
import '../styles/all-projects.css'

type CategoryType = 'ALL' | 'WEB' | 'GAME' | 'MOBILE' | 'SOFTWARE' | 'ART'

function AllProjects() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('ALL')

  const categories: CategoryType[] = ['ALL', 'WEB', 'GAME', 'MOBILE', 'SOFTWARE', 'ART']

  const filteredProjects = 
    activeCategory === 'ALL'
      ? ProjectsLists
      : ProjectsLists.filter((project) => project.category === activeCategory)

  return (
    <div className="all-projects-page">
      <div className="all-projects-header">
        <h1>All Projects</h1>
        <p>Explore my complete portfolio of projects across different categories</p>
      </div>

      <div className="category-filter">
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="all-projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div
              key={`${project.slug}-${index}`}
              onClick={() => {
                window.location.hash = `/project/${project.slug}`
              }}
              className="project-card-clickable"
            >
              <ProjectCard {...project} />
            </div>
          ))
        ) : (
          <div className="no-projects">
            <p>No projects found in this category</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AllProjects
