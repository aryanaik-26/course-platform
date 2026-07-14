import React from "react";
import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo Section */}

        <div className="footer-about">

          <div className="footer-logo">

            <img src={logo} alt="SkillSync Logo" />

            <h2>SkillSync</h2>

          </div>

          <p>
            SkillSync connects passionate learners with experienced mentors.
            Learn new skills, teach what you know, and grow together.
          </p>

          <div className="social-icons">

            <a href="#"><FaFacebookF /></a>

            <a href="#"><FaInstagram /></a>

            <a href="#"><FaLinkedinIn /></a>

            <a href="#"><FaGithub /></a>

          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <ul>

            <li><a href="/">Home</a></li>

            <li><a href="/explore">Explore</a></li>

            <li><a href="/dashboard">Dashboard</a></li>

            <li><a href="/requests">Requests</a></li>

            <li><a href="/login">Login</a></li>

          </ul>

        </div>

        {/* Skills */}

        <div className="footer-links">

          <h3>Popular Skills</h3>

          <ul>

            <li>Programming</li>

            <li>Photography</li>

            <li>Graphic Design</li>

            <li>Music</li>

            <li>Cooking</li>

          </ul>

        </div>

        {/* Contact */}

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>

            <FaEnvelope className="icon" />

            support@skillsync.com

          </p>

          <p>

            <FaPhoneAlt className="icon" />

            +91 9876543210

          </p>

          <p>

            <FaMapMarkerAlt className="icon" />

            Mangalore, Karnataka

          </p>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        © 2026 SkillSync. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;