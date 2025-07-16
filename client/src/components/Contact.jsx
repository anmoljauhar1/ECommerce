import React from "react";
import "../style/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <p>Feel free to reach out by filling the form below.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
