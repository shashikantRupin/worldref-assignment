import React, { useState } from "react";
import "./App.css";
import { Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HompePage";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (user) => {
    setAuthenticated(true);
    setUsername(user);
  };

  const handleLogout = () => {
    setAuthenticated(false);
  };
  const handleRegister = (user) => {
    alert("user successfully registered!");

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
    </div>
  );
};

export default App;
