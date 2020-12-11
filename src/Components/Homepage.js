import React from "react";
import FlipCard from "./FlipCard";
import SelectPictureFront from "./CardLayouts/SelectPictureFront";
import SelectPictureBack from "./CardLayouts/SelectPictureBack";
import FilterPictureFront from "./CardLayouts/FilterPictureFront";
import FilterPictureBack from "./CardLayouts/FilterPictureBack";
import PostedPictureFront from "./CardLayouts/PostedPictureFront";
import PostedPictureBack from "./CardLayouts/PostedPictureBack";

export default function Homepage() {
  return (
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
  );
}
