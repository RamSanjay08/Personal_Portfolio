import React from "react";
import HomeContentStyles from "./HomeContent.module.css";
import homeImage from "../Assests/homeImage.jpg";
import { Link } from "react-scroll";

const HomeContent = () => {
  return (
    <section className={HomeContentStyles.HomeContent}>
      <div className={HomeContentStyles.HomeContent_left_main}>
        <div className={HomeContentStyles.Socialicons}>
          <a href="https://github.com/RamSanjay08" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/ramsanjay8/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/ram_sanjay_8" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="mailto:ram.sanjay.techie@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>

        <div className={HomeContentStyles.HomeContent_left}>
          <h1>
            <span>I'm</span> Ram Sanjay
          </h1>
          <h2 className={HomeContentStyles.creative_dev}>
            <span>Creative</span> Front-End Developer
          </h2>
          <h5>
            I'm a Frontend Web Developer dedicated to the art of transforming
            ideas into functional and aesthetically pleasing web applications,
            where my commitment to innovation and attention to detail converge
            to elevate user engagement and satisfaction
          </h5>
          <div className={HomeContentStyles.HomeContent_left_btn}>
            <a
              href="https://drive.google.com/file/d/1b5aimgQ3zO1_bJBXaeeXNrxur2VVZMgj/view?usp=sharing"
              target="_blank"
            >
              <button className={HomeContentStyles.btn_resume}>Resume</button>
            </a>
            <Link to="projects" smooth={true} duration={500}>
              <button className={HomeContentStyles.btn_work}>My Work</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={HomeContentStyles.HomeContent_right}>
        <img src={homeImage} alt="" />
      </div>
    </section>
  );
};

export default HomeContent;
