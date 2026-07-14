import React from "react";
import "./HowItWorks.css";

import {
  FaSearch,
  FaPaperPlane,
  FaHandshake,
  FaGraduationCap,
} from "react-icons/fa";

function HowItWorks() {
  return (
    <section className="how-section">

      <div className="section-title">

        <span>How SkillSync Works</span>

        <h2>
          Learn New Skills in <span>4 Simple Steps</span>
        </h2>

        <p>
          Whether you're a learner looking to master a new skill or a mentor
          ready to share your expertise, SkillSync makes the process simple,
          secure and enjoyable.
        </p>

      </div>

      <div className="timeline">

        {/* STEP 1 */}

        <div className="step-card">

          <div className="step-number">01</div>

          <div className="step-icon">
            <FaSearch />
          </div>

          <h3>Find a Skill</h3>

          <p>
            Browse hundreds of skills like Programming, Photography,
            Music, Cooking, Fitness and many more.
          </p>

        </div>

        {/* STEP 2 */}

        <div className="step-card">

          <div className="step-number">02</div>

          <div className="step-icon">
            <FaPaperPlane />
          </div>

          <h3>Send a Request</h3>

          <p>
            Choose a mentor based on ratings, experience,
            availability and send a learning request.
          </p>

        </div>

        {/* STEP 3 */}

        <div className="step-card">

          <div className="step-number">03</div>

          <div className="step-icon">
            <FaHandshake />
          </div>

          <h3>Connect with Mentor</h3>

          <p>
            Once accepted, schedule your session,
            communicate and begin your learning journey.
          </p>

        </div>

        {/* STEP 4 */}

        <div className="step-card">

          <div className="step-number">04</div>

          <div className="step-icon">
            <FaGraduationCap />
          </div>

          <h3>Learn & Grow</h3>

          <p>
            Gain practical knowledge, complete sessions,
            leave reviews and continue improving your skills.
          </p>

        </div>

      </div>

      <div className="how-bottom">

        <h3>
          🚀 Thousands of learners and mentors are already growing together.
        </h3>

        <button>
          Start Your Journey
        </button>

      </div>

    </section>
  );
}

export default HowItWorks;