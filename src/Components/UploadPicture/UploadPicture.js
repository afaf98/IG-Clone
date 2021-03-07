import React, { useState } from "react";
import axios from "axios";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const acceptedTypes = ["image/png", "image/jpg", "image/jpeg"];

export default function UploadPicture() {
  const [file, setFile] = useState();
  const [uploadProgress, updateUploadProgress] = useState(0);
  const [imageURI, setImageURI] = useState();
  const [uploadStatus, setUploadStatus] = useState(false);
  const [uploading, setUploading] = useState(false);

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    // FileReader API Spec: https://developer.mozilla.org/en-US/docs/Web/API/FileReader/FileReader
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const isValidFileType = (fileType) => {
    return acceptedTypes.includes(fileType);
  };

  const handleFileUpload = (e) => {
    e.preventDefault();

    if (!isValidFileType(file.type)) {
      alert("Only images are allowed (png or jpg)");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("image", file);
    console.log("FormData", formData);
    for (var key of formData.entries()) {
      console.log(key[0] + ", " + key[1]);
    }
    console.log("file", file);

    axios({
      method: "post",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
      url: "http://localhost:5000/upload",
      onUploadProgress: (ev) => {
        const progress = (ev.loaded / ev.total) * 100;
        updateUploadProgress(Math.round(progress));
      },
    })
      .then((resp) => {
        // our mocked response will always return true
        // in practice, you would want to use the actual response object
        setUploadStatus(true);
        setUploading(false);
        getBase64(file, (uri) => {
          setImageURI(uri);
        });
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <div className="image-preview-box">
        {uploadStatus && imageURI ? (
          <img src={imageURI} alt="preview" />
        ) : (
          <span>A preview of your photo will appear here.</span>
        )}
      </div>

      <form onSubmit={handleFileUpload} className="form">
        <button className="file-chooser-button" type="button">
          {file ? "1 file selected" : "Choose File"}
          <input
            className="file-input"
            type="file"
            name="file"
            accept={acceptedTypes.toString()}
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setFile(e.target.files[0]);
              }
            }}
          />
        </button>
        <button className="upload-button" type="submit">
          Upload
        </button>
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
  );
}
