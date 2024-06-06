import { useState } from "react";
import classes from "./Contact.module.css";
// import dotenv from ""
import emailjs from "emailjs-com";

function Contact() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [subject, setSubject] = useState("");
  let [message, setMessage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submit form");

    // emailjs
    //   .send(
    //     process.env.REACT_APP_SERVICE_ID,
    //     process.env.REACT_APP_TEMPLATE_ID,
    //     {
    //       from_name: name,
    //       from_email: email,
    //       subject: subject,
    //       message: message,
    //     },
    //     process.env.REACT_APP_USER_ID
    //   )
    //   .then((result) => {
    //     console.log("email sent succesfully");
    //   })
    //   .catch((err) => {
    //     console.log("Error occured: ", err);
    //   });
  };

  return (
    <div className={classes.contactPage}>
      <div className={classes.socials}>
        <div>Reach Out Via Socials</div>
        <div>
          <div>
            <span>.socials </span>
            {"{"}
          </div>

          <div>
            &nbsp;&nbsp;&nbsp;website:{" "}
            <a
              href="https://utkarsh-190.github.io/VScode-portfolio/"
              target="_blank"
            >
              portfolio
            </a>
            ;
          </div>

          <div>
            &nbsp;&nbsp;&nbsp;email:{" "}
            <a href="mailto:yashsharma5312@gmail.com" target="_blank">
              yashsharma5312@gmail.com
            </a>
            ;
          </div>

          <div>
            &nbsp;&nbsp;&nbsp;github:{" "}
            <a href="https://github.com/yashsharma110" target="_blank">
              yashsharma110
            </a>
            ;
          </div>

          <div>
            &nbsp;&nbsp;&nbsp;linkedin:{" "}
            <a
              href="https://www.linkedin.com/in/yash-sharma-7898a71b7/"
              target="_blank"
            >
              Yash Sharma
            </a>
            ;
          </div>

          {/* <div>
            &nbsp;&nbsp;&nbsp;website:{" "}
            <a href="https://www.google.com" target="_blank">
              utkarsh.com
            </a>
            ;
          </div> */}

          <div>{"}"}</div>
        </div>
      </div>

      <form className={classes.form} onSubmit={submitHandler}>
        <div>Or Fill Out The Form</div>
        <div className={classes.formContent}>
          <div className={classes.nameAndEmail}>
            <div>
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                name="from_name"
                id="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                name="from_email"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>

          <div className={classes.subject}>
            <label htmlFor="subject">SUBJECT</label>
            <input
              type="text"
              name="subject"
              id="subject"
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
          </div>

          <div className={classes.message}>
            <label htmlFor="message">MESSAGE</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </div>

          <div>
            <input className={classes.button} type="submit" value="Submit" />
            {/* <button type="submit" onClick={clickHandler}>
              SUBMIT
            </button> */}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
