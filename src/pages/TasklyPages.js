import React from "react";
import "./AboutUs.css";
import "./PrivacyPolicy.css";
import "./Services.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Taskly</h1>
      <p className="about-text">
        Taskly is a comprehensive task management system designed to streamline and optimize organizational task tracking, assignment, and completion.
      </p>
      <p className="about-text">
        Many existing systems lack user-friendly interfaces, robust features, and efficient communication channels, leading to decreased productivity and increased confusion among team members.
      </p>
      <p className="about-text">
        Taskly addresses these issues by providing an intuitive, feature-rich platform that enhances workflow efficiency, improves collaboration, and boosts overall productivity.
      </p>
    </div>
  );
};

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-text">We prioritize your privacy and data security.</p>
      <ul className="privacy-list">
        <li><strong>Information We Collect:</strong> User data, automatically collected data.</li>
        <li><strong>How We Use Your Information:</strong> Task management, notifications, security.</li>
        <li><strong>How We Share Your Information:</strong> Third-party services for analytics and payments.</li>
        <li><strong>Security Measures:</strong> Encryption, access control, fraud prevention.</li>
        <li><strong>User Rights:</strong> Update, delete, opt-out of communications.</li>
      </ul>
      <button className="privacy-button">Accept Policy</button>
    </div>
  );
};

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="services-grid">
        <div className="service-card">
          <h2 className="service-title">Task Assignment</h2>
          <p className="service-text">Assign tasks easily and track their progress.</p>
        </div>
        <div className="service-card">
          <h2 className="service-title">Collaboration</h2>
          <p className="service-text">Communicate effectively with team members.</p>
        </div>
        <div className="service-card">
          <h2 className="service-title">Real-time Notifications</h2>
          <p className="service-text">Stay updated with instant task notifications.</p>
        </div>
        <div className="service-card">
          <h2 className="service-title">Analytics & Insights</h2>
          <p className="service-text">Track performance with detailed reports.</p>
        </div>
        <div className="service-card">
          <h2 className="service-title">Integration</h2>
          <p className="service-text">Seamlessly integrate with other productivity tools.</p>
        </div>
      </div>
    </div>
  );
};

export { AboutUs, PrivacyPolicy, Services };
