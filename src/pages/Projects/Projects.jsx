import React from "react";
import Filter from "./Filter/Filter";
import Cards from "./Cards/Cards";
import "./Projects.css";

const Projects = () => {
  document.title = "Projects - JOE";

  return (
    <div className="projects">
      <Filter />
      <Cards />
    </div>
  );
};

export default Projects;
