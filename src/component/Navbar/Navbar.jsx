import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { FaStore } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { HiOutlineUser, HiOutlineMenu, HiX } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown whenever route changes
  useEffect(() => {
    setShowProfileMenu(false);
  }, [location]);

    const isAcademy = location.pathname.startsWith("/academy");

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img
          src={isAcademy ? "/image/logo.png":"/image/IMG-20250901-WA0103.png"}
          alt="logo"
           className={isAcademy ? "academy-logo" : "normal-logo"}
          onClick={() => navigate("/")}
        />
      </div>
      <div className="spassion">
    <div className="spassion-name">
  <h2 className="sp-text1">S-PASSION</h2>
  <span className="sp-text2">COMPUTER LTD.</span>
  <p className="sp-text3">...giving the best with a touch of class.</p>
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
      </ul>
      </div>

      {/* Icons */}
      <div className="nav-icons">
        {/* Store Icon */}
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

        {/* User Icon */}
        <div className="icon-container" ref={dropdownRef}>
          <HiOutlineUser
            color="#002741"
            size={24}
            className="icon"
            style={{ cursor: "pointer"}}
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          />
          <span className="tooltip">Account</span>

          {/* Example dropdown (optional, you can delete it too if not needed) */}
          {showProfileMenu && (
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
                <span>Guest</span>
              </div>
              <button onClick={() => navigate("/profile")}>Profile</button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX /> : <HiOutlineMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
