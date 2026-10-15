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
    <main className="ProjectsPage">
      <a href="#Projects" className="archive-back-link">
        <span aria-hidden="true">←</span> Back to portfolio
      </a>

      <header className="projects-page-header">
        <span className="projects-kicker">Project Archive / 01</span>
        <h1>
          All
          <span> Projects.</span>
        </h1>
        <p>
          A collection of projects I've built, experimented with, and
          contributed to across software engineering, game development,
          and creative technology.
        </p>
      </header>

      <div className="projects-page-meta">
        <span>PROJECT ARCHIVE</span>
        <span>
          {filteredProjects.length.toString().padStart(2, '0')} OF{' '}
          {ProjectsLists.length.toString().padStart(2, '0')} PROJECTS
        </span>
      </div>

      <nav className="category-filter" aria-label="Filter projects by category">
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>
      </nav>

      <div className="project-grid project-grid-full">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard key={`${project.slug}-${index}`} {...project} />
          ))
        ) : (
          <div className="no-projects">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </main>
  )
}

export default AllProjects
