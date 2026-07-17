import React from "react";
import "./Profile.css";

import {
  FaMapMarkerAlt,
  FaStar,
  FaGraduationCap,
  FaChalkboardTeacher
} from "react-icons/fa";

function Profile({ user }) {

  // Prevent crash if user data is not available
  if (!user) {
    return (
      <div className="profile-card">
        <h2>User profile not found</h2>
        <p>Please select a user to view profile.</p>
      </div>
    );
  }

  return (
    <div className="profile-card">

      <div className="profile-header">

        <img
          src={user.image || "/images/default-user.png"}
          alt={user.name || "User"}
          className="profile-image"
        />

        <div>

          <h2>{user.name || "Unknown User"}</h2>

          <p className="location">
            <FaMapMarkerAlt />
            {user.location || "Location not available"}
          </p>

          <div className="rating">
            <FaStar />
            <span>{user.rating || "No rating"}</span>
          </div>

        </div>

      </div>


      <div className="profile-section">

        <h3>
          <FaChalkboardTeacher />
          Skills I Teach
        </h3>

        <div className="skill-list">

          {user.teachSkills && user.teachSkills.length > 0 ? (
            user.teachSkills.map((skill, index) => (
              <span key={index}>
                {skill}
              </span>
            ))
          ) : (
            <p>No teaching skills added</p>
          )}

        </div>

      </div>


      <div className="profile-section">

        <h3>
          <FaGraduationCap />
          Skills I Want To Learn
        </h3>

        <div className="skill-list">

          {user.learnSkills && user.learnSkills.length > 0 ? (
            user.learnSkills.map((skill, index) => (
              <span key={index}>
                {skill}
              </span>
            ))
          ) : (
            <p>No learning skills added</p>
          )}

        </div>

      </div>


      <button className="connect-btn">
        Connect
      </button>


    </div>
  );
}

export default Profile;