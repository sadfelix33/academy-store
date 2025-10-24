// pages/Authentication/Authentication.js
import React, { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";
import "./Authentication.css";

// Authentication helper
export const isAuthenticated = () => {
  return localStorage.getItem("user") ? true : false;
};

const Authentication = () => {
  const navigate = useNavigate();
  const auth = isAuthenticated();

  // Handle back button (when NOT authenticated → go to homepage)
  useEffect(() => {
    if (!auth) {
      const handleBack = () => {
        navigate("/", { replace: true });
      };

      window.history.pushState(null, "", window.location.href);
      window.addEventListener("popstate", handleBack);

      return () => {
        window.removeEventListener("popstate", handleBack);
      };
    }
  }, [auth, navigate]);

  // Redirect if already authenticated
  if (auth) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="auth-container">
      <Routes>
        {/* Default is Login */}
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default Authentication;
