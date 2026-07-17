import React, { useEffect, useState } from "react";
import "./Requests.css";

import {
  getRequests,
  updateRequestStatus,
} from "../services/requestService";

function Requests() {
  const [requests, setRequests] = useState([]);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const data = await getRequests();
      setRequests(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateRequest = async (
    id,
    status
  ) => {
    try {
      await updateRequestStatus(
        id,
        status
      );

      setRequests(
        requests.map((request) =>
          request._id === id
            ? {
                ...request,
                status,
              }
            : request
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="requests-page">
      <div className="requests-container">

        <h1>Skill Requests</h1>

        <p className="requests-subtitle">
          {user.role === "mentor"
            ? "Manage requests from learners."
            : "Track your mentor requests."}
        </p>

        <div className="request-list">

          {requests.length === 0 && (
            <h3>
              No requests found.
            </h3>
          )}

          {requests.map((request) => (
            <div
              className="request-card"
              key={request._id}
            >
              <div className="request-info">

                <h3>
                  {user.role === "mentor"
                    ? request.learner?.name
                    : request.mentor?.name}
                </h3>

                <h4>
                  Skill: {request.skill}
                </h4>

                <p>
                  {request.message}
                </p>

                <span
                  className={`status ${request.status}`}
                >
                  {request.status}
                </span>
              </div>

              {user.role === "mentor" &&
                request.status ===
                  "pending" && (
                  <div className="request-actions">

                    <button
                      className="accept-btn"
                      onClick={() =>
                        updateRequest(
                          request._id,
                          "accepted"
                        )
                      }
                    >
                      Accept
                    </button>

                    <button
                      className="reject-btn"
                      onClick={() =>
                        updateRequest(
                          request._id,
                          "rejected"
                        )
                      }
                    >
                      Reject
                    </button>

                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Requests;