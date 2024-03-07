import React from "react";
import { useHistory } from "react-router-use-history";
import Card from "../Card/Card";


const HomePage = ({ isAuthenticated, onLogout }) => {
  const history = useHistory();

  const handleAddToDeals = () => {
    // Implement logic for adding to deals
    alert("Added to Deals!");
  };

  const handleCheckDetails = () => {
    // Implement logic for checking details
    alert("Checking Details!");
  };

  const handleLoginRedirect = () => {
    history.push("/login");
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Discover the Wonders of India</h1>
      <Card isAuthenticated={isAuthenticated} />
    </div>
  );
};

export default HomePage;
