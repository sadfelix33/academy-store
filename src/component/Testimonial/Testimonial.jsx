import React, { useState, useEffect } from "react";
import { FaStar} from 'react-icons/fa';
import "./Testimonial.css";
<img src="/image/WhatsApp_image.jpg" alt="testimonial" />

const Testimonials = () => {
  const reviews = [
    {
      name: "Ismaila Waliyu",
      role: "Web Developer",
      image: "https://via.placeholder.com/80",
      text: "S-Passion helped me reveal my passion for developing websites. i have gained real skills and confidence to build projects, Thanks to S-Passion ❤"
    },
    {
      name: "Najeebah Titilola Abdulrozaq",
      role: "Computer literacy",
      image: "/image/WhatsApp_Image .jpg",
      text: "I attended S-Passion Computer Academy at Taiwo, Ilorin, for computer literacy,and I had a great learning experience. During my time there, I was taught essential computer skills including Microsoft Office packages (like Word, Excel, PowerPoint), internet usage, basic troubleshooting, and an introduction to graphic design tools. The instructors were patient and explained everything clearly, making it easy to understand even as a beginner. I now feel more confident using a computer for both personal and professional tasks. I highly recommend S-Passion computer academy to anyone looking to learn practical computer skills."
    },
    {
      name: "Aisha Bello",
      role: "Data analyst",
      image: "/image/WhatsApp_Image2.jpg",
      text: "I had a great experience during my Data Analysis training at S passion academy. The program was practical, well-structured, and gave me hands-on skills in data handling and interpretation. The instructors supportive and always available to respond to questions during classes and after classes, which made learning easy and engaging. I highly recommend this academy to anyone looking to build a solid foundation on skills such as data analysis, web and graphics design, and other tech related skills.Thanks to Spassion, I landed my first internship. The resources are amazing!"
    },
    {
      name: "Ajayi Virtue",
      role: "Data Analyst",
      image: "https://via.placeholder.com/80",
      text: "I attended S-Passion Computer academy and gained great insights into analysis softwares like SPSS, Excel, Power BI, and many more. Thanks to S-Passion Computers, I am now prepared to take on opportunities as a Data Analyst."
    },
     {
      name: "Hammed Albdumalik Enitan",
      role: "Graphic Designer",
      image: "/image/WhatsApp Image 2025.jpg",
      text: "S-PASSION COMPUTER ACADEMY is one of the best computing academy have ever knew Within just 3 month i can actually Stand on my own design series of flyers ,ID cards , banners e.t.I can actually make use of my photoshops, Corel draws easily.This as been a grate opportunity for me being in S-passion computer academy very fast and learn easily."
    }
  ];
// customer review//
  
  const customerReviews = [
    {
      name: "Wole Adeyemi",
      rating: 5,
      image: "https://via.placeholder.com/80",
      text: "May God continue to increase S-Passion Computers, this computer office has so much provided solution to my company's IT related problems. The office is a solution centre for real and all their gadgets are of high quality. Kudos❤"
    },
    {
      name: "Basit Olamide",
      rating: 5,
      image: "/image/WhatsApp_Image .jpg",
      text: "Every single computer gadgets I have bought have worked fine, not have a cause for regret so far."
    },
    {
      name: "Awoyode John Sunny",
      rating: 5,      
      image: "/image/WhatsApp_Image2.jpg",
      text: "Never seen an amazing Computers dealer and operators like S-Passion Computers. They're second to none. Kudos!"
    },
    {
      name: "Ajayi Virtue",
     rating: 5,
      image: "https://via.placeholder.com/80",
      text: "I attended S-Passion Computer academy and gained great insights into analysis softwares like SPSS, Excel, Power BI, and many more. Thanks to S-Passion Computers, I am now prepared to take on opportunities as a Data Analyst."
    }
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // On desktop → duplicate for infinite loop
  const displayedReviews = isMobile ? reviews : [...reviews, ...reviews];

// Track index
const [currentIndex, setCurrentIndex] = useState(0);

// Number of cards to show depending on screen size
const cardsPerView = isMobile ? 1 : 2;

// Get visible reviews (slice from currentIndex)
const visibleCustomerReviews = customerReviews.slice(
  currentIndex,
  currentIndex + cardsPerView
);

// If we reach the end, wrap around
if (visibleCustomerReviews.length < cardsPerView) {
  visibleCustomerReviews.push(
    ...customerReviews.slice(0, cardsPerView - visibleCustomerReviews.length)
  );
}


  return (
    <section className="testimonials">
      <h2>What Our Student Say</h2>
      <div className="testimonial-wrapper">
        <div className="testimonial-track">
          {displayedReviews.map((review, index) => (
            <div key={index} className="testimonial-card">
              <img src={review.image} alt={review.name} />
              <p className="testimonial-text">"{review.text}"</p>
              <h4>{review.name}</h4>
              <span>{review.role}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Second: customer reviews with dots */}

      <div className="dot-carousel">
        <h2 className="dot-h2">What Our Customers Say</h2>
        <div className="testimonial-flex">
          {visibleCustomerReviews.map((review, idx) => (
            <div key={idx} className="testimonial-card active">
              <img src={review.image} alt={review.name} />
              <p className="testimonial-text">"{review.text}"</p>
              <h4>{review.name}</h4>
                        {review.rating && (
            <div className="stars">
              {Array.from({ length: review.rating }, (_, i) => (
                <span key={i}><FaStar/></span>
              ))}</div>
          )}
              <span>{review.role}</span>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="dots">
          {customerReviews.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Testimonials;
