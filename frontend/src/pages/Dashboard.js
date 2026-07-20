import React from "react";
import "./Dashboard.css";


import UserCard from "../components/UserCard";

import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaClock,
  FaHandshake,
  FaCalendarAlt
} from "react-icons/fa";

/* =========================
   DASHBOARD DATA
========================= */

const stats = [
  {
    id: 1,
    title: "Skills Teaching",
    value: "08",
    icon: <FaChalkboardTeacher />,
    color: "#5B4BFF"
  },

  {
    id: 2,
    title: "Skills Learning",
    value: "05",
    icon: <FaBookOpen />,
    color: "#FF4D8D"
  },

  {
    id: 3,
    title: "Pending Requests",
    value: "12",
    icon: <FaClock />,
    color: "#FF9800"
  },

  {
    id: 4,
    title: "Completed Exchanges",
    value: "24",
    icon: <FaHandshake />,
    color: "#00C896"
  }
];

/* =========================
   UPCOMING SESSIONS
========================= */

const sessions = [

  {
    id: 1,
    mentor: "Rahul Kumar",
    skill: "React.js",
    date: "21 July 2026",
    time: "6:00 PM"
  },

  {
    id: 2,
    mentor: "Sneha Patel",
    skill: "Python",
    date: "23 July 2026",
    time: "4:30 PM"
  }

];
{/* =======================
      LEARNING STREAK
======================= */}

<section className="streak-section">

  <div className="streak-card">

    <div className="streak-left">

      <FaFire className="streak-icon"/>

      <div>

        <h2>12 Day Learning Streak 🔥</h2>

        <p>
          Keep learning every day to unlock
          new achievement badges.
        </p>

      </div>

    </div>

    <button className="streak-btn">
      Continue Learning
    </button>

  </div>

</section>

{/* =======================
      ACHIEVEMENTS
======================= */}

<section className="achievement-section">

  <div className="section-title">

    <h2>

      <FaMedal />

      Achievements

    </h2>

  </div>

  <div className="achievement-grid">

    <div className="achievement-card">

      <FaCheckCircle />

      <h3>First Mentor</h3>

      <p>Completed your first teaching session.</p>

    </div>

    <div className="achievement-card">

      <FaCheckCircle />

      <h3>5 Skill Exchanges</h3>

      <p>Successfully completed five exchanges.</p>

    </div>

    <div className="achievement-card">

      <FaCheckCircle />

      <h3>Top Rated</h3>

      <p>Maintained a rating above 4.8.</p>

    </div>

  </div>

</section>
/* =========================
   RECOMMENDED USERS
========================= */

const recommendedUsers = [

  {
    id: 1,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Arya S",
    location: "Mangalore",
    rating: "4.9",
    teachSkills: ["React", "HTML", "CSS"],
    learnSkills: ["Node.js"]
  },

  {
    id: 2,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Rahul Kumar",
    location: "Bangalore",
    rating: "4.8",
    teachSkills: ["Python", "ML"],
    learnSkills: ["React"]
  },

  {
    id: 3,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Ananya Rao",
    location: "Mysore",
    rating: "5.0",
    teachSkills: ["UI/UX"],
    learnSkills: ["MongoDB"]
  }

];

function Dashboard() {

  return (

    <div className="dashboard">

      <div className="container">

        {/* Continue in Part A2 */}
                {/* =========================
              DASHBOARD HEADER
        ========================= */}

        <section className="dashboard-header">

          <div className="dashboard-left">

            <h1>
              Welcome Back, <span>Arya 👋</span>
            </h1>

            <p>
              Ready to learn something new or help someone
              by sharing your knowledge today?
            </p>

          </div>

          <div className="profile-progress">

            <h4>Profile Completion</h4>

            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{ width: "80%" }}
              ></div>

            </div>

            <span>80%</span>

          </div>

        </section>

        {/* =========================
              STATS
        ========================= */}

        <section className="stats-section">

          <div className="stats-grid">

            {stats.map((item) => (

              <div
                className="stat-card"
                key={item.id}
              >

                <div
                  className="stat-icon"
                  style={{
                    background: item.color
                  }}
                >
                  {item.icon}
                </div>

                <div>

                  <h2>{item.value}</h2>

                  <p>{item.title}</p>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* =========================
              UPCOMING SESSIONS
        ========================= */}

        <section className="session-section">

          <div className="section-title">

            <h2>
              <FaCalendarAlt />
              Upcoming Sessions
            </h2>

          </div>

          <div className="session-list">

            {sessions.map((session) => (

              <div
                className="session-card"
                key={session.id}
              >

                <div>

                  <h3>{session.skill}</h3>

                  <p>
                    Mentor :
                    <strong>
                      {" "}
                      {session.mentor}
                    </strong>
                  </p>

                </div>

                <div className="session-date">

                  <span>{session.date}</span>

                  <span>{session.time}</span>

                </div>

                <button className="join-btn">
                  Join Session
                </button>

              </div>

            ))}

          </div>

        </section>

        {/* Continue in Part A3 */}
                {/* =========================
              RECOMMENDED PARTNERS
        ========================= */}

        <section className="recommend-section">

          <div className="section-title">

            <h2>
              Recommended Skill Partners
            </h2>

            <p>
              Connect with people who match your learning goals.
            </p>

          </div>

          <div className="recommend-grid">

            {recommendedUsers.map((user) => (

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

            ))}

          </div>

        </section>

      </div>

    </div>

  );

}

export default Dashboard;