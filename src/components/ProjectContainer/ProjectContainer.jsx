import React from "react";
import { Element } from "react-scroll";
import ProjectStyles from "./ProjectContainer.module.css";
import Projects from "./Projects";

const ProjectContainer = () => {
  return (
    <Element name="projects" className={ProjectStyles.ProjectContainer}>
      <h1>Projects</h1>
      <div>
        {Projects.map(
          ({ id, title, ImageSrc, description, skills, source, liveLink }) => {
            return (
              <div key={id}>
                <img src={ImageSrc} alt={`Image of${title}`} />
                <h3>{title}</h3>
                <p>{description}</p>
                <ul>
                  {skills.map((skill, id) => {
                    return <li key={id}>{skill}</li>;
                  })}
                </ul>
                <div>
                  <a href={source}>
                    <i class="fa-brands fa-square-github"></i>
                  </a>
                  <a href={liveLink}>
                    <i class="fa-solid fa-link"></i>
                  </a>
                </div>
              </div>
            );
          }
        )}
      </div>
    </Element>
  );
};

export default ProjectContainer;
