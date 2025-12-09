// src/pages/Contact.js
import React from "react";
import "./Contact.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaLocationArrow } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p className="contact-subtitle">
        Got questions about our IT Academy or Computer Store?  
        We’d love to hear from you!
      </p>

      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form action="https://formspree.io/f/mvgwrqyw"
           method="POST">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required name="email" />
            <textarea placeholder="Your Message" rows="5"  name="message"required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-details">
         {/* Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><strong>Email:</strong> support@spassion.com</p>
          <p><strong>Phone:</strong> +234 800 123 4567</p>
          <p><strong>Location:</strong> Ilorin, Nigeria</p>
        </div>

     
      <div className="social-links">
        <h3>Follow Us</h3>
        <div className="icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>

      </div>
      {/* address */}

       <div className="shop-contact" style={{ marginTop:'20px'}}>
          <h4
          style={{margin:'0px',fontStyle:"oblique"}}>Shop address</h4>
          <div className="shop-address-in contact" style={{ display:'flex',marginTop:'0px'}}><FaLocationArrow className="location-arrow"/> <p>Shop 21, Beside item 7,Stadium Complex,ibrahim Taiwo Rd.,iorin</p></div>
        </div>
      

      <div className="shop-contact" style={{ marginTop:'20px'}}>
          <h4
          style={{margin:'0px',fontStyle:"oblique"}}>Our lagos Branch address</h4>
          <div className="shop-address-in contact" style={{ display:'flex',marginTop:'0px'}}><FaLocationArrow className="location-arrow"/> <p>Shop 35 powa plaza phase 3 beside Aviation plaza Ikeja</p></div>
        </div>


        {/* Map */}
        <div className="contact-map">
            <h2>Our Location</h2>
            <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15784.74640793138!2d4.5310983495027966!3d8.48122926495633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1036530fccd11d41%3A0xe72c99b13065d610!2sS-Passion%20Computers!5e0!3m2!1sen!2sng!4v1755971209029!5m2!1sen!2sng" 
                width="600" 
                height="450"
                //  style="border:0;" 
                 allowfullscreen=""
                  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
      </div>
    </div>
  );
};

export default Contact;
