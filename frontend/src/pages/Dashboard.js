import React, { useEffect, useState } from "react";
import "./Dashboard.css";

import {
  FaUserGraduate,
  FaBookOpen,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import { getRequests } from "../services/requestService";
import { getMentors } from "../services/userService";

function Dashboard() {
  const [requests, setRequests] = useState([]);
  const [mentors, setMentors] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const requestData = await getRequests();
      const mentorData = await getMentors();

      setRequests(requestData);
      setMentors(mentorData);
    } catch (error) {
      console.log(error);
    }
  };

  const acceptedRequests = requests.filter(
    (r) => r.status === "accepted"
  );

  const pendingRequests = requests.filter(
    (r) => r.status === "pending"
  );

  return (
    <div className="dashboard">

      <div className="dashboard-header">

        <div>
          <h1>
            Welcome back, {user?.name || "User"} 👋
          </h1>

          <p>
            Continue your learning journey with SkillSync.
          </p>
        </div>

        <button className="dashboard-btn">
          Explore Mentors
        </button>

      </div>

      {/* Statistics */}

      <div className="stats-grid">

        <div className="stat-box">
          <FaBookOpen className="stat-icon" />
          <h2>{requests.length}</h2>
          <p>Total Requests</p>
        </div>

        <div className="stat-box">
          <FaUserGraduate className="stat-icon" />
          <h2>{mentors.length}</h2>
          <p>Available Mentors</p>
        </div>

        <div className="stat-box">
          <FaClock className="stat-icon" />
          <h2>{pendingRequests.length}</h2>
          <p>Pending Requests</p>
        </div>

        <div className="stat-box">
          <FaCheckCircle className="stat-icon" />
          <h2>{acceptedRequests.length}</h2>
          <p>Accepted Requests</p>
        </div>

      </div>

      {/* Recent Requests */}

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

            {requests.length > 0 ? (

              requests.slice(0, 5).map((request) => (
                <tr key={request._id}>

                  <td>
                    {request.mentor?.name || "Mentor"}
                  </td>

                  <td>{request.skill}</td>

                  <td className={request.status}>
                    {request.status}
                  </td>

                  <td>
                    {new Date(
                      request.createdAt
                    ).toLocaleDateString()}
                  </td>

                </tr>
              ))

            ) : (

              <tr>
                <td colSpan="4">
                  No requests found
                </td>
              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Dashboard;