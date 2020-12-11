import React from "react";
import "./SelectPictureFront.css";

export default function SelectPictureFront() {
  return (
    <div>
      <div className="flip-card-img-upperline-container">
        <img
          src="https://images.unsplash.com/photo-1605194000384-439c3ced8d15?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=125&ixlib=rb-1.2.1&q=80&w=125"
          alt="Avatar"
          className="flip-card-img-upperline"
          height="125"
          width="125"
        />
        <img
          src="https://images.unsplash.com/photo-1606012675698-490beaff9335?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=125&ixlib=rb-1.2.1&q=80&w=125"
          alt="Avatar"
          className="flip-card-img-upperline"
          height="125"
          width="125"
        />
      </div>
      <div className="flip-card-img-underline-container">
        <img
          src="https://images.unsplash.com/photo-1606118614925-6ba3aba2f0b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=125&ixlib=rb-1.2.1&q=80&w=125"
          alt="Avatar"
          className="flip-card-img-underline"
          height="125"
          width="125"
        />
        <img
          src="https://images.unsplash.com/photo-1605387776801-9be027858678?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=125&ixlib=rb-1.2.1&q=80&w=125"
          alt="Avatar"
          className="flip-card-img-underline"
          height="125"
          width="125"
        />
      </div>
    </div>
  );
}
