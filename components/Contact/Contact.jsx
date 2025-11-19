"use client"
import React, { useActionState, useEffect, useState } from 'react';
//import axios from 'axios';
import "./Contact.css"
import contactImg from "./contact.svg"
import { querySubmitAction } from './contact.server.action';
import { useFormStatus } from 'react-dom';
//import "../../../Animations/slideInBlur.css"

const Contact = () => {

   const [state, formAction, isPending] = useActionState(querySubmitAction,null)

    return (
        <div className='contact-main'>
            <div className="contact-heading">Contact Me</div>
            <div className='contact'>
            
                <div className="contact-details">
                    <form className="contact-form"> {/*action={formAction}*/}
                        <div className="form-group">
                            <img width="30" height="30" src="https://img.icons8.com/ios/50/collaborator-male.png" alt="collaborator-male"/>
                            <input type="text" id="name" name="name" placeholder="Your Name" className="contact-input" required />
                        </div>
                        <div className="form-group">
                            <img width="30" height="30" src="https://img.icons8.com/ios/50/mail.png" alt="mail"/>
                            <input type="email" id="email" name="email" placeholder="Your Email" className="contact-input" required />
                        </div>
                        <div className="form-group">
                            <img width="30" height="30" src="https://img.icons8.com/ios/50/brief.png" alt="subject"/>
                            <input type="text" id="subject" name="subject" placeholder="Subject" className="contact-input" required />
                        </div>
                        <div className="form-group">
                            <img width="30" height="30" src="https://img.icons8.com/ios/50/chat-message--v1.png" alt="chat-message--v1"/>
                            <textarea id="message" name="message" placeholder="Your Message" className="contact-textarea" rows="4" required />
                        </div>
                        <SendMsgBtn/>
                    </form>
                    
                    <SubmitResponseMsg state={state}/>
                </div>
            </div>
        </div>
    );
};

export default Contact;


const SendMsgBtn = ()=>{
    const {pending, data, method, action} = useFormStatus()

    return <button type="submit" className="contact-submit-btn" disabled={pending} onClick={()=>alert("Now in testing phase, no Database implemented..")}>
                            <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/sent.png" alt="sent"/>
                            <p>{pending? "Sending Message..": "Send Message"}</p>
                        </button>
}

function SubmitResponseMsg({ state }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (state) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  if (!state || !visible) return null;

  return (
    <section style={{
      width: "max-content",
      backgroundColor: state.success ? "green" : "red",
      padding: "10px"
    }}>
      <span>{state.message}</span>
    </section>
  );
}