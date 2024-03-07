import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"

const SignUp = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = storedUsers.some((user) => user.username === username);

    if (userExists) {
      setError(
        "Username already registered. Please choose a different username."
      );
    } else {
      const newUser = { username, password };
      const updatedUsers = [...storedUsers, newUser];

      localStorage.setItem("users", JSON.stringify(updatedUsers));
      onRegister(username);
    }
  };

  return (
    <div className="auth-form">
      <h2>Register</h2>
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
      <button onClick={handleRegister}>Register</button>
      {error && <p className="error-message">{error}</p>}
      <p>
        Already have an account?{" "}
        <Link to="/login" className="login-link">
          Login here
        </Link>
      </p>
    </div>
  );
};
export default SignUp;
