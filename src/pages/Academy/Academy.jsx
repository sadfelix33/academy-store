import React, { useState } from "react";
import "./Academy.css";
import { useNavigate } from "react-router-dom";
import FAQ from "./FAQ/FAQ";

const courses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    category: "Programming",
    instructor: "Jane Doe",
    image: "/assets/webdev.jpg",
    description: "Learn the basics of HTML, CSS, and JavaScript.",
    duration: "4 weeks",
    price: "₦12,000"
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    category: "Design",
    instructor: "John Smith",
    image: "/assets/uiux.jpg",
    description: "Understand the principles of user interface and experience design.",
    duration: "3 weeks",
    price: "₦12,000"
  },
    {
    id: 3,
    title: "Digital Marketing Essentials",  
    category: "Marketing",
    instructor: "Alice Johnson",
    image: "/assets/digital-marketing.jpg",
    description: "Explore the key concepts of digital marketing and SEO.",
    duration: "3 weeks",
    price: "₦12,000"
    },
    {
    id: 4,
    title: "Introduction to Web Development",
    category: "Programming",
    instructor: "Jane Doe",
    image: "/assets/webdev.jpg",
    description: "Learn the basics of HTML, CSS, and JavaScript.",
    duration: "4 weeks",
    price: "₦12,000"
  },
    {
    id: 5,
    title: "Graphic Design Fundamentals",
    category: "Design",
    instructor: "Emily White",
    image: "/assets/graphic-design.jpg",
    description: "Master the basics of graphic design using Adobe Photoshop.",
    duration: "3 weeks",
    price: "₦12,000"
  },
    {
    id: 6,
    title: "Data Science with Python",
    category: "Data Science",
    instructor: "Michael Brown",
    image: "/assets/data-science.jpg",
    description: "Learn data analysis and visualization techniques using Python.",
    duration: "3 weeks",
    price: "₦12,000"
    },
    {
    id: 7,
    title: "Mobile App Development",
    category: "Programming",
    instructor: "Sarah Green",
    image: "/assets/mobile-app.jpg",
    description: "Build your first mobile app using React Native.",
    duration: "3 weeks",
    price: "₦12,000"
  },
    {
    id: 8,
    title: "Cybersecurity Basics",
    category: "Security",
    instructor: "David Black",
    image: "/assets/cybersecurity.jpg",
    description: "Understand the fundamentals of cybersecurity and data protection.",
    duration: "3 weeks",
    price: "₦12,000"
    },
        
  // Add more courses as needed
];
const faqs = [
  {
    question: "How do I enroll in a course?",
    answer: "Click the 'View Details / Enroll' button on any course and follow the instructions."
  },
  {
    question: "Are the courses self-paced?",
    answer: "Yes, you can learn at your own pace and revisit materials anytime."
  },
  {
    question: "Will I get a certificate?",
    answer: "Yes, you will receive a certificate upon successful completion of a course."
  }
  // Add more FAQs as needed
];
const categories = [...new Set(courses.map(course => course.category))];

const Academy = () => {
    const navigate = useNavigate(); 
  const [search, setSearch] = useState("");

    const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses = courses.filter(
  (course) =>
    (selectedCategory === "All" || course.category === selectedCategory) &&
    (
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.category.toLowerCase().includes(search.toLowerCase()) ||
      course.instructor.toLowerCase().includes(search.toLowerCase())
    )
);

  return (
    <div className="academy-page">

        {/* Hero Section */}
      <section className="academy-hero">
        <div className="hero-content">
          <h1>Welcome to S-Passion Academy</h1>
          <p>
            Unlock your potential with expert-led courses in tech, design, and more.< br /> 
            Learn at your own pace and join a community of passionate learners!
          </p>
          <a href="/academy" className="hero-btn">Browse Courses</a>
        </div>
        <div className="hero-image" style={{
            backgroundColor:'white'
          }}>
          <img src="/image/logo.png" alt="S-passion logo "style={{
            marginTop:'4rem',
          }} />
        </div>
      </section>

    

      {/* {Academy} */}
      <div className="academy-header">
     <h1>Academy</h1>
      <p>Grow your skills with our curated tech courses and tutorials.</p>
      <input
        type="text"
        placeholder="Search courses..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="academy-search"
      /></div>
          {/* Filters */}
      <div className="academy-filters">
  <label>
    Category:{" "}
    <select
      value={selectedCategory}
      onChange={e => setSelectedCategory(e.target.value)}
      className="academy-category-select"
    >
      <option value="All">All</option>
      {categories.map(cat => (
        <option key={cat} value={cat}>{cat}</option>
      ))}
    </select>
  </label> 
</div>
        {/* Course Grid */}
      <div className="academy-grid">
        {filteredCourses.map((course) => (
          <div key={course.id} className="academy-card">
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p>{course.description}</p>
        <div className="duration"> <span><strong>Duration:</strong> {course.duration}</span>
        <span><strong>Price:</strong> {course.price}</span>
        {/* <p><strong>Level:</strong> {course.level}</p> */}
        </div>
            <button className="enroll-btn"
             onClick={() => navigate(`/academy/course/${course.id}`)}>View Details / Enroll</button>
            
          </div>
        ))}
        {filteredCourses.length === 0 && <p>No courses found.</p>}
      </div>
      <FAQ faqs={faqs} />
    </div>
  );
};

export default Academy;