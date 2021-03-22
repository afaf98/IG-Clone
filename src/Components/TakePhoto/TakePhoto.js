import React, { useEffect, useRef, useState } from "react";
import getVideo, {
  takePhoto,
  paintToCanvas,
  stop,
} from "../../services/getVideo";

import "./TakePhoto.css";

export default function TakePhoto() {
  const [file, setFile] = useState();

  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const stripRef = useRef(null);

  const handleTakePicture = async (e) => {
    e.preventDefault();
    const img = await takePhoto(photoRef, stripRef);
    setFile(img);
    stop(videoRef);
  };
  console.log("file", file);
  useEffect(() => {
    console.log("HEllo", videoRef);
    if (navigator.mediaDevices) {
      getVideo(videoRef);
    }

    return () => {
      // console.log("VideoRef", videoRef);
      // navigator.mediaDevices
      //   .getUserMedia({ video: { width: 300 } })
      //   .then((stream) => {
      //     // let video = videoRef.current;
      //     // video.srcObject = stream;
      //     // video.play();
      //     console.log("Stream", stream);
      //     const tracks = stream.getTracks();
      //     console.log("Tracks", tracks);
      //     for (let i = 0; i < tracks.length; i++) {
      //       let track = tracks[i];
      //       track.stop();
      //     }
      //   })
      //   .catch((err) => {
      //     console.error("error:", err);
      //   });
      // stop(videoRef);
      // if (videoRef.current?.srcObject) {
      // }
    };
  }, [videoRef]);
  return (
    <div>
      {file && (
        <img src={URL.createObjectURL(file)} className="image-preview-box" />
      )}
      <fieldset className="fieldset">
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
          Take a photo
        </button>
      </fieldset>
    </div>
  );
}
