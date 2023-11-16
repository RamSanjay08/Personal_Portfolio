import React from "react";
import ExperienceStyles from "./IntrestedContainer.module.css";
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
import Sass from '../svg/Sass.svg'
import LightRoom from '../svg/lightroom.svg'
import Photoshop from '../svg/photoshop.svg'
import PremierPro from '../svg/premierpro.svg'
import Illustration from '../svg/Adobeillustration.svg'
import AdobeXD from '../svg/AdobeXD.svg'

const IntrestedContainer = () => {
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
    {
      id: 11,
      imagesSvg: Sass,
    },
    {
      id: 12,
      imagesSvg: LightRoom,
    },
    {
      id: 13,
      imagesSvg: Photoshop,
    },
    {
      id: 14,
      imagesSvg: PremierPro,
    },
    {
      id: 15,
      imagesSvg: Illustration,
    },
    {
      id: 16,
      imagesSvg: AdobeXD,
    },
  ];

  return (
    <section className={ExperienceStyles.ExperienceContainer}>
      <div className={ExperienceStyles.ExperienceContent}>
        <h2>Things I'm Intrested in</h2>
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
    </section>
  );
};

export default IntrestedContainer;
