// Login.js
import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <h1 className="title">Login to Taskly</h1>
      <form className="login-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;