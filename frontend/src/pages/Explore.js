import React, { useState } from "react";
import "./Explore.css";

import UserCard from "../components/UserCard";

import {
  FaSearch,
  FaFilter,
  FaMapMarkerAlt,
  FaStar
} from "react-icons/fa";

/* ===================================
        SAMPLE USERS
=================================== */

const users = [

  {
    id: 1,
    name: "Arya S",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    location: "Mangalore",
    rating: 4.9,
    teachSkills: ["React", "HTML", "CSS"],
    learnSkills: ["Node.js", "MongoDB"],
    category: "Programming"
  },

  {
    id: 2,
    name: "Rahul Kumar",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    location: "Bangalore",
    rating: 4.8,
    teachSkills: ["Python", "Machine Learning"],
    learnSkills: ["React"],
    category: "Programming"
  },

  {
    id: 3,
    name: "Sneha Patel",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    location: "Mysore",
    rating: 5.0,
    teachSkills: ["Photography"],
    learnSkills: ["Video Editing"],
    category: "Photography"
  },

  {
    id: 4,
    name: "Ananya Rao",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
    location: "Udupi",
    rating: 4.7,
    teachSkills: ["UI/UX"],
    learnSkills: ["React"],
    category: "Design"
  },

  {
    id: 5,
    name: "Vikram Singh",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    location: "Mangalore",
    rating: 4.6,
    teachSkills: ["Java"],
    learnSkills: ["Cloud"],
    category: "Programming"
  }

];

function Explore() {

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const filteredUsers = users.filter((user) => {

    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.teachSkills.join(" ").toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      user.category === category;

    return matchesSearch && matchesCategory;

  });

  return (

    <div className="explore">

      <div className="container">

        {/* Continue in Part A2 */}
                {/* ===========================
              PAGE HEADER
        =========================== */}

        <section className="explore-header">

          <h1>Explore Skill Partners</h1>

          <p>
            Discover talented people who can teach you new skills
            and connect with learners from different fields.
          </p>

        </section>

        {/* ===========================
              SEARCH & FILTERS
        =========================== */}

        <section className="filter-section">

          <div className="search-box">

            <FaSearch className="search-icon" />

            <input
              type="text"
              placeholder="Search by name or skill..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

          <div className="filter-group">

            <div className="filter-item">

              <FaFilter />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >

                <option value="All">
                  All Categories
                </option>

                <option value="Programming">
                  Programming
                </option>

                <option value="Design">
                  Design
                </option>

                <option value="Photography">
                  Photography
                </option>

              </select>

            </div>

            <div className="filter-item">

              <FaMapMarkerAlt />

              <select>

                <option>All Locations</option>
                <option>Mangalore</option>
                <option>Bangalore</option>
                <option>Mysore</option>
                <option>Udupi</option>

              </select>

            </div>

            <div className="filter-item">

              <FaStar />

              <select>

                <option>All Ratings</option>
                <option>4★ & Above</option>
                <option>4.5★ & Above</option>
                <option>5★ Only</option>

              </select>

            </div>

          </div>

        </section>

        {/* ===========================
              RESULTS
        =========================== */}

        <section className="results-section">

          <div className="results-header">

            <h2>
              {filteredUsers.length} Skill Partner
              {filteredUsers.length !== 1 ? "s" : ""} Found
            </h2>

          </div>

          {/* Continue in Part A3 */}
                    <div className="explore-grid">

            {filteredUsers.length > 0 ? (

              filteredUsers.map((user) => (

                <UserCard
                  key={user.id}
                  id={user.id}
                  image={user.image}
                  name={user.name}
                  location={user.location}
                  rating={user.rating}
                  teachSkills={user.teachSkills}
                  learnSkills={user.learnSkills}
                />

              ))

            ) : (

              <div className="no-results">

                <img
                  src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
                  alt="No Results"
                />

                <h3>No Skill Partners Found</h3>

                <p>
                  Try changing your search keyword or
                  selecting a different category.
                </p>

              </div>

            )}

          </div>

        </section>

      </div>

    </div>

  );

}

export default Explore;