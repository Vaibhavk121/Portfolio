import React from 'react';
import link from '../assets/images/contact/linkedin.png'
import insta from '../assets/images/contact/instagram.png'
import github from '../assets/images/contact/github.png'
import x from '../assets/images/contact/twitter.png'

import '../index.css'
function Contact() {
  return (
    <section id="contact" className="">
      
      <div className="contactsocial">
      <a href="https://www.instagram.com/vaibhav.k111?igsh=dXNjbGJoazJjanY=">
      <img src={insta} alt="insta" className='social'/></a>
      <a href="https://x.com/Vaibhav_k111?t=WxTU764Tr-P4VBVwPdMGjg&s=08">
      <img src={x} alt="twitter" className='social'/></a>
      <a href="https://github.com/Vaibhavk121">
      <img src={github} alt="github" className='social'/></a>
      <a href="https://www.linkedin.com/in/vaibhav-kumar-b366872a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
      <img src={link} alt="linkedin" className='social'/></a>
      </div>
    </section>
  );
}

export default Contact;
