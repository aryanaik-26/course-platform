import React from "react";
import "./Dashboard.css";

import {
  FaUserGraduate,
  FaBookOpen,
  FaClock,
  FaCheckCircle,
  FaCalendarAlt,
  FaArrowRight,
} from "react-icons/fa";

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="dashboard-header">

        <div>
          <h1>Welcome back, Arya 👋</h1>
          <p>Continue your learning journey with SkillSync.</p>
        </div>

        <button className="dashboard-btn">
          Explore Mentors
        </button>

      </div>

      {/* Statistics */}

      <div className="stats-grid">

        <div className="stat-box">

          <FaBookOpen className="stat-icon"/>

          <h2>12</h2>

          <p>Skills Learning</p>

        </div>

        <div className="stat-box">

          <FaUserGraduate className="stat-icon"/>

          <h2>8</h2>

          <p>Mentors Connected</p>

        </div>

        <div className="stat-box">

          <FaClock className="stat-icon"/>

          <h2>42 hrs</h2>

          <p>Learning Hours</p>

        </div>

        <div className="stat-box">

          <FaCheckCircle className="stat-icon"/>

          <h2>16</h2>

          <p>Completed Sessions</p>

        </div>

      </div>

      {/* Main Content */}

      <div className="dashboard-content">

        {/* Upcoming Sessions */}

        <div className="dashboard-card">

          <h2>Upcoming Sessions</h2>

          <div className="session">

            <div>

              <h3>React Development</h3>

              <p>Sarah Johnson</p>

            </div>

            <span>Today 6 PM</span>

          </div>

          <div className="session">

            <div>

              <h3>Machine Learning</h3>

              <p>Michael Lee</p>

            </div>

            <span>Tomorrow</span>

          </div>

          <button>

            View All

            <FaArrowRight/>

          </button>

        </div>

        {/* Progress */}

        <div className="dashboard-card">

          <h2>Learning Progress</h2>

          <div className="progress-box">

            <p>React Development</p>

            <div className="progress-bar">

              <div className="progress react"></div>

            </div>

            <span>80%</span>

          </div>

          <div className="progress-box">

            <p>UI/UX Design</p>

            <div className="progress-bar">

              <div className="progress design"></div>

            </div>

            <span>65%</span>

          </div>

          <div className="progress-box">

            <p>Machine Learning</p>

            <div className="progress-bar">

              <div className="progress ai"></div>

            </div>

            <span>45%</span>

          </div>

        </div>

      </div>

      {/* Requests */}

      <div className="dashboard-card requests">

        <h2>Recent Requests</h2>

        <table>

          <thead>

            <tr>

              <th>Mentor</th>

              <th>Skill</th>

              <th>Status</th>

              <th>Date</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td>Sarah Johnson</td>

              <td>React</td>

              <td className="accepted">Accepted</td>

              <td>10 July</td>

            </tr>

            <tr>

              <td>Michael Lee</td>

              <td>AI</td>

              <td className="pending">Pending</td>

              <td>12 July</td>

            </tr>

            <tr>

              <td>Emma Watson</td>

              <td>Graphic Design</td>

              <td className="completed">Completed</td>

              <td>05 July</td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Dashboard;