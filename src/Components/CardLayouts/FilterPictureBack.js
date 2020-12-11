import React from "react";
import "./FilterPictureBack.css";

export default function SelectPictureFront() {
  return (
    <div>
      <div className="flip-card-img-upperline-container">
        <img
          src="https://images.unsplash.com/photo-1606012675698-490beaff9335?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=125&ixlib=rb-1.2.1&q=80&w=125"
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
