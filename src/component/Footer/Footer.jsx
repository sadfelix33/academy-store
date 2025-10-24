import React from "react";
import "./Footer.css";
import { FaLocationArrow } from "react-icons/fa";
// import facebookIcon from "../../assets/facebook3.png";
// import instagramIcon from "../../assets/instagram1.png";
// import twitterIcon from "../../assets/X1.png";
// import linkedinIcon from "../../assets/linkedin.png";
// import youtubeIcon from "../../assets/youtube1.png";



const Footer = () => {
  return (
    <footer className="footer">
    
      <div className="footer-container">
        <div className="footer-section">
          <h4>S-Passion</h4>
          <p>Empowering your learning journey.</p>
        </div>
        <div className="footer-section1">
          <h4>Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Shop</a></li>
            <li><a href="/academy">Academy</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about"> About</a></li>
          </ul>
        </div>          
         {/* Social Media */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
        <a href="#" className="social-link"><img src="/assets/facebook3.png" alt="Facebook" /></a>
        <a href="#"  className="social-link"><img src="/assets/instagram1.png" alt="Instagram" /></a>
        <a href="#" className="social-link"><img src="/assets/X1.png" alt="Twitter" /></a>
        <a href="#" className="social-link"><img src="/assets/linkedin.png" alt="LinkedIn" /></a>
        <a href="#" className="social-link"><img src="/assets/youtube1.png" alt="YouTube" /></a>

    </div>

        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to get the latest tech deals and academy updates.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit"><a href="mailto:max. spassion0519@gmail.com?body=My custom mail body" className="letter">Subsciption</a></button> 
          </form>
        </div>
      {/* contact */}
        <div className="footer-section2">
          <h4>Contact</h4>
          <p>Email: spassion0519@gmail.com</p>
          <p className="phone1">Phone: +234 80 3748 7006</p>
          <p className="phone"> +234 80 3324 6627</p>
        </div>
        <div className="shop">
          <h4>Shop address</h4>
          <div className="shop-address"><FaLocationArrow className="location-arrow"/> <p>Shop 21, Beside item 7,Stadium Complex,ibrahim Taiwo Rd,ilorin.</p></div>
        </div>
        <div className="shop">
          <h4>Our Lagos Branch</h4>
          <div className="shop-address"><FaLocationArrow  style={{
            color:'yellow'
          }}className="location-arrow"/> <p>Shop 35 powa plaza phase 3 beside Aviation plaza Ikeja</p></div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Spassion. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
