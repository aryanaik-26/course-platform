import React, { useEffect, useState } from "react";
import "./Hero.css";

import hero from "../assets/hero-image.png";

import {
  FaArrowRight,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBookOpen,
  FaStar,
} from "react-icons/fa";

import { getHomeData } from "../services/userService";

function Hero() {
  const [stats, setStats] = useState({
    learners: 0,
    mentors: 0,
    skills: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const data = await getHomeData();
      setStats(data.stats);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <section className="hero">

      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      <div className="hero-container">

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
            Learn, teach and grow together.
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

          <div className="hero-stats">

            <div className="stat-card">
              <FaUserGraduate className="stat-icon" />
              <h2>{stats.learners}+</h2>
              <p>Learners</p>
            </div>

            <div className="stat-card">
              <FaChalkboardTeacher className="stat-icon" />
              <h2>{stats.mentors}+</h2>
              <p>Mentors</p>
            </div>

            <div className="stat-card">
              <FaBookOpen className="stat-icon" />
              <h2>{stats.skills}+</h2>
              <p>Skills</p>
            </div>

          </div>

        </div>

        <div className="hero-image">

          <img src={hero} alt="Hero" />

          <div className="floating-card mentor-card">
            <h4>⭐ Top Mentor</h4>
            <p>Join SkillSync Today</p>
            <small>Grow Together</small>
          </div>

          <div className="floating-card student-card">
            <FaStar />
            <span>{stats.learners}+ Active Learners</span>
          </div>

        </div>

      </div>

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