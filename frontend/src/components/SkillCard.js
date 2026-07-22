import React, { useEffect, useState } from "react";
import "./SkillCard.css";
import { Link } from "react-router-dom";

import {
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

import { getFeaturedUsers } from "../services/userService";

function SkillCard() {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFeaturedMentors();
  }, []);

  const loadFeaturedMentors = async () => {
    try {
      const data = await getFeaturedUsers();
      setMentors(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="mentor-section">
        <div className="mentor-heading">
          <h2>Featured Mentors</h2>
          <p>Loading mentors...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mentor-section">

      <div className="mentor-heading">
        <span>Featured Mentors</span>

        <h2>Learn from the Best</h2>

        <p>
          Discover experienced mentors from different domains and begin your
          learning journey with confidence.
        </p>
      </div>

      <div className="mentor-grid">

        {mentors.length === 0 ? (
          <h3>No mentors available.</h3>
        ) : (
          mentors.map((mentor) => (
            <div
              className="mentor-card"
              key={mentor._id}
            >

              <div className="mentor-image">

                <img
                  src={
                    mentor.profilePicture ||
                    "https://via.placeholder.com/300x220?text=Mentor"
                  }
                  alt={mentor.name}
                />

                <span className="rating">
                  <FaStar />
                  {mentor.rating || "5.0"}
                </span>

              </div>

              <div className="mentor-content">

                <h3>{mentor.name}</h3>

                <h4>
                  {mentor.skillsOffered?.length
                    ? mentor.skillsOffered.join(", ")
                    : "No Skills Added"}
                </h4>

                <p>
                  <FaMapMarkerAlt />
                  {mentor.location || "Location not specified"}
                </p>

                <p>
                  <FaClock />
                  {mentor.experience || "New Mentor"}
                </p>

                <div className="mentor-footer">

                  <span>
                    {mentor.sessions || 0} Sessions
                  </span>

                  <Link to={`/mentor/${mentor._id}`}>
                    <button>
                      View Profile
                      <FaArrowRight />
                    </button>
                  </Link>

                </div>

              </div>

            </div>
          ))
        )}

      </div>

    </section>
  );
}

export default SkillCard;