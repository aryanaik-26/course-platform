import React, { useState } from "react";
import "./SearchBar.css";

import {
  FaSearch,
  FaMapMarkerAlt,
  FaFilter,
} from "react-icons/fa";

function SearchBar() {
  const [skill, setSkill] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    alert(
      `Searching for "${skill}" mentors in "${location || "Any Location"}"`
    );
  };

  return (
    <section className="search-section">

      <div className="search-header">

        <h2>Find the Perfect Mentor</h2>

        <p>
          Search from hundreds of skilled mentors and start learning today.
        </p>

      </div>

      <div className="search-container">

        {/* Skill */}

        <div className="input-box">

          <FaSearch className="input-icon" />

          <input
            type="text"
            placeholder="Search Skills (React, Photography, AI...)"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          />

        </div>

        {/* Location */}

        <div className="input-box">

          <FaMapMarkerAlt className="input-icon" />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

        </div>

        {/* Category */}

        <div className="input-box select-box">

          <FaFilter className="input-icon" />

          <select>

            <option>All Categories</option>

            <option>Programming</option>

            <option>Photography</option>

            <option>Music</option>

            <option>Cooking</option>

            <option>Graphic Design</option>

            <option>Fitness</option>

            <option>Artificial Intelligence</option>

            <option>Languages</option>

          </select>

        </div>

        {/* Search Button */}

        <button
          className="search-btn"
          onClick={handleSearch}
        >
          Search Mentor
        </button>

      </div>

    </section>
  );
}

export default SearchBar;