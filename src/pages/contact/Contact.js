import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.scss";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nag5e0k",
        "template_9z5vuvq",
        form.current,
        "TFVlnwEFsCigeBT-c"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("msg sent")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
  //   <form ref={form} onSubmit={sendEmail}>
  //   <label>Name</label>
  //   <input type="text" name="user_name" />
  //   <label>Email</label>
  //   <input type="email" name="user_email" />
  //   <label>Message</label>
  //   <textarea name="msg" />
  //   <input type="submit" value="Send" />
  // </form>
    <div className="container contact-page">
      <div className="text-zone">
        <h1>contact me</h1>

        <p>i appreciate any feedback, recommendation, or comment</p>
      </div>
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <div className="label">
            <label htmlFor="name">name </label>
            <input type="text" id="name" name="user_name" placeholder="name" />
          </div>
          <div className="label">
            <label htmlFor="email">email </label>
            <input type="email" id="email" name="user_email" placeholder="email" />
          </div>
          <div className="label">
            <label htmlFor="msg">message </label>
            <textarea type="" name="msg" id="msg" placeholder="message" />
          </div>
          <button type="submit" value="Send"> submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
