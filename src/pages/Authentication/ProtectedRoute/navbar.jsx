import React, { useState, useEffect, useContext, useRef } from "react";
import "./Navbar.css";
import { FaStore } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { HiOutlineUser, HiOutlineMenu, HiX } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { AuthContext } from "../../pages/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const dropdownRef = useRef(null);

  

  // Close dropdown whenever route changes
  useEffect(() => {
    setShowProfileMenu(false);
  }, [location]);

const handleLogout = () => {
  logout(); // context logout
  localStorage.removeItem("isAuthenticated");
  localStorage.removeItem("user"); // remove user too
  navigate("/", { replace: true });
    };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src="/image/logo.png"  onClick={() => {
            navigate("/")}}/>
      </div>

      {/* Menu Items */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
              setIsOpen(false);
            }}
            className="nav-link"
          >
            Home
          </a>
        </li>
        <li>
          <a href="/products">Shop</a>
        </li>
        <li>
          <a href="/academy">Academy</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
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
      </ul>

      {/* Icons */}
      <div className="nav-icons">
        <div
          className="icon-container"
          onClick={() => {
            navigate("/products");
            setIsOpen(false);
          }}
          style={{ cursor: "pointer" }}
        >
          <FaStore size={24} color="#002741" />
          <span className="tooltip">Store</span>
        </div>

        {/* User/Profile Icon */}
        <div className="icon-container" ref={dropdownRef}>
          <HiOutlineUser color="#002741" size={24}
            className="icon"
            style={{ cursor: "pointer" }}
            onClick={() => {
              if (isAuthenticated) {
                setShowProfileMenu(!showProfileMenu);
              } else {
                navigate("/authentication");
                setIsOpen(false);
              }
            }}
          />
          <span className="tooltip">Account</span>

          {/* Dropdown menu only when logged in */}
          {isAuthenticated && showProfileMenu && (
            <div className="profile-dropdown">
              <div
                className="profile-head"
                style={{
                  display: "flex",
                  marginBottom: 24,
                  alignItems: "center",
                  gap: "8px",
                  marginLeft: "12px",
                  marginTop: "12px",
                }}
              >
                <AiOutlineUser size={24} color="black" />
                <span>
                  {JSON.parse(localStorage.getItem("user"))?.username || "User"}
                </span>
              </div>

              <button onClick={() => navigate("/profile")}>Profile</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
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

      {/* Mobile Menu Toggle */}
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX /> : <HiOutlineMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
