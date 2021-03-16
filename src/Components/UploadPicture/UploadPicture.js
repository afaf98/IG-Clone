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
import { useHistory } from "react-router";

export default function UploadPicture() {
  const [file, setFile] = useState();
  const [uploadProgress, updateUploadProgress] = useState(0);
  const [imageURI, setImageURI] = useState();
  const [uploadStatus, setUploadStatus] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [response, setResponse] = useState({ data: "upload" });
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const stripRef = useRef(null);
  const history = useHistory();
  const { token } = useToken();

  if (!token) {
    history.push("/login");
  }

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
    getVideo(videoRef);
  }, [videoRef]);

  return (
    <div className="upload-picture-container">
      <div className={response ? "upload-picture-form" : "display-none"}>
        <h2 className="title">Upload here your picture!</h2>
        <form onSubmit={handleOnSubmit} className="form">
          <fieldset className="fieldset">
            <video
              ref={videoRef}
              className="video-display"
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
              label={file ? "1 file selected" : "Choose File"}
              accept={acceptedTypes.toString()}
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setFile(e.target.files[0]);
                }
              }}
            />
            <button className="upload-button" type="submit">
              Upload
            </button>
            <button className="take-photo-button" onClick={handleTakePicture}>
              Take a photo
            </button>
          </fieldset>
        </form>
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
      </div>
      {/* <div
        className={
          response.data.message === "Image uploaded"
            ? "success"
            : "display-none"
        }
      >
        {response.data.message}
      </div> */}
      <div className="image-preview-box">
        {uploadStatus && imageURI ? (
          <img src={imageURI} alt="preview" className="preview-image" />
        ) : (
          <span>A preview of your photo will appear here.</span>
        )}
      </div>
    </div>
  );
}
