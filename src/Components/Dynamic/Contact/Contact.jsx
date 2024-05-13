import React from 'react';
import "./Contact.css"
import contactImg from "./contact.svg"
import "../../../Animations/slideInBlur.css"
const Contact = () => {
    return (
        <div className='contact-main fade-in'>
        <div className="contact-heading">Contact Me</div>
        <center><div className="heading-underline"></div></center>
        <div className='contact'>
        
          <div className="contact-img">
          <img src={contactImg} alt="" srcset="" />
          <p className="contact-description">If you have any questions or inquiries, feel free to reach out to me using the form below. I'll get back to you as soon as possible.</p>
          </div>
          <div className="contact-details">
          <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                   
                <img width="30" height="30" src="https://img.icons8.com/ios/50/collaborator-male.png" alt="collaborator-male"/>
                        <input type="text" id="name" name="name" placeholder="Your Name" className="contact-input" required />
                    
                </div>
                <div className="form-group">
                   
                <img width="30" height="30" src="https://img.icons8.com/ios/50/mail.png" alt="mail"/>
                        <input type="email" id="email" name="email" placeholder="Your Email" className="contact-input" required />
                 
                </div>
                <div className="form-group">
                   
                <img width="30" height="30" src="https://img.icons8.com/ios/50/chat-message--v1.png" alt="chat-message--v1"/>
                                        <textarea id="message" name="message" placeholder="Your Message" className="contact-textarea" rows="4" required />
              
                </div>
                <button type="submit" className="contact-submit-btn">
                <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/sent.png" alt="sent"/>
                <p>Send Message</p>
                </button>
            </form>
          </div>
        </div>
            
            
           
        </div>
    );
};

const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data); // Here you can handle form submission, like sending an email or storing data
};

export default Contact;
