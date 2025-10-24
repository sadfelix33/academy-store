import React, { useState, useEffect } from "react";
import "./Hero.css";


const Hero = () => {
 const slides = [
  "/image/photo-67.avif",
  "/image/premium_photo-2.avif",
  "/image/premium_photo-3.avif"
];
  const [current, setCurrent] = useState(0);

  // auto-change every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${slides[current]})` }}
    >
      <div className="overlay"></div>

      <div className="hero-text">
        <h1>
          Welcome to <span>S-Passion</span>
        </h1>
        <h2>Empowering your learning journeys & Tech Sales</h2>
        <p>Your one-stop hub for learning & tech accessories</p>
        <div className="hero-buttons">
          <a href="/products" className="btn shop-btn">Shop Now</a>
          <a href="/academy" className="btn academy-btn">Join Academy</a>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="hero-dots">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === current ? "active" : ""}`}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
