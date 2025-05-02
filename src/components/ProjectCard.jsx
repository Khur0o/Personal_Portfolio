import PropTypes from "prop-types";
import React from "react";

function ProjectCard(prop) {
    return(
        <>
<a 
  href={prop.Github_SRC} 
  target="_blank" 
  rel="noopener noreferrer" 
  className="card"
>
  <img className="card-image" src={prop.source} alt="Project-Image" />
  <div className="card-details">
    <h2>{prop.CardTitle}</h2>
    <p>{prop.CardLanguages}</p>
  </div>
</a>

        </>
    );
}

export default ProjectCard