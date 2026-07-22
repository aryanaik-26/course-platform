import React from "react";
import "./CategoryCard.css";

import {
  FaLaptopCode,
  FaPaintBrush,
  FaCamera,
  FaMusic,
  FaUtensils,
  FaDumbbell,
  FaRobot,
  FaLanguage,
} from "react-icons/fa";

const icons = {
  FaLaptopCode: <FaLaptopCode />,
  FaPaintBrush: <FaPaintBrush />,
  FaCamera: <FaCamera />,
  FaMusic: <FaMusic />,
  FaUtensils: <FaUtensils />,
  FaDumbbell: <FaDumbbell />,
  FaRobot: <FaRobot />,
  FaLanguage: <FaLanguage />,
};

function CategoryCard({ categories = [] }) {
  return (
    <section className="category-section">

      <h2>Explore Popular Skills</h2>

      <p>
        Learn from experienced mentors or share your own expertise with learners
        across different fields.
      </p>

      <div className="category-grid">

        {categories.map((category, index) => (

          <div className="category-card" key={index}>

            <div className="category-icon">
              {icons[category.icon]}
            </div>

            <h3>{category.title}</h3>

            <p>{category.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default CategoryCard;