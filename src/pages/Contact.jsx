// Contact.jsx

import React from "react";
import "./Contact.css";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/akash-mane-bb98a21b7/" className="icon"><FaLinkedin /></a>
        <a href="https://www.instagram.com/akashmane907/" className="icon"><FaInstagram /></a>
        <a href="#" className="icon"><FaTwitter /></a>
      </div>
    </div>
  );
}

export default ContactPage;
