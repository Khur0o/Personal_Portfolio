import ProjectCard from "../components/ProjectCard";

function ProjectsPage() {
  const fullProjects = [
    {
        CardImg: "/assets/youtube-converter.jpg",
        CardTitle: "YouTube Converter",
        CardLanguages: "React, Node.js, FFmpeg, Firebase"
    },
    {
        CardImg: "/assets/inventory-system.jpg",
        CardTitle: "Inventory System",
        CardLanguages: "PHP, MySQL, JavaScript"
    },
    {
        CardImg: "/assets/survival-game.jpg",
        CardTitle: "Survival Game",
        CardLanguages: "Unity, C#"
    },
    {
        CardImg: "/assets/youtube-converter.jpg",
        CardTitle: "YouTube Converter",
        CardLanguages: "React, Node.js, FFmpeg, Firebase"
    },
    {
        CardImg: "/assets/inventory-system.jpg",
        CardTitle: "Inventory System",
        CardLanguages: "PHP, MySQL, JavaScript"
    },
    {
        CardImg: "/assets/survival-game.jpg",
        CardTitle: "Survival Game",
        CardLanguages: "Unity, C#"
    }
  ];

  return (
    <section className="ProjectsPage">
      <h2 className="section-title">All Projects</h2>
      <div className="project-grid">
        {fullProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
