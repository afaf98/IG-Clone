import React from "react";
import FlipCard from "./FlipCard/FlipCard";
import SelectPictureFront from "./CardLayouts/SelectPictureFront";
import SelectPictureBack from "./CardLayouts/SelectPictureBack";
import FilterPictureFront from "./CardLayouts/FilterPictureFront";
import FilterPictureBack from "./CardLayouts/FilterPictureBack";
import PostedPictureFront from "./CardLayouts/PostedPictureFront";
import PostedPictureBack from "./CardLayouts/PostedPictureBack";
import "./Homepage.css";
import { useHistory } from "react-router";

export default function Homepage() {
  const history = useHistory();
  return (
    <div className="homepage">
      <div className="welcome">
        Welcome to <b>Arbi</b> the Photo Sharing App!
      </div>
      <div className="flip-card-container">
        <FlipCard
          text="Pick your picture"
          LayoutFront={SelectPictureFront}
          LayoutBack={SelectPictureBack}
        />
        <FlipCard
          text="Apply a nice filter"
          LayoutFront={FilterPictureFront}
          LayoutBack={FilterPictureBack}
        />
        <FlipCard
          text="Ready to be posted!"
          LayoutFront={PostedPictureFront}
          LayoutBack={PostedPictureBack}
        />
      </div>
      <div className="buttons-home">
        <button
          className="home-button-create"
          onClick={() => history.push("/signup")}
        >
          Create a new account
        </button>
      </div>
    </div>
  );
}
