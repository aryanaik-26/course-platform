import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { register } from "../services/authService";

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "learner"
  });


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await register(formData);

    console.log(response);

    alert("Registration successful");

    navigate("/login");

  } catch (error) {
    alert(
      error.response?.data?.message ||
      "Registration failed"
    );
  }
};


  return (

    <div className="signup-page">


      <div className="signup-container">


        <div className="signup-card">


          <h1>
            Create Account 🚀
          </h1>


          <p className="signup-text">
            Join our skill community and start learning or teaching today.
          </p>



          <form onSubmit={handleSubmit}>


            <div className="input-group">

              <label>
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>




            <div className="input-group">

              <label>
                Email
              </label>

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

              <label>
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
                required
              />

            </div>




            <div className="input-group">

              <label>
                Join As
              </label>


              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
              >

                <option value="learner">
                  Learner
                </option>


                <option value="mentor">
                  Mentor
                </option>


              </select>

            </div>




            <button
              type="submit"
              className="signup-btn"
            >
              Sign Up
            </button>



          </form>




          <div className="signup-footer">

            <p>
              Already have an account?
              <Link to="/login">
                Login
              </Link>
            </p>

          </div>



        </div>


      </div>


    </div>

  );

}


export default Signup;