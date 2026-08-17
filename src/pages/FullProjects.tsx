import ProjectCard from '../components/ProjectCard'

function ProjectsPage() {
  const fullProjects = [
    {
      source: '/assets/youtube-converter.jpg',
      CardTitle: 'YouTube Converter',
      CardLanguages: 'React, Node.js, FFmpeg, Firebase',
      Github_SRC: '#',
    },
    {
      source: '/assets/inventory-system.jpg',
      CardTitle: 'Inventory System',
      CardLanguages: 'PHP, MySQL, JavaScript',
      Github_SRC: '#',
    },
    {
      source: '/assets/survival-game.jpg',
      CardTitle: 'Survival Game',
      CardLanguages: 'Unity, C#',
      Github_SRC: '#',
    },
    {
      source: '/assets/youtube-converter.jpg',
      CardTitle: 'YouTube Converter',
      CardLanguages: 'React, Node.js, FFmpeg, Firebase',
      Github_SRC: '#',
    },
    {
      source: '/assets/inventory-system.jpg',
      CardTitle: 'Inventory System',
      CardLanguages: 'PHP, MySQL, JavaScript',
      Github_SRC: '#',
    },
    {
      source: '/assets/survival-game.jpg',
      CardTitle: 'Survival Game',
      CardLanguages: 'Unity, C#',
      Github_SRC: '#',
    },
  ]

  return (
    <section className="ProjectsPage">
      <h2 className="section-title">All Projects</h2>
      <div className="project-grid">
        {fullProjects.map((project, index) => (
          <ProjectCard key={`${project.CardTitle}-${index}`} {...project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsPage
