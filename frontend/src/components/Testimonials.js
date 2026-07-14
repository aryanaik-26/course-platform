import React from "react";
import "./Testimonials.css";

import {
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";

import mentor1 from "../assets/mentors/mentor1.jpg";
import mentor2 from "../assets/mentors/mentor2.jpg";
import mentor3 from "../assets/mentors/mentor3.jpg";


const testimonials = [
  {
    id: 1,
    image: mentor1,
    name: "Aarav Sharma",
    role: "React Learner",
    rating: 5,
    review:
      "SkillSync helped me find an amazing mentor for React development. The learning sessions were practical, interactive, and boosted my confidence.",
  },
  {
    id: 2,
    image: mentor2,
    name: "Priya Nair",
    role: "Photography Student",
    rating: 5,
    review:
      "I connected with a professional photographer through SkillSync. The personalized guidance helped me improve my editing and camera skills quickly.",
  },
  {
    id: 3,
    image: mentor3,
    name: "Rahul Verma",
    role: "AI Enthusiast",
    rating: 5,
    review:
      "The AI mentor I found on SkillSync simplified complex concepts and made machine learning enjoyable. Highly recommended!",
  },
];

function Testimonial() {
  return (
    <section className="testimonial-section">

      <div className="testimonial-heading">

        <span>Testimonials</span>

        <h2>What Our Learners Say</h2>

        <p>
          Hear from students who have successfully learned new skills through
          SkillSync.
        </p>

      </div>

      <div className="testimonial-grid">

        {testimonials.map((item) => (

          <div className="testimonial-card" key={item.id}>

            <FaQuoteLeft className="quote-icon" />

            <p className="review">
              {item.review}
            </p>

            <div className="stars">

              {[...Array(item.rating)].map((_, index) => (
                <FaStar key={index} />
              ))}

            </div>

            <div className="testimonial-user">

              <img src={item.image} alt={item.name} />

              <div>

                <h3>{item.name}</h3>

                <span>{item.role}</span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Testimonial;