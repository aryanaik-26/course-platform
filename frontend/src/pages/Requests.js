import React, { useState } from "react";
import "./Requests.css";

function Requests() {

  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Ananya Patel",
      skill: "React Development",
      message:
        "I would like to learn React and build real-world projects.",
      status: "Pending"
    },
    {
      id: 2,
      name: "Arjun Kumar",
      skill: "UI/UX Design",
      message:
        "Interested in learning modern design principles.",
      status: "Pending"
    }
  ]);


  const updateRequest = (id, status) => {

    setRequests(
      requests.map((request) =>
        request.id === id
          ? { ...request, status }
          : request
      )
    );

  };


  return (

    <div className="requests-page">


      <div className="requests-container">

        <h1>
          Skill Requests
        </h1>

        <p className="requests-subtitle">
          Manage requests from learners who want to connect with you.
        </p>



        <div className="request-list">

          {
            requests.map((request) => (

              <div
                className="request-card"
                key={request.id}
              >

                <div className="request-info">

                  <h3>
                    {request.name}
                  </h3>


                  <h4>
                    Skill: {request.skill}
                  </h4>


                  <p>
                    {request.message}
                  </p>


                  <span className={`status ${request.status.toLowerCase()}`}>
                    {request.status}
                  </span>


                </div>



                {
                  request.status === "Pending" && (

                    <div className="request-actions">

                      <button
                        className="accept-btn"
                        onClick={() =>
                          updateRequest(
                            request.id,
                            "Accepted"
                          )
                        }
                      >
                        Accept
                      </button>


                      <button
                        className="reject-btn"
                        onClick={() =>
                          updateRequest(
                            request.id,
                            "Rejected"
                          )
                        }
                      >
                        Reject
                      </button>

                    </div>

                  )
                }


              </div>

            ))
          }

        </div>


      </div>


    </div>

  );
}


export default Requests;