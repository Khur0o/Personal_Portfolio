import ProjectCard from "../components/ProjectCard";

import {
  ProjectsLists
} from "../data/projectData.js";

function Projects() {
  return (
    <section className="Projects" id="Projects">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">A collection of my personal and freelance works.</p>
      <div className="project-grid">
        {ProjectsLists.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <div className="see-more-container">
        <a href="https://github.com/Khur0o" className="see-more-link">See More</a>
      </div>

    </section>
  );
}

export default Projects;
