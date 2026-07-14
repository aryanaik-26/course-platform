import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Data:", formData);

    // Firebase authentication will be added here

    navigate("/dashboard");
  };


  return (
    <div className="login-page">

      <div className="login-container">

        <div className="login-left">
          <h1>
            Welcome Back 👋
          </h1>

          <p>
            Continue your learning journey and connect with
            skilled mentors.
          </p>
        </div>


        <div className="login-card">

          <h2>Login</h2>

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>


            <div className="input-group">
              <label>Password</label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>


            <button type="submit" className="login-btn">
              Login
            </button>


          </form>


          <div className="login-footer">

            <p>
              Don't have an account?
              <Link to="/signup">
                Sign Up
              </Link>
            </p>

          </div>


        </div>

      </div>

    </div>
  );
}


export default Login;