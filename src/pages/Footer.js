import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-subscribe">
        <p>Join us to get the latest updates on upcoming events.</p>
        <div className="subscribe-box">
          <input type="email" placeholder="Email address" />
          <button>Subscribe</button>
        </div>
        <small>By signing up you agree to our privacy policies.</small>
      </div>
      <div className="footer-links">
        <div>
          <h4>Navigate</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>
        <div>
          <h4>Official</h4>
          <ul>
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/accessibility">Accessibility</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/terms">Terms</a></li>
            <li><a href="/contacts">Contacts</a></li>
          </ul>
        </div>
        <div>
          <h4>Social</h4>
          <ul>
            <li>📸 taskly</li>
            <li>🐦 taskly</li>
            <li>📧 info.taskly@gmail.com</li>
            <li>📞 +254700754234</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
