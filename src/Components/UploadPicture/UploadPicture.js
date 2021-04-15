import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./UploadPicture.css";
import { Redirect } from "react-router-dom";
import { handleFileUpload, acceptedTypes } from "../../services/uploadPicture";
import useToken from "../../context/useToken";
import useNewPicture from "../../context/newPictureContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen, faUpload } from "@fortawesome/free-solid-svg-icons";

export default function UploadPicture() {
  const { token } = useToken();
  const {
    file,
    setFile,
    uploadProgress,
    updateUploadProgress,
    imageURI,
    setImageURI,
    uploadStatus,
    setUploadStatus,
    uploading,
    setUploading,
    response,
    setResponse,
  } = useNewPicture();
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

  return (
    <div className="upload-picture-container">
      <div className={!response ? "upload-picture-form" : "display-none"}>
        <h2 className="title-upload">Upload here your picture!</h2>
        {navigator.mediaDevices && (
          <form onSubmit={handleOnSubmit} className="form">
            {file && (
              <img
                src={URL.createObjectURL(file)}
                alt="preview"
                className="image-preview-box"
              />
            )}
            <input
              className="file-input"
              type="file"
              name="file"
              id="file"
              accept={acceptedTypes.toString()}
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setFile(e.target.files[0]);
                }
              }}
            />
            <div className="buttons">
              <div className={file ? "choose-file-text" : "choose-file-icon"}>
                <label for="file">
                  {file ? (
                    file.name
                  ) : (
                    <FontAwesomeIcon size="100px" icon={faFolderOpen} />
                  )}
                </label>
              </div>
              <button className="upload-button" type="submit">
                <FontAwesomeIcon size="100px" icon={faUpload} />
              </button>
            </div>
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
              <FontAwesomeIcon size="100px" icon={faUpload} />
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

      <div>
        {response && (
          <div
            className={
              response.data.message === "Image uploaded"
                ? "success"
                : "display-none"
            }
          >
            {response.data.message === "Image uploaded" ? (
              <Redirect to="/home" />
            ) : (
              "Oops! Something went wrong!"
            )}
          </div>
        )}
      </div>
    </div>
  );
}
