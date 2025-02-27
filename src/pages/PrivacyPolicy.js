// PrivacyPolicy.js
import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="policy-container">
      <h1 className="title">Privacy Policy</h1>
      <p className="intro">We prioritize your privacy and data security.</p>
      <ul className="policy-list">
        <li><strong>Information We Collect:</strong> User data, automatically collected data.</li>
        <li><strong>How We Use Your Information:</strong> Task management, notifications, security.</li>
        <li><strong>How We Share Your Information:</strong> Third-party services for analytics and payments.</li>
        <li><strong>Security Measures:</strong> Encryption, access control, fraud prevention.</li>
        <li><strong>User Rights:</strong> Update, delete, opt-out of communications.</li>
      </ul>
      <button className="accept-button">Accept Policy</button>
    </div>
  );
};

export default PrivacyPolicy;