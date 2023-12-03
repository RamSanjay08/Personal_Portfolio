import React from "react";
import ExperienceStyles from "./Experience.module.css";
import { Element } from "react-scroll";

const Experience = () => {
  return (
    <Element name="experience">
      <h2 className={ExperienceStyles.title}>Experience</h2>
      <section className={ExperienceStyles.ExperienceContainer}>
        <div className={ExperienceStyles.ExperienceData}>
          <h2>IBM Internship</h2>
          <h6>
            Collabrated with IBM and a four-member team to analyze COVID-19 data
            in the Hospital Healthcare Domain in my final year of engineering.
            Leveraged data analytics to identify patient Length of Stay trends,
            providing insights to assist hospitals in resource planning and
            enhanced patient care with focus on outcomes and costs
          </h6>
          <h5>NOV 2022 - <span>FEB 2023</span></h5>
        </div>
      </section>
      </Element>
  );
};

export default Experience;
