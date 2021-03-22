import React, { useEffect, useRef, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./UploadPicture.css";
import getVideo, {
  takePhoto,
  paintToCanvas,
  stop,
} from "../../services/getVideo";
import { handleFileUpload, acceptedTypes } from "../../services/uploadPicture";
import useToken from "../../context/useToken";

export default function UploadPicture() {
  const [file, setFile] = useState();
  const [uploadProgress, updateUploadProgress] = useState(0);
  const [imageURI, setImageURI] = useState();
  const [uploadStatus, setUploadStatus] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [response, setResponse] = useState();
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const stripRef = useRef(null);
  const { token } = useToken();

  const handleTakePicture = async (e) => {
    e.preventDefault();
    const img = await takePhoto(photoRef, stripRef);
    setFile(img);
    stop(videoRef);
  };
  console.log("Response", response);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    await handleFileUpload(
      updateUploadProgress,
      setImageURI,
      setUploadStatus,
      setUploading,
      setResponse,
      token,
      file
    );
  };

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
    <div className="upload-picture-container">
      <div className={!response ? "upload-picture-form" : "display-none"}>
        <h2 className="title">Upload here your picture!</h2>
        {navigator.mediaDevices && (
          <form onSubmit={handleOnSubmit} className="form">
            {file && (
              <img
                src={URL.createObjectURL(file)}
                className="image-preview-box"
              />
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
              <input
                className="file-input"
                type="file"
                name="file"
                id="file"
                // label={file ? "1 file selected" : "Choose File"}
                accept={acceptedTypes.toString()}
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setFile(e.target.files[0]);
                  }
                }}
              />
              <div className="choose-file">
                <label for="file">{file ? file.name : "Choose File"}</label>
              </div>
              <button className="take-photo-button" onClick={handleTakePicture}>
                Take a photo
              </button>
              <button className="upload-button" type="submit">
                Upload
              </button>
            </fieldset>
          </form>
        )}
        {!navigator.mediaDevices && (
          <form onSubmit={handleOnSubmit}>
            <input
              type="file"
              capture
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setFile(e.target.files[0]);
                }
              }}
            />
            <button className="upload-button" type="submit">
              Upload
            </button>
          </form>
        )}
      </div>
      {uploading ? (
        <div className="progress-bar-container">
          <CircularProgressbar
            value={uploadProgress}
            text={`${uploadProgress}% uploaded`}
            styles={buildStyles({
              textSize: "10px",
              pathColor: "teal",
            })}
          />
        </div>
      ) : null}

      <div className="image-preview-box">
        {response && (
          <div
            className={
              response.data.message === "Image uploaded"
                ? "success"
                : "display-none"
            }
          >
            {response.data.message}
          </div>
        )}
        {uploadStatus && imageURI ? (
          <img src={imageURI} alt="preview" className="preview-image" />
        ) : null}
      </div>
    </div>
  );
}
