import React from "react";
import ProjectStyles from "./ProjectCard.module.css";

const ProjectCard = ({
  project: { title, ImageSrc, description, skills, sourceLink, liveLink },
}) => {
  return (
    <div className={ProjectStyles.Project_Container}>
      <img src={ImageSrc} alt={`Image of${title}`} className={ProjectStyles.Project_image}/>
      <div className={ProjectStyles.Project_Container_Content}>
      <h3 className={ProjectStyles.Project_title}>{title}</h3>
      <p className={ProjectStyles.Project_description}>{description}</p>
      <ul className={ProjectStyles.Project_skills}>
        {skills.map((skill, id) => {
          return <li key={id} className={ProjectStyles.Project_skill}>{skill}</li>;
        })}
      </ul>
      <div className={ProjectStyles.Project_links}>
        <a href={sourceLink} className={ProjectStyles.Project_link} target="_blank" title="Source of the Project">
          <i className="fa-brands fa-square-github"></i>
        </a>
        <a href={liveLink} className={ProjectStyles.Project_link} target="_blank" title="Go Live">
          <i className="fa-solid fa-link"></i>
        </a>
      </div>
      </div>
    </div>
  );
};

export default ProjectCard;
