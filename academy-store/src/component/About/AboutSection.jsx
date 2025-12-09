import React from "react";
import "./AboutSection.css";

const AboutSection = ({ variant }) => {
  return (
    <section className="about-section">
      {variant === "home" ? (
        <>
        <div className="about-flex">
       <div className="about-home">

    <div className="overlay-2">
      <h2>💻 About S-Passion</h2>
      <p>
        At <strong>S-Passion</strong>, technology is our passion. We provide
        top-quality <strong>computers, accessories, and gadgets</strong> that
        keep you connected and productive. Beyond sales, we also run the{" "}
        <strong>S-Passion Academy</strong>, where we empower individuals with
        the digital skills they need to thrive in today’s tech-driven world.
      </p>
      <button className="about-btn"> <a href="/about">Learn More About Us</a></button>
    </div>
     
  
</div>
 <div className="about-image">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC9vTetSB0r9FCM9E0Wsc_jGaqrHL-LERPyQ&s" alt="About Spassion" /></div>
    </div>
        </>
      ) : (
        <>
          <h2>💻 Our Story</h2>
          <p className="about-text">
            At <strong>Spassion</strong>, we are dedicated to bridging the gap
            between people and technology. Established with a vision to make
            digital tools more accessible, we specialize in the{" "}
            <strong>
              sales of computers, accessories, and IT gadgets
            </strong>{" "}
            that combine quality with affordability.
          </p>
          <p className="about-text">
            But we don’t just sell tech — we also <strong>teach it</strong>.
            Through our <strong>Spassion Academy</strong>, we provide hands-on
            training in computer literacy, software skills, and modern digital
            practices, helping students and professionals stay ahead in today’s
            fast-paced world.
          </p>

          <ul className="about-values">
            <li>✅ Quality & Reliability – Trusted products and services you can depend on.</li>
            <li>✅ Innovation – Bringing the latest technology closer to you.</li>
            <li>✅ Empowerment – Training and mentoring through Spassion Academy.</li>
            <li>✅ Customer-Centered Service – Because your success is our priority.</li>
          </ul>

          <p className="about-text">
            Whether you’re looking to <strong>buy your next device</strong> or{" "}
            <strong>build your career in tech</strong>, Spassion is here to
            support you every step of the way.
          </p>

          <div className="about-buttons">
            <button className="about-btn"> <a href="/products">🛒 Shop Now </a></button>
            <button className="about-btn"><a href="/academy">🎓 Join the Academy</a></button>
          </div>
        </>
      )}
    </section>
  );
};

export default AboutSection;
