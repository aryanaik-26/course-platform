import React, { useEffect, useState } from "react";
import "./Home.css";

import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import HowItWorks from "../components/HowItWorks";
import CategoryCard from "../components/CategoryCard";
import SkillCard from "../components/SkillCard";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

import { getHomeData } from "../services/userService";

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadHomeData();
  }, []);

  const loadHomeData = async () => {
    try {
      const data = await getHomeData();
      setCategories(data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home">

      <Hero />

      <SearchBar />

      {/* Categories */}

      <section className="categories-section">

        <div className="section-header">

          <h2>Explore Categories</h2>

          <p>
            Discover skills from different fields and learn from experts.
          </p>

        </div>

        <div className="category-container">

          <CategoryCard categories={categories} />

        </div>

      </section>

      <HowItWorks />

      {/* Featured Mentors */}

      <SkillCard />

      <Testimonials />

      <Footer />

    </div>
  );
}

export default Home;