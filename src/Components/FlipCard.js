import React from "react";
import Card from "../images/tryout.jpg";
import "./FlipCard.css";

export default function FlipCard() {
  return (
    // <div className="flip-card-conainer">
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={Card} alt="Avatar" className="flip-card-img" />
        </div>
        <div className="flip-card-back">
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
      <div className="flip-card-underText">
        <h2>Choose your favorite picture..</h2>
      </div>
    </div>
    // </div>
  );
}
