import React from "react";
import "./Requests.css";

import {
  FaUserGraduate,
  FaBookOpen,
  FaMapMarkerAlt,
  FaCheck,
  FaTimes
} from "react-icons/fa";


function RequestCard({
  userImage,
  userName,
  location,
  wantsToLearn,
  canTeach,
  status,
  onAccept,
  onReject
}) {

  return (

    <div className="request-card">


      <div className="request-user">

        <img
          src={userImage}
          alt={userName}
        />


        <div>

          <h3>{userName}</h3>

          <p>
            <FaMapMarkerAlt />
            {location}
          </p>

        </div>

      </div>



      <div className="request-details">


        <div>

          <h4>
            <FaBookOpen />
            Wants to Learn
          </h4>

          <span>
            {wantsToLearn}
          </span>

        </div>



        <div>

          <h4>
            <FaUserGraduate />
            Can Teach
          </h4>

          <span>
            {canTeach}
          </span>

        </div>


      </div>



      <div className="request-status">

        <span className={`status ${status?.toLowerCase()}`}>
          {status}
        </span>

      </div>




      <div className="request-buttons">


        <button
          className="accept-btn"
          onClick={onAccept}
        >

          <FaCheck />
          Accept

        </button>



        <button
          className="reject-btn"
          onClick={onReject}
        >

          <FaTimes />
          Reject

        </button>


      </div>


    </div>

  );

}


export default RequestCard;