import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../pages/Authentication/Authentication";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";

const ProtectedLayout = () => {
  if (!isAuthenticated()) {
    return <Navigate to="/authentication" replace />;
  }

  return (
    <>
      {isAuthenticated() && <Navbar />}
      <Outlet /> {/* Protected pages will render here */}
      {isAuthenticated() && <Footer />}
    </>
  );
};

export default ProtectedLayout;
