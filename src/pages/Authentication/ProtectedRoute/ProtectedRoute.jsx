// components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../pages/Authentication/Authentication";

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    // If not logged in, redirect to home instead of authentication
    return <Navigate to="/" replace />;
  }

  // If logged in, show the protected page
  return children;
};

export default ProtectedRoute;
    <div className="authentication">
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: "#ffcc00",
                padding: "5px 10px",
                border: "none",
              }}
            >
              Logout
            </button>
          ) : (
            <a
              href="/authentication"
              style={{
                backgroundColor: "#ffcc00",
                padding: "3px 10px",
                textDecoration: "none",
                color: "black",
              }}
            >
              Login
            </a>
          )}
        </div>
            {/* Login/Logout Button */}
              {isAuthenticated ? (
                <button onClick={handleLogout} className="authentication1">
                  Logout
                </button>
              ) : (
                <a
                  href="/authentication"
                  className="authentication1"
                  style={{ textDecoration: "none" }}
                >
                  Login
                </a>
              )}
        