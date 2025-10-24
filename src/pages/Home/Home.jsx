import React from "react";
import Hero from "../../component/Hero/Hero";
import Products from "../../component/Product/ProductCard";
import AcademySlider from "../../component/Academyslider/Academyslide";
import Testimonials from "../../component/Testimonial/Testimonial";
import AboutSection from "../../component/About/AboutSection";
import { Navigate } from "react-router-dom";
// import { isAuthenticated } from "../Authentication/Authentication";

const Home = () => {

  //  if (!isAuthenticated()) {
  //   return <Navigate to="/authentication" replace />;
  // }

  return (
    <>
      <Hero />
      <Products />
      <AcademySlider />
      <Testimonials />
      <AboutSection variant="home" />
    </>
  );
};

export default Home;
