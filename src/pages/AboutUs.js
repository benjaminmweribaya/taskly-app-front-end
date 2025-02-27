// AboutUs.js
import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1 className="title">About Taskly</h1>
      <p className="description">
        Taskly is a comprehensive task management system designed to streamline and optimize organizational task tracking, assignment, and completion.
      </p>
      <p className="description">
        Many existing systems lack user-friendly interfaces, robust features, and efficient communication channels, leading to decreased productivity and increased confusion among team members.
      </p>
      <p className="description">
        Taskly addresses these issues by providing an intuitive, feature-rich platform that enhances workflow efficiency, improves collaboration, and boosts overall productivity.
      </p>
    </div>
  );
};

export default AboutUs;