import React from "react";
import "./SelectPictureFront.css";

export default function SelectPictureFront() {
  return (
    <div>
      <div className="flip-card-img-upperline-container">
        <img
          src="https://via.placeholder.com/125x125"
          alt="Avatar"
          className="flip-card-img-upperline"
          height="125"
          width="125"
        />
        <img
          src="https://via.placeholder.com/125x125"
          alt="Avatar"
          className="flip-card-img-upperline"
          height="125"
          width="125"
        />
      </div>
      <div className="flip-card-img-underline-container">
        <img
          src="https://via.placeholder.com/125x125"
          alt="Avatar"
          className="flip-card-img-underline"
          height="125"
          width="125"
        />
        <img
          src="https://via.placeholder.com/125x125"
          alt="Avatar"
          className="flip-card-img-underline"
          height="125"
          width="125"
        />
      </div>
    </div>
  );
}
