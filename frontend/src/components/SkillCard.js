import React from "react";
import { FaArrowRight, FaUsers, FaStar } from "react-icons/fa";
import "./SkillCard.css";

function SkillCard({
  title,
  icon,
  mentors,
  rating,
  color
}) {
  return (
    <div className="skill-card">

      <div
        className="skill-icon"
        style={{ background: color }}
      >
        {icon}
      </div>

      <h3>{title}</h3>

      <div className="skill-info">

        <div>
          <FaUsers />
          <span>{mentors} Mentors</span>
        </div>

        <div>
          <FaStar />
          <span>{rating}</span>
        </div>

      </div>

      <button className="skill-btn">
        Explore
        <FaArrowRight />
      </button>

    </div>
  );
}

export default SkillCard;