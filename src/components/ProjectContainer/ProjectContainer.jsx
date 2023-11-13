import React from "react";
import { Element } from "react-scroll";
import ProjectStyles from "./ProjectContainer.module.css";
import Projects from "./Projects";
import ProjectCard from "./ProjectCard";

const ProjectContainer = () => {
  return (
    <Element name="projects" className={ProjectStyles.ProjectContainer}>
      <h1 className={ProjectStyles.Projects_head}>PROJECTS</h1>
      <div className={ProjectStyles.Projects}>
        {Projects.map(
          ({title, ImageSrc, description, skills, sourceLink, liveLink, id}) => {
            return (
             <ProjectCard key={id} project={{title, ImageSrc, description, skills, sourceLink, liveLink, id}}/>
            );
          }
        )}
      </div>
    </Element>
  );
};

export default ProjectContainer;
