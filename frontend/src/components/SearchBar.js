import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import "./SearchBar.css";

function SearchBar() {
  const [skill, setSkill] = useState("");
  const [location, setLocation] = useState("");

  const popularSkills = [
    "React",
    "Python",
    "UI/UX",
    "Java",
    "Photography",
    "Cooking"
  ];

  return (
    <section className="search-section">

      <div className="container">

        <div className="search-header">

          <h2>Find the Perfect Skill Partner</h2>

          <p>
            Search for people who can teach the skills you want to learn.
          </p>

        </div>

        <div className="search-card">

          <div className="search-input">

            <FaSearch className="search-icon" />

            <input
              type="text"
              placeholder="Search skills (React, Python, Guitar...)"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
            />

          </div>

          <div className="location-input">

            <FaMapMarkerAlt className="location-icon" />

            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Anywhere</option>
              <option>Mangalore</option>
              <option>Bangalore</option>
              <option>Mysore</option>
              <option>Udupi</option>
              <option>Online</option>
            </select>

          </div>

          <button className="search-btn">
            Search
          </button>

        </div>

        <div className="popular-skills">

          <span>Popular Skills</span>

          <div className="skill-tags">

            {popularSkills.map((item, index) => (

              <button
                key={index}
                className="tag"
                onClick={() => setSkill(item)}
              >
                {item}
              </button>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default SearchBar;