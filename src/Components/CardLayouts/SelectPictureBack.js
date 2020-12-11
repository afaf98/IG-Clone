import React from "react";
import "./SelectPictureBack.css";

export default function SelectPictureFront() {
  return (
    <div>
      <div className="flip-card-img-upperline-container">
        <img
          src="https://via.placeholder.com/125x125"
          alt="Avatar"
          className="flip-card-img-upperline picture-not-selected"
          height="125"
          width="125"
        />
        <div className="picture-selected-container flip-card-img-upperline">
          <div className="selected-border"></div>
          <img
            src="https://via.placeholder.com/125x125"
            alt="Avatar"
            className="picture-choose "
            height="125"
            width="125"
          />
        </div>
      </div>
      <div className="flip-card-img-underline-container">
        <img
          src="https://via.placeholder.com/125x125"
          alt="Avatar"
          className="flip-card-img-underline picture-not-selected"
          height="125"
          width="125"
        />
        <img
          src="https://via.placeholder.com/125x125"
          alt="Avatar"
          className="flip-card-img-underline picture-not-selected"
          height="125"
          width="125"
        />
      </div>
    </div>
  );
}
