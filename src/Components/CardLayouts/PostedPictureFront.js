import React from "react";
import "./PostedPictureFront.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

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
      <div className="description-container">
        <div className="description">What a day!</div>
        {/* <div className="heart"></div> */}
        <FontAwesomeIcon icon={faHeart} className="heart" size="lg" />
      </div>
    </div>
  );
}
