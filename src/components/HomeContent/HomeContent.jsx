import React from "react";
import homeImage from "../Assests/homeImage.jpg";
import HomeContentStyles from "./HomeContent.module.css";

const HomeContent = () => {
  return (
    <section className={HomeContentStyles.HomeContent}>
      
      <div className={HomeContentStyles.HomeContent_left_main}>
      <div className={HomeContentStyles.Socialicons}>
        <a href="https://github.com/RamSanjay08">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/ramsanjay8/">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/ram_sanjay_8">
          <i class="fa-brands fa-twitter"></i>
        </a>
      </div>

      <div className={HomeContentStyles.HomeContent_left}>
        <h3>Hello I'm</h3>
        <h1>Ram Sanjay</h1>
        <h2>Web Developer</h2>
        <h5>
          I'm a Frontend Web Developer building the Front-end of Websites and
          Web Applications that leads to the success of the overall product..
        </h5>
        <div className={HomeContentStyles.HomeContent_left_btn}>
          <a href="">
            <button className={HomeContentStyles.btn_resume}>Resume</button>
          </a>
          <a href="">
            <button className={HomeContentStyles.btn_work}>My Work</button>
          </a>
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
