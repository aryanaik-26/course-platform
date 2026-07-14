import React, { useState } from "react";
import "./Explore.css";

import {
  FaSearch,
  FaMapMarkerAlt,
  FaStar,
  FaClock,
} from "react-icons/fa";

import mentors from "../data/mentors";

function Explore() {

  const [search, setSearch] = useState("");

  const filteredMentors = mentors.filter((mentor) =>
    mentor.skill.toLowerCase().includes(search.toLowerCase()) ||
    mentor.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="explore">

      <div className="explore-header">

        <h1>Explore Mentors</h1>

        <p>
          Find experienced mentors from different domains and start learning today.
        </p>

      </div>

      {/* Search */}

      <div className="explore-search">

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search mentors or skills..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* Mentor Grid */}

      <div className="explore-grid">

        {filteredMentors.map((mentor) => (

          <div className="explore-card" key={mentor.id}>

            <img src={mentor.image} alt={mentor.name} />

            <div className="explore-content">

              <h2>{mentor.name}</h2>

              <h3>{mentor.skill}</h3>

              <p>
                <FaMapMarkerAlt />
                {mentor.location}
              </p>

              <p>
                <FaClock />
                {mentor.experience}
              </p>

              <div className="rating">

                <FaStar />

                {mentor.rating}

              </div>

              <button>

                Request Mentor

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Explore;