import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPlayCircle } from "react-icons/fa";

import heroImage from "../assets/hero-image.png";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-shape shape1"></div>
      <div className="hero-shape shape2"></div>

      <div className="container hero-container">

        <div className="hero-left">

          <span className="hero-tag">
            🚀 India's Next Skill Sharing Community
          </span>

          <h1>
            Teach What You Know.
            <br />
            Learn What You Need.
          </h1>

          <p>
            Connect with passionate learners and mentors.
            Exchange skills, build meaningful connections,
            and grow together through real people—not pre-recorded courses.
          </p>

          <div className="hero-buttons">

            <Link to="/explore">
              <button className="primary-btn">
                Explore Skills
                <FaArrowRight />
              </button>
            </Link>

            <button className="secondary-btn">
              <FaPlayCircle />
              How It Works
            </button>

          </div>

          <div className="hero-stats">

            <div>
              <h2>1000+</h2>
              <span>Members</span>
            </div>

            <div>
              <h2>500+</h2>
              <span>Skills</span>
            </div>

            <div>
              <h2>4.9★</h2>
              <span>User Rating</span>
            </div>

          </div>

        </div>

        <div className="hero-right">

          <img
            src={heroImage}
            alt="Skill Sharing"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;