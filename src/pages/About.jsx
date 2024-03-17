import React from 'react';
import './About.css'; // Import your CSS file

function About() {
  return (
    <div className="about-us">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Welcome to our company. Learn more about who we are and what we do.</p>
      </div>
      <div className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec est sed felis dignissim viverra.</p>
        </div>
        <div className="about-section">
          <h2>Our Team</h2>
          <p>Meet our talented team of professionals dedicated to providing excellent service.</p>
        </div>
        <div className="about-section">
          <h2>Our Values</h2>
          <p>We uphold integrity, innovation, and customer satisfaction as our core values.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
