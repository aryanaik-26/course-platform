import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        {/* Left */}

        <div className="footer-about">

          <h2>
            Skill<span>Bridge</span>
          </h2>

          <p>
            A peer-to-peer skill sharing platform where
            passionate learners and mentors connect,
            exchange knowledge, and grow together.
          </p>

          <div className="social-icons">

            <a href="/">
              <FaFacebookF />
            </a>

            <a href="/">
              <FaInstagram />
            </a>

            <a href="/">
              <FaLinkedinIn />
            </a>

            <a href="/">
              <FaGithub />
            </a>

          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/explore">Explore</Link>

          <Link to="/dashboard">Dashboard</Link>

          <Link to="/requests">Requests</Link>

        </div>

        {/* Skills */}

        <div className="footer-links">

          <h3>Popular Skills</h3>

          <Link to="/explore">Web Development</Link>

          <Link to="/explore">UI/UX Design</Link>

          <Link to="/explore">Photography</Link>

          <Link to="/explore">Public Speaking</Link>

        </div>

        {/* Contact */}

        <div className="footer-contact">

          <h3>Contact</h3>

          <div>

            <FaEnvelope />

            <span>support@skillbridge.com</span>

          </div>

          <div>

            <FaPhoneAlt />

            <span>+91 98765 43210</span>

          </div>

          <div>

            <FaMapMarkerAlt />

            <span>Mangalore, Karnataka</span>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 SkillBridge. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;