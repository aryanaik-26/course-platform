import { useState } from "react";
import { login } from "../auth/auth";
import "../styles/auth.css";

function LoginUI({ switchToSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
      alert("Login successful");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Welcome Back</h2>

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

        <button className="button" onClick={handleLogin}>
          Login
        </button>

        <span className="link" onClick={switchToSignup}>
          Don’t have an account? Sign up
        </span>
      </div>
    </div>
  );
}

export default LoginUI;