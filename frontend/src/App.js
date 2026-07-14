import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";
import MentorProfile from "./pages/MentorProfile";
import Requests from "./pages/Requests";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Main Pages */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/explore" element={<Explore />} />

          {/* Mentor */}
          <Route path="/mentor/:id" element={<MentorProfile />} />

          {/* Requests */}
          <Route path="/requests" element={<Requests />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;