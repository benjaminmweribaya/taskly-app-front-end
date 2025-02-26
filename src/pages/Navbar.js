import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/images/logo.png" alt="Logo" className="logo" />
        <span className="logo-text">logo</span>
      </div>
      <ul className="nav-links">
        <li><a href="/">Homepage</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/services">Services</a></li>
      </ul>
      <div className="navbar-right">
        <button className="join-btn">Join</button>
        <button className="start-btn">Start</button>
      </div>
    </nav>
  );
};

export default Navbar;
