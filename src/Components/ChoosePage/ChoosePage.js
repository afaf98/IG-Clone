import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faUpload } from "@fortawesome/free-solid-svg-icons";

import { useHistory } from "react-router";
import "./ChoosePage.css";

export default function ChoosePage() {
  const history = useHistory();

  return (
    <div className="choose-page">
      <h2 className="title">Share your new Picture!</h2>
      <p className="under-title">What would you like?</p>
      <div className="button-field">
        <div className="f-column">
          <button
            className="button"
            onClick={() => {
              history.push("/takephoto");
            }}
          >
            <FontAwesomeIcon size="100px" icon={faCamera} />
          </button>
          <label for="button">Take a Photo</label>
        </div>
        <div className="f-column">
          <button
            className="button"
            onClick={() => {
              history.push("/upload");
            }}
          >
            <FontAwesomeIcon size="100px" icon={faUpload} />
          </button>
          <label for="button">Upload Picture</label>
        </div>
      </div>
    </div>
  );
}
