import React from 'react'
import ExperienceStyles from './Experience.module.css'

const Experience = () => {
  return (
    <>
      <h2 className={ExperienceStyles.title}>Experience</h2>
    <section className={ExperienceStyles.ExperienceContainer}>
        <div className={ExperienceStyles.ExperienceData}>
           <i className="fa-regular fa-file-code"></i>
          <h2>Web Development</h2>
        </div>
        <div className={ExperienceStyles.ExperienceData}>
        <i className="fa-solid fa-palette"></i>
          <h2>UI/UX Design</h2>
        </div>
        <div className={ExperienceStyles.ExperienceData}>
        <i className="fa-solid fa-magnifying-glass-chart"></i>
          <h2>Data Analytics</h2>
        </div>
        <div className={ExperienceStyles.ExperienceData}>
        <i className="fa-solid fa-video"></i>
          <h2>Video Editing</h2>
        </div>
    </section>
    </>
  )
}

export default Experience