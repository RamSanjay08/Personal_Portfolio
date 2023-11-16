import React from 'react'
import ContactFooterStyles from "./ContactFooter.module.css"

const ContactFooter = () => {
  return (
    <>
    <section className={ContactFooterStyles.ContactFooter}>
        <h3 className={ContactFooterStyles.Connect}>Connect with me</h3>
        <div className={ContactFooterStyles.Socialicons}>
          <a href="https://github.com/RamSanjay08" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/ramsanjay8/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/ram_sanjay_8" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCwYwJzYpZc5ANdgnyPvjI3A" target="_blank">
          <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
        <div className={ContactFooterStyles.contacts}>
          <div className={ContactFooterStyles.mobile}>
            <a href="tel:+919786589488">
              <i className="fa-solid fa-phone"></i>
              <span>+91 9786589488</span>
            </a>
          </div>
          <div className={ContactFooterStyles.email}>
            <a href="mailto: ramsanjaydev08@gmail.com">
              <i className="fa-solid fa-envelope"></i>
              <span>ramsanjaydev08@gmail.com</span>
            </a>
          </div>
        </div>
    </section>
        <div className={ContactFooterStyles.copyrights}>
          <p>@RamSanjay08</p>
        </div>
        </>
  )
}

export default ContactFooter