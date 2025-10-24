import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import FAQ from "../FAQ/FAQ";
import "./CourseDetail.css";

// Dummy data (replace with your real course data or fetch from API)
const courses = [
  {
    id: "1",
    title: "Introduction to Web Development",
    category: "Programming",
    instructor: "Jane Doe",
    image: "/assets/webdev.jpg",
    description: "Learn the basics of HTML, CSS, and JavaScript.",
    duration: "4 weeks",
    price: "₦15,000",
    syllabus: [
      "HTML & CSS Basics",
      "JavaScript Fundamentals",
      "Responsive Design",
      "Project: Build a Website"
    ],
    requirements: [
    "Basic computer skills",
    "Internet access"
  ],
  outcomes: [
    "Build simple web pages",
    "Understand HTML, CSS, and JavaScript",
    "Create responsive layouts"
  ],
  reviews: [
    { name: "Aisha", comment: "Great intro course, easy to follow!" },
    { name: "Tunde", comment: "Loved the hands-on project." }
  ],
   syllabusPdf: "/assets/syllabus/webdev.pdf",
  previewVideo: "/assets/previews/webdev-preview.mp4",
    startDate: "2024-01-15",
    enrollmentDeadline: "2024-01-10",
  
  }, 
  
  {
    id: "2",
    title: "UI/UX Design Fundamentals",
    category: "Design",
    instructor: "John Smith",
    image: "/assets/uiux.jpg",
    description: "Understand the principles of user interface and experience design.",
    duration: "3 weeks",
    price: "₦12,000",
  
    syllabus: [
      "Introduction to Cybersecurity",
      "Network Security Basics",
      "Data Protection Techniques",
      "Project: Secure a System"
    ],
    requirements: [
    "Basic computer skills",
    "Internet access"
  ],
  outcomes: [
    "Build simple web pages",
    "Understand HTML, CSS, and JavaScript",
    "Create responsive layouts"
  ],
  reviews: [
    { name: "Aisha", comment: "Great intro course, easy to follow!" },
    { name: "Tunde", comment: "Loved the hands-on project." }
  ],
   syllabusPdf: "/assets/syllabus/webdev.pdf",
    previewVideo: "/assets/previews/webdev-preview.mp4",
     startDate: "2024-01-15",
    enrollmentDeadline: "2024-01-10",
},
     
    {
    id: "3",
    title: "Digital Marketing Essentials",  
    category: "Marketing",
    instructor: "Alice Johnson",
    image: "/assets/digital-marketing.jpg",
    description: "Explore the key concepts of digital marketing and SEO.",
    duration: "3 weeks",
    price: "₦12,000",
    syllabus: [
      "SEO Basics",
      "Content Marketing Strategies",
      "Social Media Marketing",
      "Project: Create a Marketing Plan"
    ],
    requirements: [
    "Basic computer skills",
    "Internet access"
  ],
  outcomes: [
    "Build simple web pages",
    "Understand HTML, CSS, and JavaScript",
    "Create responsive layouts"
  ],
  reviews: [
    { name: "Aisha", comment: "Great intro course, easy to follow!" },
    { name: "Tunde", comment: "Loved the hands-on project." }
  ],
    syllabusPdf: "/assets/syllabus/webdev.pdf",
    previewVideo: "/assets/previews/webdev-preview.mp4",
     startDate: "2024-01-15",
    enrollmentDeadline: "2024-01-10",
    },
    
    {
    id: "4",
    title: "Introduction to Web Development",
    category: "Programming",
    instructor: "Jane Doe",
    image: "/assets/webdev.jpg",
    description: "Learn the basics of HTML, CSS, and JavaScript.",
    duration: "4 weeks",
    price: "₦12,000",
      syllabus: [
      "Introduction to Cybersecurity",
      "Network Security Basics",
      "Data Protection Techniques",
      "Project: Secure a System"
    ],
    requirements: [
    "Basic computer skills",
    "Internet access"
  ],
  outcomes: [
    "Build simple web pages",
    "Understand HTML, CSS, and JavaScript",
    "Create responsive layouts"
  ],
  reviews: [
    { name: "Aisha", comment: "Great intro course, easy to follow!" },
    { name: "Tunde", comment: "Loved the hands-on project." }
  ],
    syllabusPdf: "/assets/syllabus/webdev.pdf",
    previewVideo: "/assets/previews/webdev-preview.mp4",
     startDate: "2024-01-15",
    enrollmentDeadline: "2024-01-10",
  },
    {
    id: "5",
    title: "Graphic Design Fundamentals",
    category: "Design",
    instructor: "Emily White",
    image: "/assets/graphic-design.jpg",
    description: "Master the basics of graphic design using Adobe Photoshop.",
    duration: "3 weeks",
    price: "₦12,000",
      syllabus: [
      "Introduction to Cybersecurity",
      "Network Security Basics",
      "Data Protection Techniques",
      "Project: Secure a System"
    ],
    requirements: [
    "Basic computer skills",
    "Internet access"
  ],
  outcomes: [
    "Build simple web pages",
    "Understand HTML, CSS, and JavaScript",
    "Create responsive layouts"
  ],
  reviews: [
    { name: "Aisha", comment: "Great intro course, easy to follow!" },
    { name: "Tunde", comment: "Loved the hands-on project." }
  ],
    syllabusPdf: "/assets/syllabus/webdev.pdf",
    previewVideo: "/assets/previews/webdev-preview.mp4",
     startDate: "2024-01-15",
    enrollmentDeadline: "2024-01-10",
  },
  
    {
    id: "6",
    title: "Data Science with Python",
    category: "Data Science",
    instructor: "Michael Brown",
    image: "/assets/data-science.jpg",
    description: "Learn data analysis and visualization techniques using Python.",
    duration: "3 weeks",
    price: "₦12,000",
    syllabus: [
      "Python for Data Science",
      "Data Analysis with Pandas",
      "Data Visualization with Matplotlib",
      "Project: Analyze a Dataset"
    ],
    requirements: [
    "Basic computer skills",
    "Internet access"
   ],
   outcomes: [
    "Build simple web pages",
    "Understand HTML, CSS, and JavaScript",
    "Create responsive layouts"
   ],
   reviews: [
    { name: "Aisha", comment: "Great intro course, easy to follow!" },
    { name: "Tunde", comment: "Loved the hands-on project." },
    ] ,
    syllabusPdf: "/assets/syllabus/webdev.pdf",
  previewVideo: "/assets/previews/webdev-preview.mp4",
   startDate: "2024-01-15",
    enrollmentDeadline: "2024-01-10",
    },

    {
    id: "7",
    title: "Mobile App Development",
    category: "Programming",
    instructor: "Sarah Green",
    image: "/assets/mobile-app.jpg",
    description: "Build your first mobile app using React Native.",
    duration: "3 weeks",
    price: "₦12,000",
    syllabus: [
      "React Native Basics",
      "Building User Interfaces",
      "State Management",
      "Project: Create a Mobile App"
    ],
    requirements: [
    "Basic computer skills",
    "Internet access"
  ],
  outcomes: [
    "Build simple web pages",
    "Understand HTML, CSS, and JavaScript",
    "Create responsive layouts"
  ],
  reviews: [
    { name: "Aisha", comment: "Great intro course, easy to follow!" },
    { name: "Tunde", comment: "Loved the hands-on project." }
  ],
   syllabusPdf: "/assets/syllabus/webdev.pdf",
  previewVideo: "/assets/previews/webdev-preview.mp4",
   startDate: "2024-01-15",
    enrollmentDeadline: "2024-01-10",
  },
   {
    id: "8",
    title: "Cybersecurity Basics",
    category: "Security",
    instructor: "David Black",
    image: "/assets/cybersecurity.jpg",
    description: "Understand the fundamentals of cybersecurity and data protection.",
    duration: "3 weeks",
    price: "₦12,000",
    syllabus: [
      "Introduction to Cybersecurity",
      "Network Security Basics",
      "Data Protection Techniques",
      "Project: Secure a System"
    ],
    requirements: [
    "Basic computer skills",
    "Internet access"
  ],
  outcomes: [
    "Build simple web pages",
    "Understand HTML, CSS, and JavaScript",
    "Create responsive layouts"
  ],
  reviews: [
    { name: "Aisha", comment: "Great intro course, easy to follow!" },
    { name: "Tunde", comment: "Loved the hands-on project." }
  ],
 syllabusPdf: "/assets/syllabus/webdev.pdf",
  previewVideo: "/assets/previews/webdev-preview.mp4",
   startDate: "2024-01-15",
    enrollmentDeadline: "2024-01-10",
    // ...add more courses as needed
    },
  ]; 

//   fAQ section
    const faqs = [
    {
        question: "How do I enroll in this course?",
        answer: "Click the 'Enroll Now' button and follow the instructions."
    },
    {
        question: "Do I need prior experience?",
        answer: "No prior experience is required unless stated in the requirements."
    },
    {
        question: "Will I get a certificate?",
        answer: "Yes, you will receive a certificate upon successful completion."
    }
    // ...add more as needed
    ];
const CourseDetail = () => {

  const { id } = useParams();

  const navigate = useNavigate();
  // Find the course by ID
  const course = courses.find(c => c.id === id);
 

 const [showEnroll, setShowEnroll] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!course) {
    return <div style={{ padding: 40 }}>Course not found.</div>;
  }
  

  return (
    <div className="course-detail-page" style={{ padding: 40, maxWidth: 700, margin: "0 " }}>
     <div> <button onClick={() => navigate(-1)} style={{ marginBottom: 20 }}>← Back</button>
      <img src={course.image} alt={course.title} style={{ width: "100%", borderRadius: 10, marginBottom: 20

// width: 48, height: 48, borderRadius: "50%", marginRight: 12

       }} />
      <h1>{course.title}</h1>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Category:</strong> {course.category}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Price:</strong> {course.price}</p>
      <p style={{ margin: "18px 0" ,fontSize:"1.2rem",}}>{course.description}</p>
      <h3>Syllabus</h3>
      <ul>
        {course.syllabus && course.syllabus.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <button className="enroll-btn" style={{ marginTop: 24 }}
      onClick={() => setShowEnroll(true)}
      >Enroll Now</button>
      </div>

        {/* Example Instructor Section */}

    <div style={{ display: "flex", alignItems: "center", margin: "18px 0" }}>
    <img src="/assets/instructors/jane-doe.jpg" alt={course.instructor} style={{ width: 48, height: 48, borderRadius: "50%", marginRight: 12 }} />
    <div>
        <strong>{course.instructor}</strong>
        <p style={{ margin: 0, fontSize: "0.95em", color: "#555" }}>Senior Web Developer, 10+ years experience</p>
    </div>
    </div>

        {/* requirements */}
    {course.requirements && (
  <>
    <h4>Requirements</h4>
    <ul>
      {course.requirements.map((req, idx) => <li key={idx}>{req}</li>)}
    </ul>
  </>
     )}

     {/* outcome */}
    {course.outcomes && (
      <>
        <h4 style={{ marginTop: 12}}>What You'll Learn</h4>
        <ul>
          {course.outcomes.map((out, idx) => <li key={idx}>{out}</li>)}
        </ul>
      </>
    )}
   {/* testimonial */}
    {course.reviews && (
      <>
        <h4 style={{ marginTop: 12}}>Student Reviews</h4>
        {course.reviews.map((review, idx) => (
          <div key={idx} style={{ marginBottom: 12 ,marginTop: 12}}>
            <strong>{review.name}</strong>: <span>{review.comment}</span>
          </div>
        ))}
      </>

    )}

    
    
    {/* Course Preview Video */}
    {course.previewVideo && (
      <div style={{ margin: "24px 0" }}>
        <h4>Course Preview</h4>
        <video controls width="100%">
          <source src={course.previewVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    )}

    {/* Download Syllabus PDF */}
    {course.syllabusPdf && (
      <a href={course.syllabusPdf} download className="enroll-btn" style={{ marginTop: 10,marginBottom: 20 }}>
        Download Syllabus
      </a>
    )}

    {/* Start Date and Enrollment Deadline */}
    {course.startDate && (
      <p style={{ marginTop:20,}}><strong>Start Date:</strong> {course.startDate}</p>
    )}
    {course.enrollmentDeadline && (
      <p><strong>Enrollment Deadline:</strong> {course.enrollmentDeadline}</p>
    )}

    {/* Related Courses */}
    <h4 style={{ marginTop:12}}>Related Courses</h4>
<div style={{ display: "flex", gap: 16,marginTop: 22, }}>
  {courses.filter(c => c.category === course.category && c.id !== course.id).slice(0, 2).map(rc => (
    <div key={rc.id} style={{ width: 120 }}>
      <img src={rc.image} alt={rc.title} style={{ width: "100%", borderRadius: 6 }} />
      <div style={{ fontSize: "0.95em" }}>{rc.title}</div>
    </div>
  ))}
</div>
    {/* FAQ Section */}
    <FAQ faqs={faqs} /> 
    

     {/* Enrollment Form */}
    {showEnroll && (
  <div className="enroll-modal-overlay">
    <div className="enroll-modal">
      <button
        className="close-modal"
        onClick={() => {
          setShowEnroll(false);
          setSubmitted(false);
        }}
      >
        ×
      </button>
      {!submitted ? (
        <>
          <h2>Enroll in {course.title}</h2>
          <form
            onSubmit={e => {
              e.preventDefault();
              setSubmitted(true);
              // Here you could send the form data to your backend
              
            }}
            action="https://formspree.io/f/mvgwrqyw"
              method="POST"
          >
            <h2 style={{ color:"white", backgroundColor:"#002147",  
            border: "0",
            padding:" 8px 18px",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px",
            fontWeight: "bold"}}>Personal Information</h2>
            <label type="email" > Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              required
              name="email"/>
            <label type="email"> Email</label>
            <input
            name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              required
            />
            <label>Phone Number</label>
             <input
              type="phone number"
              placeholder="Your Phone.No"
               required
               name="message"
            />
            <label type="address"> Full Home Address</label>
             <input
              type="address"
              placeholder="Your Home Address"
               required
                name="message"
            />
            <div className=" gender" style={{
              marginBottom:"40px"
            }}>
            <label htmlFor="gender"
            style={{
              fontWeight:"bold"
            }}> Gender</label>

            <div className=" checkbox">

           <div className="input-label">
             <label htmlFor="female">Female</label>
            <input  className="checkboxes"type="checkbox" name="female" id="" />
            </div>

            <div className="input-label">
              <label htmlFor="gender"> Male</label>
        <input   className="checkboxes"type="checkbox" name="male" id="" />
            </div>
            
            </div>
            </div>

            <div className="Dob">
              <label htmlFor="D-O-B"> Date of birth :</label>
              <input type="date" name="date" />
              </div>
            
            <section>
             <h2 style={{ color:"white", backgroundColor:"#002147",  
            border: "0",
            padding:" 8px 18px",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px",
            fontWeight: "bold",
            fontSize:"20px"}}>Parent/Guardians Information</h2>

             <label type="email" style={{
              fontWeight:"bold",
              fontSize:"15px"
            }}> Parents/Guardians name</label>
            <input
              type="text"
              placeholder="Mr/Mrs/Miss"
              name="message"
              required
            />
            <label>Phone Number</label>
            <input
              type="phone number"
              placeholder="Your Phone.No"
              required
              name="phone number"
            />
            <label type="email"> Full Home Address</label>
             <input
              type="address"
              placeholder="Your Home Address"
              required
              name="email"
            />
            <label htmlFor="relationship">Relationship</label>
            <input type="text"  name="message" />
            </section>

            <button type="submit" className="enroll-btn" style={{ width: "100%" }}>
              Submit
            </button>
          </form>
        </>
      ) : (
        <div style={{ textAlign: "center", padding: 20 }}>
          <h3>Thank you for enrolling!</h3>
          <p>We’ll contact you soon with more details.</p>
        </div>
      )}
    </div>
  </div>
)}


    </div>

    
  );
};

export default CourseDetail;