import React from "react";
import "./Navbar.css";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/authService";
import logo from "../assets/logo.png";

function Navbar() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <img src={logo} alt="SkillSync Logo" />
        <h2>SkillSync</h2>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/explore">Explore</Link>
        </li>

        <li>
          <Link to="/requests">Requests</Link>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

      <div className="navbar-right">

        <div className="search-icon">
          <FaSearch />
        </div>

        <button className="mentor-btn">
          Become a Mentor
        </button>

        {
          token ? (
            <>
              <span className="user-name">
                Welcome, {user?.name}
              </span>

              <button
                className="login-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <button
              className="login-btn"
              onClick={() => navigate("/login")}
            >
              <FaUserCircle />
              Login
            </button>
          )
        }

      </div>

    </nav>
  );
}

export default Navbar;