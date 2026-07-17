import React, { useState, useEffect } from "react";
import "./Explore.css";
import { createRequest } from "../services/requestService";

import {
  FaSearch,
  FaMapMarkerAlt,
  FaStar,
  FaClock,
} from "react-icons/fa";

import { getMentors } from "../services/userService";

function Explore() {
  const [search, setSearch] = useState("");
  const [mentors, setMentors] = useState([]);
  const [requestedMentors, setRequestedMentors] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const data = await getMentors();
        setMentors(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMentors();
  }, []);

const handleRequest = async (mentorId) => {
  try {
    const user = JSON.parse(
      localStorage.getItem("user")
    );

    await createRequest({
      learner: user._id,
      mentor: mentorId,
      skill: "General Mentorship",
      message: `${user.name} wants to connect with you.`,
    });

    setRequestedMentors((prev) => [
      ...prev,
      mentorId,
    ]);

    alert("Request sent successfully");
  } catch (error) {
    console.log(error);
    alert("Failed to send request");
  }
};

  const filteredMentors = mentors.filter((mentor) => {
    const skills =
      mentor.skillsOffered?.join(" ").toLowerCase() || "";

    return (
      skills.includes(search.toLowerCase()) ||
      mentor.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="explore">

      <div className="explore-header">
        <h1>Explore Mentors</h1>

        <p>
          Find experienced mentors from different domains
          and start learning today.
        </p>
      </div>

      {/* Search Bar */}

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

          <div
            className="explore-card"
            key={mentor._id}
          >

            <img
              src={
                mentor.profilePicture ||
                "https://via.placeholder.com/400x300"
              }
              alt={mentor.name}
            />

            <div className="explore-content">

              <h2>{mentor.name}</h2>

              <h3>
                {mentor.skillsOffered?.length > 0
                  ? mentor.skillsOffered.join(", ")
                  : "No skills added"}
              </h3>

              <p>
                <FaMapMarkerAlt />
                {mentor.location ||
                  "Location not specified"}
              </p>

              <p>
                <FaClock />
                {mentor.experience ||
                  "New Mentor"}
              </p>

              <div className="rating">
                <FaStar />
                {mentor.rating || "5.0"}
              </div>

              <button
                className="request-btn"
                style={{
                  background: requestedMentors.includes(
                    mentor._id
                  )
                    ? "#374151"
                    : "",
                }}
                onClick={() => handleRequest(mentor._id)}
              >
                {requestedMentors.includes(
                  mentor._id
                )
                  ? "Request Sent"
                  : "Request Mentor"}
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Explore;