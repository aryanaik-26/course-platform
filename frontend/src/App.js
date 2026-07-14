HEAD
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MentorProfile from "./pages/MentorProfile";
import Requests from "./pages/Requests";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";

import "./App.css";


function App() {

  return (

    <BrowserRouter>

      <div className="App">


        <Navbar />


        <Routes>


          {/* Home Page */}
          <Route
            path="/"
            element={<Home />}
          />


          {/* Authentication */}
          <Route
            path="/login"
            element={<Login />}
          />


          <Route
            path="/signup"
            element={<Signup />}
          />



          {/* Main Pages */}
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />


          <Route
            path="/explore"
            element={<Explore />}
          />



          {/* Mentor */}
          <Route
            path="/mentor/:id"
            element={<MentorProfile />}
          />


          <Route
            path="/requests"
            element={<Requests />}
          />



        </Routes>


      </div>


    </BrowserRouter>


import { useState } from "react";
import useAuth from "./auth/useAuth";

import LoginUI from "./pages/LoginUI";
import SignupUI from "./pages/SignupUI";
import Dashboard from "./pages/Dashboard";

function App() {
  const user = useAuth();
  const [isSignup, setIsSignup] = useState(false);

  // 🔥 FIXED LOGIC
  if (user === undefined) return <h2>Loading...</h2>;

  if (user) return <Dashboard user={user} />;

  return isSignup ? (
    <SignupUI switchToLogin={() => setIsSignup(false)} />
  ) : (
    <LoginUI switchToSignup={() => setIsSignup(true)} />
 
  );

}


export default App