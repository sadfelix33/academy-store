import React, { useState, useEffect } from "react";
import "./Academyslider.css";

const slides = [
  {
    title: "Web Development",
    tagline: "Build websites that impress",
    image: "/assets/premium-image.avif",
    cta: "Learn More",
  },
  {
    title: "Graphic Design",
    tagline: "Create stunning visuals",
    image: "/assets/graphics-image.jpg",
    cta: "Start Designing",
  },
  {
    title: "Cybersecurity",
    tagline: "Defend against digital threats",
    image: "/assets/premium_photo.avif",
    cta: "Secure Your Future",
  },
  {
    title: "Kids Coding Camp",
    tagline: "Summer fun with tech",
    image: "/assets/kids-image.jpg",
    cta: "Join Now",
  },
];

const AcademySlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="academy-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay">
            <h2>{slide.title}</h2>
            <p>{slide.tagline}</p>
            <a href="/academy" className="cta-btn">{slide.cta}</a>
          </div>
        </div>
      ))}

      <button className="arrow left" onClick={prevSlide}>&#10094;</button>
      <button className="arrow right" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default AcademySlider;
