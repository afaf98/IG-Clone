import React from "react";
import "./SelectPictureBack.css";

export default function SelectPictureFront() {
  return (
    <div>
      <div className="flip-card-img-upperline-container">
        <img
          src="https://via.placeholder.com/125x125"
          alt="Avatar"
          className="flip-card-img-upperline"
          height="110"
          width="110"
        />
        <img
          src="https://via.placeholder.com/125x125"
          alt="Avatar"
          className="picture-choose"
          height="140"
          width="140"
        />
      </div>
      <div className="flip-card-img-underline-container">
        <img
          src="https://via.placeholder.com/125x125"
          alt="Avatar"
          className="flip-card-img-underline"
          height="110"
          width="110"
        />
        <img
          src="https://via.placeholder.com/125x125"
          alt="Avatar"
          className="flip-card-img-underline"
          height="110"
          width="110"
        />
      </div>
    </div>
  );
}
