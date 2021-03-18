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
  const [response, setResponse] = useState();
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const stripRef = useRef(null);
  const history = useHistory();
  const { token, checkToken, logout } = useToken();

  useEffect(() => {
    async function isValidToken() {
      const response = await checkToken();
      console.log("Heyy", response);
      if (response.status !== 200) {
        logout();
        history.push("/login");
      }
    }
    isValidToken();
  }, []);

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
      <div className={!response ? "upload-picture-form" : "display-none"}>
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
