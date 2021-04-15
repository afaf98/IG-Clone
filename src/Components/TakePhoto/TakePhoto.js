import React, { useEffect, useRef } from "react";
import getVideo, {
  takePhoto,
  paintToCanvas,
  stop,
} from "../../services/getVideo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faCircle } from "@fortawesome/free-solid-svg-icons";
import useNewPicture from "../../context/newPictureContext";

import "./TakePhoto.css";
import { useHistory } from "react-router";

export default function TakePhoto() {
  const { file, setFile } = useNewPicture();
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const stripRef = useRef(null);
  const history = useHistory();

  const handleTakePicture = async (e) => {
    e.preventDefault();
    const img = await takePhoto(photoRef, stripRef);
    setFile(img);
    stop(videoRef);
    history.push("/upload");
  };
  useEffect(() => {
    if (navigator.mediaDevices) {
      getVideo(videoRef);
    }
  }, [videoRef]);

  return (
    <div className="take-photo-page">
      <p className="title-smile"> Smile!</p>
      <fieldset className={file ? "d-none" : "fieldset"}>
        <video
          ref={videoRef}
          className="video-display"
          style={{ display: file ? "none" : "block" }}
          onCanPlay={() => paintToCanvas(videoRef, photoRef)}
        />
        <canvas ref={photoRef} style={{ display: "none" }} />

        <div>
          <div ref={stripRef} />
        </div>
        <button className="take-photo-button" onClick={handleTakePicture}>
          <FontAwesomeIcon size="100px" icon={faCamera} />
        </button>
      </fieldset>
    </div>
  );
}
