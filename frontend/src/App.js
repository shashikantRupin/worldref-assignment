import React, { useState } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaSignOutAlt } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./components/HomePage/HompePage";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Navbar from "./components/Navbar/Navbar";
import "./App.css"

const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (user) => {
    setAuthenticated(true);
    setUsername(user);
    toast.success(`Login successful! Welcome, ${user}!`);
  };

  const handleLogout = () => {
    setAuthenticated(false);
    toast.info(`Logout successful! Goodbye, ${username}!`, {
      icon: <FaSignOutAlt />, // Use the sign-out icon
      className: "logout-toast", 
    });
    setUsername(""); 
  };

  const handleRegister = (user) => {
    setAuthenticated(true);
    setUsername(user);

    // Use toast.success for a success message
    toast.success(`Registration successful! Welcome, ${user}!`);
  };

  return (
    <div>
      <Navbar
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
        username={username}
      />
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/register"
          element={
            isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <SignUp onRegister={handleRegister} />
            )
          }
        />
        <Route
          path="/"
          element={
            <HomePage
              isAuthenticated={isAuthenticated}
              onLogout={handleLogout}
            />
          }
        />
      </Routes>

      {/* ToastContainer is the component where toast messages will be displayed */}
      <ToastContainer />
    </div>
  );
};

export default App;
