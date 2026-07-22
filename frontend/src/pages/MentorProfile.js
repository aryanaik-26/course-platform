import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./MentorProfile.css";

import { getUserById } from "../services/userService";

function MentorProfile() {
  const { id } = useParams();

  const [mentor, setMentor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMentor();
  }, [id]);

  const loadMentor = async () => {
    try {
      const data = await getUserById(id);
      setMentor(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="mentor-profile-page">
        <h2>Loading mentor...</h2>
      </div>
    );
  }

  if (!mentor) {
    return (
      <div className="mentor-profile-page">
        <h2>Mentor not found</h2>
      </div>
    );
  }

  return (
    <div className="mentor-profile-page">

      <div className="mentor-profile-card">

        <div className="mentor-header">

          <img
            src={
              mentor.profilePicture ||
              "https://via.placeholder.com/250?text=Mentor"
            }
            alt={mentor.name}
            className="mentor-image"
          />

          <div className="mentor-info">

            <h1>{mentor.name}</h1>

            <h3>
              {mentor.skillsOffered?.length
                ? mentor.skillsOffered.join(", ")
                : "No Skills Added"}
            </h3>

            <div className="mentor-stats">

              <span>
                ⭐ {mentor.rating || "5.0"} Rating
              </span>

              <span>
                👨‍🎓 {mentor.sessions || 0} Sessions
              </span>

              <span>
                💼 {mentor.experience || "New Mentor"}
              </span>

            </div>

          </div>

        </div>

        <section className="mentor-section">

          <h2>About Mentor</h2>

          <p>
            {mentor.bio || "No bio available."}
          </p>

        </section>

        <section className="mentor-section">

          <h2>Skills Offered</h2>

          <div className="mentor-skills">

            {mentor.skillsOffered?.length > 0 ? (
              mentor.skillsOffered.map((skill, index) => (
                <span key={index}>
                  {skill}
                </span>
              ))
            ) : (
              <p>No skills added.</p>
            )}

          </div>

        </section>

        <section className="mentor-section">

          <h2>Skills Wanted</h2>

          <div className="mentor-skills">

            {mentor.skillsWanted?.length > 0 ? (
              mentor.skillsWanted.map((skill, index) => (
                <span key={index}>
                  {skill}
                </span>
              ))
            ) : (
              <p>No learning goals added.</p>
            )}

          </div>

        </section>

        <div className="mentor-action">

          <Link
            to="/explore"
            className="contact-btn"
          >
            Back to Explore
          </Link>

        </div>

      </div>

    </div>
  );
}

export default MentorProfile;