import React from "react";
import "../../styles/projects.css";
import projectData from "../../data/projectData";
import Video from "../../components/video";

function Projects() {
  return (
    <div className="projects">
      {projectData.map((data, i) => {
        return <Video key={i} {...data} />;
      })}
    </div>
  );
}

export default Projects;
