
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = ({ isAuthenticated, onLogout, username }) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <div className="user-section">
        {isAuthenticated ? (
          <React.Fragment>
            <span className="welcome-message">Welcome, {username}!</span>
            <button onClick={onLogout}>Logout</button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </React.Fragment>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
