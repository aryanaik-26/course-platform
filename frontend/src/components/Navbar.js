import React from "react";
import "./Navbar.css";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import logo from "../assets/logo.png";


function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <img src={logo} alt="SkillSync Logo" />
        <h2>SkillSync</h2>
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/explore">Explore</a></li>
        <li><a href="/requests">Requests</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
      </ul>

      <div className="navbar-right">

        <div className="search-icon">
          <FaSearch />
        </div>

        <button className="mentor-btn">
          Become a Mentor
        </button>

        <button className="login-btn">
          <FaUserCircle />
          Login
        </button>

      </div>

    </nav>
  );
}

export default Navbar;