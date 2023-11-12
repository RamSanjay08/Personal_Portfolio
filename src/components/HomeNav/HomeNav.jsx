import React, { useState } from 'react'
import { Link } from 'react-scroll'
import HomeNavStyles from './HomeNav.module.css'
import logoIcon from "../Assests/logo.png"

const HomeNav = () => {
  let [handBurger,setHandBurger] = useState(false)

  const handleSubmit = () => {
    setHandBurger(!handBurger)
  }

  return (

    <nav className={HomeNavStyles.navbar}>
      <div className={HomeNavStyles.navbar_left}>
      <img src={logoIcon} alt="" />
      <h1>Ram <span>Dev.</span></h1>
      </div>
      <div className={HomeNavStyles.navbar_right}>
        <ul id={HomeNavStyles.navbar_right_content} className={handBurger ? `${HomeNavStyles.navbar_right_content} ${HomeNavStyles.active}` : HomeNavStyles.navbar_right_content}>
          <Link to='about' smooth={true}><li>About</li></Link>
          <Link to='skills' smooth={true}><li>Skills</li></Link>
          <Link to='projects' smooth={true}><li>Projects</li></Link>
          <Link to='experienece' smooth={true}><li>Experience</li></Link>
          <Link to='contact' smooth={true}><li>Contact</li></Link>
        <button>Get in Touch</button>
        </ul>
      </div>
        <div className={HomeNavStyles.hand_burger} onClick={handleSubmit}>
          <i id='bar' className={handBurger ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
    </nav>
    
  )
}

export default HomeNav