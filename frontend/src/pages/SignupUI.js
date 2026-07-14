import { useState } from "react";
import { signup } from "../auth/auth";
import "../styles/auth.css";

function SignupUI({ switchToLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await signup(email, password);
      alert("Signup successful");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Create Account</h2>

        <input
          className="input"
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="input"
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="button" onClick={handleSignup}>
          Sign Up
        </button>

        <span className="link" onClick={switchToLogin}>
          Already have an account? Login
        </span>
      </div>
    </div>
  );
}

export default SignupUI;