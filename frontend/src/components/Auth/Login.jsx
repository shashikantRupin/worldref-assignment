import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css"

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const user = storedUsers.find((u) => u.username === username);

    if (user && user.password === password) {
      onLogin(username);
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button onClick={handleLogin}>Login</button>
      {error && <p className="error-message">{error}</p>}
      <p>
        Don't have an account?{" "}
        <Link to="/register">
          <div className="register-link">Register here</div>
        </Link>
      </p>
    </div>
  );
};

export default Login;
