// Services.js
import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="title">Our Services</h1>
      <div className="services-grid">
        <div className="service-card">
          <h2>Task Assignment</h2>
          <p>Assign tasks easily and track their progress.</p>
        </div>
        <div className="service-card">
          <h2>Collaboration</h2>
          <p>Communicate effectively with team members.</p>
        </div>
        <div className="service-card">
          <h2>Real-time Notifications</h2>
          <p>Stay updated with instant task notifications.</p>
        </div>
        <div className="service-card">
          <h2>Analytics & Insights</h2>
          <p>Track performance with detailed reports.</p>
        </div>
        <div className="service-card">
          <h2>Integration</h2>
          <p>Seamlessly integrate with other productivity tools.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;