import React from "react";
import "./FilterPictureFront.css";

export default function SelectPictureFront() {
  return (
    <div>
      <div className="flip-card-img-upperline-container">
        <img
          src="https://via.placeholder.com/125x125"
          alt="Avatar"
          className="flip-card-img-upperline"
          height="200"
          width="200"
        />
      </div>
      <div className="filter-container">
        <div className="filter-chrome-front filter-button ">C</div>
        <div className="filter-sepia-front filter-button ">S</div>
        <div className="filter-blackwhite-front filter-button ">B&W</div>
      </div>
    </div>
  );
}
