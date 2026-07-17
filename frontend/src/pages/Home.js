import React from "react";

import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import CategoryCard from "../components/CategoryCard";

import {
  FaCode,
  FaPaintBrush,
  FaCamera,
  FaDumbbell,
  FaLanguage,
  FaMusic
} from "react-icons/fa";

import "./Home.css";

const featuredUsers = [
  {
    id: 1,
    name: "Arya S",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    location: "Mangalore",
    rating: "4.9",
    teachSkills: ["React", "HTML", "CSS"],
    learnSkills: ["Node.js", "MongoDB"]
  },

  {
    id: 2,
    name: "Rahul Kumar",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    location: "Bangalore",
    rating: "4.8",
    teachSkills: ["Python", "Machine Learning"],
    learnSkills: ["React", "UI/UX"]
  },

  {
    id: 3,
    name: "Sneha Patel",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    location: "Mysore",
    rating: "5.0",
    teachSkills: ["Photography", "Photoshop"],
    learnSkills: ["Video Editing"]
  },

  {
    id: 4,
    name: "Aman Singh",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    location: "Udupi",
    rating: "4.7",
    teachSkills: ["Java", "Spring Boot"],
    learnSkills: ["Cloud Computing"]
  }
];

function Home() {

  return (

    <>

      <Hero />

      <SearchBar />

      {/* Featured Experts */}

      <section className="featured-section">

        <div className="container">

          <div className="section-header">

            <span>Featured Experts</span>

            <h2>
              Learn From Skilled People Around You
            </h2>

            <p>
              Connect with experienced learners,
              exchange knowledge,
              and grow together.
            </p>

          </div>

          <div className="user-grid">

            {featuredUsers.map((user) => (

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

        </div>

      </section>
            {/* Browse Categories */}

      <section className="categories-section">

        <div className="container">

          <div className="section-header">

            <span>Browse Categories</span>

            <h2>Discover Skills</h2>

            <p>
              Explore different skill categories and find
              experienced people ready to share their knowledge.
            </p>

          </div>

          <div className="category-grid">

            <CategoryCard
              title="Programming"
              icon={<FaCode />}
              mentors="320"
              color="linear-gradient(135deg,#5B4BFF,#8F7CFF)"
            />

            <CategoryCard
              title="UI / UX Design"
              icon={<FaPaintBrush />}
              mentors="180"
              color="linear-gradient(135deg,#FF4D8D,#FF8FB8)"
            />

            <CategoryCard
              title="Photography"
              icon={<FaCamera />}
              mentors="145"
              color="linear-gradient(135deg,#00C9A7,#00E4C7)"
            />

            <CategoryCard
              title="Fitness"
              icon={<FaDumbbell />}
              mentors="98"
              color="linear-gradient(135deg,#FF5F6D,#FFC371)"
            />

            <CategoryCard
              title="Languages"
              icon={<FaLanguage />}
              mentors="156"
              color="linear-gradient(135deg,#3A86FF,#5DA9FF)"
            />

            <CategoryCard
              title="Music"
              icon={<FaMusic />}
              mentors="112"
              color="linear-gradient(135deg,#9B5DE5,#C77DFF)"
            />

          </div>

        </div>

      </section>
{/* ================= TESTIMONIALS ================= */}

<section className="testimonial-section">

  <div className="container">

    <div className="section-header">

      <span>Success Stories</span>

      <h2>What Our Community Says</h2>

      <p>
        Thousands of learners and mentors are already
        sharing knowledge and building meaningful
        connections.
      </p>

    </div>

    <div className="testimonial-grid">

      <div className="testimonial-card">

        <img
          src="https://randomuser.me/api/portraits/women/65.jpg"
          alt="User"
        />

        <h3>Sneha Patel</h3>

        <span className="designation">
          UI/UX Designer
        </span>

        <div className="stars">
          ⭐⭐⭐⭐⭐
        </div>

        <p>
          "I found an amazing React mentor within
          two days. The experience felt personal
          and much better than watching videos."
        </p>

      </div>

      <div className="testimonial-card">

        <img
          src="https://randomuser.me/api/portraits/men/52.jpg"
          alt="User"
        />

        <h3>Rahul Kumar</h3>

        <span className="designation">
          Software Engineer
        </span>

        <div className="stars">
          ⭐⭐⭐⭐⭐
        </div>

        <p>
          "Teaching others helped me improve my
          communication skills while learning
          Machine Learning from another member."
        </p>

      </div>

      <div className="testimonial-card">

        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="User"
        />

        <h3>Ananya Rao</h3>

        <span className="designation">
          Student
        </span>

        <div className="stars">
          ⭐⭐⭐⭐⭐
        </div>

        <p>
          "The platform is simple, engaging,
          and I love the concept of learning
          directly from real people."
        </p>

      </div>

    </div>

  </div>

</section>
    </>

  );

}

export default Home;