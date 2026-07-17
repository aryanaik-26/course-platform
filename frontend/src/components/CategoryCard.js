import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./CategoryCard.css";

function CategoryCard({ title, icon, mentors, color }) {
  return (
    <div className="category-card">

      <div
        className="category-icon"
        style={{ background: color }}
      >
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{mentors}+ Skill Experts</p>

      <button className="category-btn">
        Explore
        <FaArrowRight />
      </button>

    </div>
  );
}

export default CategoryCard;