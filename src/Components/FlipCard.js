import React from "react";
import Card from "../images/tryout.jpg";
import "./FlipCard.css";

export default function FlipCard(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <props.LayoutFront />
          </div>
          <div className="flip-card-back">
            <props.LayoutBack />
          </div>
        </div>
      </div>
      <div className="card-underText">
        <h2>{props.text}</h2>
      </div>
    </div>
  );
}
