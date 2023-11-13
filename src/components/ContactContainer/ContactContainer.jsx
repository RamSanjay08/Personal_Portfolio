import React, { useRef } from "react";
import { Element } from "react-scroll";
import ContactStyles from "./ContactContainer.module.css";
import emailjs from "@emailjs/browser";
import ContactImage from "../Assests/ContactImage.jpg"

const ContactContainer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j6we8d7",
        "template_itxwkb2",
        form.current,
        "VB9XLUofB84Y7i-9f"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Successfull");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Element name="contact" className={ContactStyles.ContactContainer}>s
      <h2>CONTACT</h2>
      <form ref={form} onSubmit={sendEmail}>
      <h3>GET IN TOUCH</h3>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" className={ContactStyles.sub_btn}/>
      </form>
    </Element>
  );
};

export default ContactContainer;
