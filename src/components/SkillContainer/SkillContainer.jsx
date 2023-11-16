import React from 'react'
import { Element } from 'react-scroll'
import SkillContainerStyle from './SkillContainer.module.css'
import  LinearProgress from '@material-ui/core/LinearProgress'
import SkillImage from "../Assests/SkillImage.jpg"

const SkillContainer = () => {

  const Skills = [
    {
      id: 1,
      skillName: "React JS",
      classslider: SkillContainerStyle.SkillContainer_slider1,
      skillValue: 80
    },
    {
      id: 2,
      skillName: "JavaScript",
      classslider: SkillContainerStyle.SkillContainer_slider2,
      skillValue: 80
    },
    {
      id: 3,
      skillName: "MongoDB",
      classslider: SkillContainerStyle.SkillContainer_slider3,
      skillValue: 70
    },
    {
      id: 4,
      skillName: "Tailwind CSS",
      classslider: SkillContainerStyle.SkillContainer_slider3,
      skillValue: 85
    },
    {
      id: 5,
      skillName: "CSS3",
      classslider: SkillContainerStyle.SkillContainer_slider3,
      skillValue: 90
    },
    {
      id: 6,
      skillName: "HTML5",
      classslider: SkillContainerStyle.SkillContainer_slider3,
      skillValue: 85
    },
    {
      id: 7,
      skillName: "Node JS",
      classslider: SkillContainerStyle.SkillContainer_slider3,
      skillValue: 75
    },
    {
      id: 8,
      skillName: "Git",
      classslider: SkillContainerStyle.SkillContainer_slider3,
      skillValue: 80
    },
    {
      id: 9,
      skillName: "Figma",
      classslider: SkillContainerStyle.SkillContainer_slider3,
      skillValue: 70
    },
    {
      id: 10,
      skillName: "Bootstrap",
      classslider: SkillContainerStyle.SkillContainer_slider3,
      skillValue: 75
    },
  ]

  return (
    <Element name='skills' className={SkillContainerStyle.SkillContainer}>
      <div className={SkillContainerStyle.SkillContainer_image}>
        <img src={SkillImage} alt="Skills" />
      </div>
    
      <div className={SkillContainerStyle.SkillContainer_text}>
        <h2>SKILLS</h2>
        {Skills.map(({id,skillName,classslider,skillValue}) => {
        return <div className={SkillContainerStyle.SkillContainer_skills} key={id}>
        <h5><i className="fa-solid fa-laptop-code"></i>{skillName}</h5>
        <div className={`${SkillContainerStyle.SkillContainer_slider} ${classslider}`}>
             <LinearProgress variant="determinate" value={skillValue}/>
        </div>
      </div>
      })} 
      </div>
    </Element>
  )
}

export default SkillContainer