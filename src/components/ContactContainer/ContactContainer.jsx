import React, { useRef, useState } from "react";
import { Element } from "react-scroll";
import ContactStyles from "./ContactContainer.module.css";
import emailjs from "@emailjs/browser";
import ContactFooter from "./ContactFooter";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const ContactContainer = () => {

  let [getInput, setGetInput] = useState({user_name:"",user_email:"",message:""})

  const handleInput = ({target:{name,value}}) => {
    setGetInput({...getInput, [name]:value})
  }

  const Notify = () => {
    toast.success("Message Sended Sucessfully", {
      position: toast.POSITION.TOP_CENTER
    })
  } 

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
          Notify()
          setGetInput({user_name:"",user_email:"",message:""})
          console.log(result.text);
          console.log("Successfull");
        },
        (error) => {
          console.log(error.text);
        }
      )
  };  

  return (
    <Element name="contact" className={ContactStyles.ContactContainer}>
      <h2>CONTACT</h2>
      <form ref={form} onSubmit={sendEmail}>
      <h3>GET IN TOUCH</h3>
        <label>Name</label>
        <input type="text" name="user_name" maxLength="25" required onChange={handleInput} value={getInput.user_name}/>
        <label>Email</label>
        <input type="email" name="user_email" maxLength="25" required onChange={handleInput} value={getInput.user_email}/>
        <label>Message</label>
        <textarea name="message" required onChange={handleInput}  value={getInput.message}/> 
        <input type="submit" value="Send" className={ContactStyles.sub_btn}/>
        <ToastContainer theme="colored"/>
      </form>
      <ContactFooter/>
    </Element>
  );
};

export default ContactContainer;
