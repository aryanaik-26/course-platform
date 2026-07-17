import React, { useState } from "react";
import "./EditProfile.css";

import {
  FaCamera,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInfoCircle
} from "react-icons/fa";

function EditProfile() {

  const [profile, setProfile] = useState({

    image:
      "https://randomuser.me/api/portraits/women/44.jpg",

    fullName: "Arya S",

    email: "arya@gmail.com",

    phone: "+91 9876543210",

    location: "Mangalore",

    about:
      "Passionate React Developer who loves teaching Web Development and learning Backend technologies."

  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    setProfile({

      ...profile,

      [name]: value

    });

  };

  return (

    <div className="edit-profile">

      <div className="container">

        {/* ===========================
             PAGE HEADER
        =========================== */}

        <div className="page-header">

          <h1>Edit Profile</h1>

          <p>

            Keep your profile updated so learners
            can easily discover and connect with you.

          </p>

        </div>

        {/* ===========================
             PROFILE CARD
        =========================== */}

        <div className="profile-form">

          {/* Profile Image */}

          <div className="profile-image-section">

            <img
              src={profile.image}
              alt="Profile"
            />

            <button className="camera-btn">

              <FaCamera />

            </button>

          </div>

          {/* ===========================
                 BASIC INFORMATION
          =========================== */}

          <div className="form-grid">

            {/* Full Name */}

            <div className="input-group">

              <label>

                <FaUser />

                Full Name

              </label>

              <input
                type="text"
                name="fullName"
                value={profile.fullName}
                onChange={handleChange}
              />

            </div>

            {/* Email */}

            <div className="input-group">

              <label>

                <FaEnvelope />

                Email

              </label>

              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
              />

            </div>

            {/* Phone */}

            <div className="input-group">

              <label>

                <FaPhone />

                Phone Number

              </label>

              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
              />

            </div>

            {/* Location */}

            <div className="input-group">

              <label>

                <FaMapMarkerAlt />

                Location

              </label>

              <input
                type="text"
                name="location"
                value={profile.location}
                onChange={handleChange}
              />

            </div>

          </div>

          {/* ===========================
                 ABOUT
          =========================== */}

          <div className="input-group">

            <label>

              <FaInfoCircle />

              About Me

            </label>

            <textarea
              rows="5"
              name="about"
              value={profile.about}
              onChange={handleChange}
            />

          </div>

          {/* Continue in Part A2 */}
                    {/* ===========================
                 SKILLS
          =========================== */}

          <div className="skills-section">

            <div className="skills-box">

              <h2>Skills I Can Teach</h2>

              <div className="tag-container">

                <span className="skill-tag">React</span>

                <span className="skill-tag">HTML</span>

                <span className="skill-tag">CSS</span>

                <span className="skill-tag">JavaScript</span>

                <button className="add-tag-btn">
                  + Add Skill
                </button>

              </div>

            </div>

            <div className="skills-box">

              <h2>Skills I Want To Learn</h2>

              <div className="tag-container">

                <span className="skill-tag learn">
                  Node.js
                </span>

                <span className="skill-tag learn">
                  MongoDB
                </span>

                <span className="skill-tag learn">
                  Express.js
                </span>

                <button className="add-tag-btn">
                  + Add Skill
                </button>

              </div>

            </div>

          </div>

          {/* ===========================
                SOCIAL LINKS
          =========================== */}

          <div className="social-links">

            <h2>Social Links</h2>

            <div className="form-grid">

              <div className="input-group">

                <label>

                  LinkedIn

                </label>

                <input
                  type="text"
                  placeholder="https://linkedin.com/in/username"
                />

              </div>

              <div className="input-group">

                <label>

                  GitHub

                </label>

                <input
                  type="text"
                  placeholder="https://github.com/username"
                />

              </div>

              <div className="input-group">

                <label>

                  Portfolio Website

                </label>

                <input
                  type="text"
                  placeholder="https://yourportfolio.com"
                />

              </div>

            </div>

          </div>

          {/* ===========================
               AVAILABILITY
          =========================== */}

          <div className="availability-section">

            <h2>Availability</h2>

            <div className="availability-grid">

              <label>

                <input type="checkbox" />

                Weekdays

              </label>

              <label>

                <input type="checkbox" />

                Weekends

              </label>

              <label>

                <input type="checkbox" />

                Morning

              </label>

              <label>

                <input type="checkbox" />

                Afternoon

              </label>

              <label>

                <input type="checkbox" />

                Evening

              </label>

              <label>

                <input type="checkbox" />

                Online Only

              </label>

            </div>

          </div>

          {/* Continue in Part A3 */}
                  {/* ===========================
                 ACTION BUTTONS
          =========================== */}

          <div className="button-group">

            <button
              className="save-btn"
              onClick={() => alert("Profile Updated Successfully!")}
            >
              Save Changes
            </button>

            <button
              className="cancel-btn"
              onClick={() => window.history.back()}
            >
              Cancel
            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default EditProfile;  