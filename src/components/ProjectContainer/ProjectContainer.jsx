import React from 'react'
import { Element } from 'react-scroll'
import ProjectStyles from './ProjectContainer.module.css'
import Projects from './Projects'

const ProjectContainer = () => {
  return (
    <>
    {Projects.map(({id,image,title,description,p1,p2,p3,soucreLink,liveLink}) => {
      return <Element name='projects' className={ProjectStyles.ProjectContainer} key={id}>
      <div className={ProjectStyles.ProjectContainer_image}>
        <img src={image} alt={title} />
      </div>
      <div className={ProjectStyles.ProjectContainer_content}>
        <h3>{title}</h3>
        <h5>{description}</h5>
      </div>
      <div className={ProjectStyles.ProjectContainer_programming}>
        <h5 className={ProjectStyles.ProjectContainer_P1}>{p1}</h5>
        <h5 className={ProjectStyles.ProjectContainer_P2}>{p2}</h5>
        <h5 className={ProjectStyles.ProjectContainer_P3}>{p3}</h5>
      </div>
      <div className={ProjectStyles.ProjectContainer_links}>
        <a href={soucreLink}><i></i></a>
        <a href={liveLink}><i></i></a>
      </div>
    </Element>
    } )}
    </>
  )
}

export default ProjectContainer