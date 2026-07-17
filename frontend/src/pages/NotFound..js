import React from "react";
import { useParams, Link } from "react-router-dom";
import "./MentorProfile.css";

function MentorProfile() {

  const { id } = useParams();


  // Temporary mentor data (replace with Firebase data later)
  const mentor = {
    id: id,
    name: "Rahul Sharma",
    role: "Full Stack Developer",
    image: "/assets/mentor1.jpg",
    rating: "4.8",
    students: "1200+",
    experience: "5 Years",
    skills: [
      "React",
      "Node.js",
      "MongoDB",
      "JavaScript"
    ],
    bio:
      "Experienced full stack developer passionate about teaching modern web technologies and helping students build real-world projects."
  };


  return (

    <div className="mentor-profile-page">


      <div className="mentor-profile-card">


        {/* Profile Header */}

        <div className="mentor-header">

          <img
            src={mentor.image}
            alt={mentor.name}
            className="mentor-image"
          />


          <div className="mentor-info">

            <h1>
              {mentor.name}
            </h1>

            <h3>
              {mentor.role}
            </h3>


            <div className="mentor-stats">

              <span>
                ⭐ {mentor.rating} Rating
              </span>

              <span>
                👨‍🎓 {mentor.students} Students
              </span>

              <span>
                💼 {mentor.experience}
              </span>

            </div>


          </div>

        </div>



        {/* About Mentor */}

        <section className="mentor-section">

          <h2>
            About Mentor
          </h2>

          <p>
            {mentor.bio}
          </p>

        </section>




        {/* Skills */}

        <section className="mentor-section">

          <h2>
            Skills
          </h2>


          <div className="mentor-skills">

            {
              mentor.skills.map((skill, index) => (

                <span key={index}>
                  {skill}
                </span>

              ))
            }

          </div>

        </section>




        {/* Action */}

        <div className="mentor-action">

          <Link
            to="/contact"
            className="contact-btn"
          >
            Connect With Mentor
          </Link>


        </div>



      </div>


    </div>

  );

}


export default MentorProfile;