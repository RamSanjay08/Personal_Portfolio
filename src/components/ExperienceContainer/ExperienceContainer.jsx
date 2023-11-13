import React from "react";
import { Element } from "react-scroll";
import ExperienceStyles from "./ExperienceContainer.module.css";
import Reactsvg from "../svg/react.svg";
import MongoDB from "../svg/mongodb.svg";
import NodeJssvg from "../svg/nodejs.svg";
import JavaScript from "../svg/javaScript.svg";
import Git from "../svg/git.svg";
import Figma from "../svg/figma.svg";
import Html from "../svg/html.svg";
import CssSvg from "../svg/css.svg";
import Bootstrap from "../svg/bootstrap.svg";
import Sql from "../svg/sql.svg";

const ExperienceContainer = () => {
  const Experiences = [
    {
      id: 1,
      imagesSvg: Reactsvg,
    },
    {
      id: 2,
      imagesSvg: JavaScript,
    },
    {
      id: 3,
      imagesSvg: NodeJssvg,
    },
    {
      id: 4,
      imagesSvg: MongoDB,
    },
    {
      id: 5,
      imagesSvg: Git,
    },
    {
      id: 6,
      imagesSvg: Html,
    },
    {
      id: 7,
      imagesSvg: CssSvg,
    },
    {
      id: 8,
      imagesSvg: Figma,
    },
    {
      id: 9,
      imagesSvg: Bootstrap,
    },
    {
      id: 10,
      imagesSvg: Sql,
    },
  ];

  return (
    <Element name="experience" className={ExperienceStyles.ExperienceContainer}>
      <div className={ExperienceStyles.ExperienceContent}>
        <h2>Experience</h2>
        <h5>
          Here you will discover additional details regarding my professional activities, and my current proficiency, mainly in
          programming and technology.
        </h5>
      </div>
      <div className={ExperienceStyles.ExperienceContainer_Image}>
      {Experiences.map(({ id, imagesSvg }) => {
        return (
          <div key={id} className={ExperienceStyles.ExperienceImage}>
            <img src={imagesSvg} alt="" />
          </div>
        );
      })}
      </div>
    </Element>
  );
};

export default ExperienceContainer;
