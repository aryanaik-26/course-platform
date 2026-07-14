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

const categories = [
  {
    icon: <FaLaptopCode />,
    title: "Programming",
    description: "Web, App & Software Development",
  },
  {
    icon: <FaPaintBrush />,
    title: "Graphic Design",
    description: "UI/UX, Photoshop & Branding",
  },
  {
    icon: <FaCamera />,
    title: "Photography",
    description: "Photo & Video Editing",
  },
  {
    icon: <FaMusic />,
    title: "Music",
    description: "Guitar, Piano & Singing",
  },
  {
    icon: <FaUtensils />,
    title: "Cooking",
    description: "Baking & Professional Cooking",
  },
  {
    icon: <FaDumbbell />,
    title: "Fitness",
    description: "Yoga, Gym & Personal Training",
  },
  {
    icon: <FaRobot />,
    title: "Artificial Intelligence",
    description: "Machine Learning & AI",
  },
  {
    icon: <FaLanguage />,
    title: "Languages",
    description: "English, Hindi & Foreign Languages",
  },
];

function CategoryCard() {
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
              {category.icon}
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