import React from "react";
import "./PostedPictureBack.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

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
      <div className="description-container">
        <div className="description">What a day!</div>
        {/* <div className="heart"></div> */}
        <FontAwesomeIcon
          icon={faHeart}
          className="heart-back-description"
          size="lg"
        />
      </div>
      <div className="comment-container">
        <FontAwesomeIcon
          icon={faHeart}
          className="heart-back-comment"
          size="lg"
        />

        <div className="comment">Cool!</div>
      </div>
    </div>
  );
}
