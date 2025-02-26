import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>Taskly support team is here for you 24/7. "Get in Touch" with us below.</p>
      </header>

      <section className="contact-form">
        <form>
          <div className="form-group">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Subject" required />
            <input type="text" placeholder="Phone Number" required />
          </div>
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

      <section className="map">
        <img src="/images/map.png" alt="Map" />
      </section>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">How do I contact support?</div>
        <div className="faq-item">What are the support hours?</div>
        <div className="faq-item">Where is Taskly located?</div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Taskly. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
