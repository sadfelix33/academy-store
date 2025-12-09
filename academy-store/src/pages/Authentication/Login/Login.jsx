// pages/Authentication/Login/Login.js
import React, { useState } from "react";
import"./Login.css"; // Assuming you have a CSS file for styling
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Get registered users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find matching user
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Save logged-in user
       localStorage.setItem("user", JSON.stringify({ loggedIn: true }));
  window.location.href = "/"; // redirect to home
    } else {
      setError("Invalid email or password ❌");
    } 
  };




  return (
    <div className="auth-page">
    <div className="login-page">
      <div className="login-page-content">
      <h2>Login</h2>
      <p className="sub-text">Welcome back! Please login to continue.</p>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="login-text">Forget password</p>
        <button type="submit">Login</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      <p className="register-text">
        Don't have an account? <a href="/authentication/register">Register</a></p>
      </div>
    </div>
    </div>
    
  );
};

export default Login; 
