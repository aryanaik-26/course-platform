import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">

        <Link to="/" className="logo">
          Skill<span>Bridge</span>
        </Link>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>

          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/explore" onClick={() => setMenuOpen(false)}>
            Explore
          </Link>

          <Link to="/requests" onClick={() => setMenuOpen(false)}>
            Requests
          </Link>

          <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
            Dashboard
          </Link>

        </nav>

        <div className="nav-buttons">

          <Link to="/login">
            <button className="login-btn">
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button className="signup-btn">
              Join Now
            </button>
          </Link>

        </div>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </header>
  );
}

export default Navbar;