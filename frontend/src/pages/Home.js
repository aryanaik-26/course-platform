import React from "react";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import HowItWorks from "../components/HowItWorks";
import CategoryCard from "../components/CategoryCard";
import SkillCard from "../components/SkillCard";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

import categories from "../data/categories";
import skills from "../data/skills";

import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <Hero />

      {/* Search Section */}
      <SearchBar />


      {/* Categories Section */}
      <section className="categories-section">
        <div className="section-header">
          <h2>Explore Categories</h2>
          <p>
            Discover skills from different fields and learn from experts.
          </p>
        </div>

        <div className="category-container">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              icon={category.icon}
              description={category.description}
            />
          ))}
        </div>
      </section>


      {/* How It Works */}
      <HowItWorks />


      {/* Popular Skills */}
      <section className="skills-section">
        <div className="section-header">
          <h2>Popular Skills</h2>
          <p>
            Start learning trending skills from experienced mentors.
          </p>
        </div>

        <div className="skills-container">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              image={skill.image}
              title={skill.title}
              instructor={skill.instructor}
              rating={skill.rating}
              learners={skill.learners}
            />
          ))}
        </div>
      </section>


      {/* Testimonials */}
      <Testimonials />


      {/* Footer */}
      <Footer />

    </div>
  );
}

export default Home;