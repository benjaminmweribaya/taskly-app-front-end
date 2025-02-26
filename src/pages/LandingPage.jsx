import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="hero">
        <img src="/images/hero.jpg" alt="Hero" className="hero-image" />
        <h1>Streamline your tasks with Taskly today.</h1>
        <button>Get Started</button>
      </header>

      <section className="features">
        <h2>Discover Taskly’s Powerful Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <img src="/images/feature1.png" alt="Feature 1" />
            <h3>Manage Tasks Efficiently</h3>
            <p>Organize tasks seamlessly with our intuitive UI.</p>
          </div>
          <div className="feature-item">
            <img src="/images/feature2.png" alt="Feature 2" />
            <h3>Collaboration Made Simple</h3>
            <p>Work with your team in real-time and boost productivity.</p>
          </div>
        </div>
      </section>

      <section className="team-potential">
        <h2>Unlock Your Team’s Potential with Taskly</h2>
        <img src="/images/team.jpg" alt="Team working" className="team-image" />
        <p>Empower your team to work smarter and accomplish goals faster.</p>
      </section>

      <section className="task-management">
        <h2>Effortless Task Management</h2>
        <div className="task-list">
          <div className="task-item">
            <img src="/images/task1.png" alt="Task 1" />
            Easy to Use Interface
          </div>
          <div className="task-item">
            <img src="/images/task2.png" alt="Task 2" />
            Smart Scheduling
          </div>
          <div className="task-item">
            <img src="/images/task3.png" alt="Task 3" />
            Automated Reminders
          </div>
        </div>
      </section>

      <section className="testimonial">
        <blockquote>
          <img src="/images/testimonial.jpg" alt="Testimonial" className="testimonial-image" />
          “Taskly has changed the way our team collaborates. Our productivity has skyrocketed!”
        </blockquote>
      </section>

      <footer className="footer">
        <p>Start your free trial today</p>
        <button>Sign Up</button>
      </footer>
    </div>
  );
};

export default LandingPage;
