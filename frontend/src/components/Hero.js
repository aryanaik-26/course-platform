import React from "react";
import "./Hero.css";

import hero from "../assets/hero-image.png";

import {
  FaArrowRight,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBookOpen,
  FaStar,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      {/* Floating Background Blobs */}

      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      <div className="hero-container">

        {/* LEFT SIDE */}

        <div className="hero-content">

          <span className="hero-badge">
            🚀 India's Growing Skill Sharing Community
          </span>

          <h1>
            Learn New Skills.
            <br />
            <span>Teach What You Love.</span>
          </h1>

          <p>
            SkillSync connects passionate learners with experienced mentors.
            Whether you want to master programming, photography, music,
            cooking, fitness or AI, find the perfect mentor or become one.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Find a Mentor
              <FaArrowRight />
            </button>

            <button className="secondary-btn">
              Become a Mentor
            </button>

          </div>

          {/* Statistics */}

          <div className="hero-stats">

            <div className="stat-card">

              <FaUserGraduate className="stat-icon" />

              <h2>1200+</h2>

              <p>Learners</p>

            </div>

            <div className="stat-card">

              <FaChalkboardTeacher className="stat-icon" />

              <h2>450+</h2>

              <p>Mentors</p>

            </div>

            <div className="stat-card">

              <FaBookOpen className="stat-icon" />

              <h2>80+</h2>

              <p>Skills</p>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="hero-image">

          <img src={hero} alt="Hero Illustration" />

          {/* Floating Cards */}

          <div className="floating-card mentor-card">

            <h4>⭐ Top Mentor</h4>

            <p>React Development</p>

            <small>4.9 Rating</small>

          </div>

          <div className="floating-card student-card">

            <FaStar />

            <span>1000+ Happy Learners</span>

          </div>

        </div>

      </div>

      {/* Bottom Wave */}

      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,160L60,176C120,192,240,224,360,224C480,224,600,192,720,176C840,160,960,160,1080,176C1200,192,1320,224,1380,240L1440,256L1440,320L0,320Z"
        ></path>
      </svg>

    </section>
  );
}

export default Hero;