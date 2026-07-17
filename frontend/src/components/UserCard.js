import React from "react";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaMapMarkerAlt,
  FaChalkboardTeacher,
  FaBookReader
} from "react-icons/fa";

import "./UserCard.css";

function UserCard({
  id,
  image,
  name,
  location,
  rating,
  teachSkills,
  learnSkills
}) {
  return (
    <div className="user-card">

      <div className="user-top">

        <div className="profile-wrapper">

          <img
            src={image}
            alt={name}
            className="profile-image"
          />

          <span className="online-dot"></span>

        </div>

        <div className="rating">

          <FaStar />

          <span>{rating}</span>

        </div>

      </div>

      <h2>{name}</h2>

      <div className="location">

        <FaMapMarkerAlt />

        <span>{location}</span>

      </div>

      <div className="skill-box">

        <div className="skill-title">

          <FaChalkboardTeacher />

          <span>Can Teach</span>

        </div>

        <div className="chips">

          {teachSkills.map((skill, index) => (
            <span key={index} className="teach-chip">
              {skill}
            </span>
          ))}
        </div>

      </div>

      <div className="skill-box">

        <div className="skill-title">

          <FaBookReader />

          <span>Wants To Learn</span>

        </div>

        <div className="chips">

          {learnSkills.map((skill, index) => (
            <span key={index} className="learn-chip">
              {skill}
            </span>
          ))}
        </div>

      </div>

      <div className="card-buttons">

        <Link to={`/profile/${id}`}>

          <button className="view-btn">
            View Profile
          </button>

        </Link>

        <button className="request-btn">
          Request Skill Exchange
        </button>

      </div>

    </div>
  );
}

export default UserCard;