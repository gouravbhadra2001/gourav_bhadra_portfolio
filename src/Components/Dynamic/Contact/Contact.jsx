import React from 'react';

import "./Contact.css"
const Contact = () => {
    return (
      <div className='contact'>
        <h2 className="contact-heading">Contact Me</h2>
        <p className="contact-description">If you have any questions or inquiries, feel free to reach out to me using the form below. I'll get back to you as soon as possible.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="contact-label">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" className="contact-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="contact-label">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" className="contact-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="contact-label">Message:</label>
            <textarea id="message" name="message" placeholder="Your Message" className="contact-textarea" rows="4" required />
          </div>
          <button type="submit" className="contact-submit-btn">Send Message</button>
        </form>
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