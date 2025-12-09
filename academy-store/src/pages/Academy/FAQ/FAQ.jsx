import React, { useState } from "react";
import './FAQ.css'; 
import { FaChevronDown } from "react-icons/fa";

const FAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="faq-section">
      <h3>Frequently Asked Questions</h3>
      {faqs.map((faq, idx) => (
        <div key={idx} className="faq-item">
          <div
            className="faq-question"
            onClick={() => toggleFAQ(idx)}
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              margin: "12px 0 4px 0",
              color: "#002147"
            }}
          >
            {faq.question} <FaChevronDown  
  className={`arrow-up ${openIndex === idx ? "rotate" : ""}`}
/>
          </div>
          {openIndex === idx && (
            <div className="faq-answer" style={{ marginBottom: 10, color: "#333" }}>
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;