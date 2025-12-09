import React, { useState } from "react";
import { useNavigate } from "react-router-dom";   // ⬅️ Import navigate hook
import "./Register.css";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  //  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();   // ⬅️ Initialize navigate

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match ❌");
      return;
    }

    // Save new user in localStorage (pretend registration)
    const newUser = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    // Save user into a users list in localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // ✅ Redirect to login page after registration
    navigate("/authentication");
  };

  return (
    <div className="auth-page">
      <div className="register-page">
        <div className="register-page-content">
          <h2>Register</h2>
          <p className="sub-text">Welcome to Spassion, signup to get full access</p>
          <form className="auth-form" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
            <button type="submit" className="auth-btn">Register</button>
            <p className="register-text">
              Already have an account? <a href="/authentication">sign in</a>
            </p>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
