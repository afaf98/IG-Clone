import React from "react";
import "./FilterPictureBack.css";

export default function SelectPictureFront() {
  return (
    <div>
      <div className="flip-card-img-upperline-container">
        <img
          src="https://via.placeholder.com/125x125"
          alt="Avatar"
          className="flip-card-img-filter flip-card-img-upperline"
          height="200"
          width="200"
        />
      </div>
      <div className="filter-container">
        <div className="filter-chrome-back filter-button">C</div>
        <div className="filter-sepia-back filter-button">S</div>
        <div className="filter-blackwhite-back filter-button">B&W</div>
      </div>
    </div>
  );
}
