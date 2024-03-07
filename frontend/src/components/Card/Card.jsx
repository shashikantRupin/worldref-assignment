import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-use-history";
import world from "./india.jpg";
import "./card.css";

const Card = ({ isAuthenticated }) => {
  const [card, setCard] = useState();
  const history = useHistory();

  const defautcreateCard = () => {
    const defaultRowCount = 4;
    const newRows = [];
    for (let i = 0; i < defaultRowCount; i++) {
      const newRow = {
        id: i + 1,
      };
      newRows.push(newRow);
    }

    setCard(newRows);
  };

  const addToDeals = () => {
    if (isAuthenticated) {
      alert("Now You can add the deals");
    } else {
      // Redirect to the login page
      history.push("/login");
    }
  };

  const checkDetails = () => {
    if (isAuthenticated) {
      alert("Now You can check the details");
    } else {
      // Redirect to the login page
      history.push("/login");
    }
  };

  useEffect(() => {
    defautcreateCard();
  }, []);

  return (
    <div className="container top_cards">
      <div className="row">
        {card?.map((item, i) => (
          <div className="card" key={i}>
            <img src={world} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Capturing the Soul of India: A Tapestry of Colors, Cultures, and
                Timeless Traditions.
              </p>
              <div className="deals_btn">
                <button className="btn btn-primary" onClick={addToDeals}>
                  Add to Deals
                </button>
                <button className="btn btn-primary" onClick={checkDetails}>
                  Check Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
