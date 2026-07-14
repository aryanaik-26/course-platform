import React from "react";
import "./SkillCard.css";

import {
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

import mentor1 from "../assets/mentors/mentor1.jpg";
import mentor2 from "../assets/mentors/mentor2.jpg";
import mentor3 from "../assets/mentors/mentor3.jpg";
import mentor4 from "../assets/mentors/mentor4.jpg";


const mentors = [
  {
    id: 1,
    image: mentor1,
    name: "Sarah Johnson",
    skill: "React Development",
    rating: "4.9",
    location: "Mangalore",
    experience: "5 Years",
    sessions: "120 Sessions",
  },

  {
    id: 2,
    image: mentor2,
    name: "David Wilson",
    skill: "Photography",
    rating: "4.8",
    location: "Bangalore",
    experience: "6 Years",
    sessions: "95 Sessions",
  },

  {
    id: 3,
    image: mentor3,
    name: "Emma Watson",
    skill: "Graphic Design",
    rating: "4.9",
    location: "Mumbai",
    experience: "7 Years",
    sessions: "150 Sessions",
  },

  {
    id: 4,
    image: mentor4,
    name: "Michael Lee",
    skill: "Artificial Intelligence",
    rating: "5.0",
    location: "Hyderabad",
    experience: "8 Years",
    sessions: "180 Sessions",
  },
];


function SkillCard() {

  return (

    <section className="mentor-section">

      <div className="mentor-heading">

        <span>Featured Mentors</span>

        <h2>Learn from the Best</h2>

        <p>
          Discover experienced mentors from different domains and begin your
          learning journey with confidence.
        </p>

      </div>


      <div className="mentor-grid">


        {mentors.map((mentor) => (

          <div className="mentor-card" key={mentor.id}>


            <div className="mentor-image">


              <img 
                src={mentor.image} 
                alt={mentor.name} 
              />


              <span className="rating">

                <FaStar /> {mentor.rating}

              </span>


            </div>



            <div className="mentor-content">


              <h3>{mentor.name}</h3>


              <h4>{mentor.skill}</h4>



              <p>
                <FaMapMarkerAlt />
                {mentor.location}
              </p>



              <p>
                <FaClock />
                {mentor.experience}
              </p>



              <div className="mentor-footer">


                <span>
                  {mentor.sessions}
                </span>


                <button>

                  View Profile

                  <FaArrowRight />

                </button>


              </div>


            </div>


          </div>

        ))}


      </div>


    </section>

  );

}


export default SkillCard;