import React from "react";
import { Element } from "react-scroll";
import AboutStyles from "./AboutContainer.module.css";
import ProfilePhoto from "../Assests/profilePhoto.jpg"

const AboutContainer = () => {
  return (
    <Element name="about" className={AboutStyles.aboutContainer}>
        <div className={AboutStyles.aboutContainer_image}>
          <img src={ProfilePhoto} alt="" />
        </div>
        <div className={AboutStyles.aboutContainer_content}>
        <div className={AboutStyles.aboutContainer_getMeKnow}>
          <h2>About</h2>
          <h4>Get to know me!</h4>
          <h5 className={AboutStyles.head_1}>
            A Computer Science graduate with a B.E. degree, currently residing
            in Bengaluru. I am actively seeking a job in the field of Web &
            Software Development. I am always excited to learn new things and
            develop my skills, especially in the field of new technologies,
            which I am very passionate about.
          </h5>
          <h5 className={AboutStyles.head_2}>
            A passionate and versatile frontend web developer with a strong
            focus on creating visually stunning and user-friendly websites.
          </h5>
        </div>
          <div className={AboutStyles.aboutContainer_intrestedIn}>
            <h4>Things I'm Intrested in</h4>
            <img src="" alt="" />
          </div>
        </div>
    </Element>
  );
};

export default AboutContainer;
