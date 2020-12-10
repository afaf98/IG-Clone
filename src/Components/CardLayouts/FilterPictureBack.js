import React from "react";
import "./FilterPictureBack.css";

export default function SelectPictureFront() {
  return (
    <div>
      <div className="flip-card-img-upperline-container">
        <img
          src="https://via.placeholder.com/125x125"
          alt="Avatar"
          className="flip-card-img-filter"
          height="200"
          width="200"
        />
      </div>
      <div className="filter-container">
        <div className="filter-chrome-back">C</div>
        <div className="filter-sepia-back">S</div>
        <div className="filter-blackwhite-back">B&W</div>
      </div>
    </div>
  );
}
