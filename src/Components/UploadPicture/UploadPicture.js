import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useToken from "../../context/useToken";
import "./UploadPicture.css";
import getVideo, { takePhoto, paintToCanvas } from "../../services/getVideo";

const acceptedTypes = ["image/png", "image/jpg", "image/jpeg"];

export default function UploadPicture() {
  const [file, setFile] = useState();
  const [uploadProgress, updateUploadProgress] = useState(0);
  const [imageURI, setImageURI] = useState();
  const [uploadStatus, setUploadStatus] = useState(false);
  const [uploading, setUploading] = useState(false);
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const stripRef = useRef(null);

  const { token } = useToken();
  const stop = (e) => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();

    for (let i = 0; i < tracks.length; i++) {
      let track = tracks[i];
      track.stop();
    }

    videoRef.current.srcObject = null;
  };
  const handleTakePicture = async (e) => {
    e.preventDefault();

    const img = await takePhoto(photoRef, stripRef);
    // const url = "data:image/png;base6....";
    const res = await fetch(img);
    const blob = await res.blob();
    const newFile = new File([blob], "Test", { type: "image/png" });
    console.log("File", newFile);
    setFile(newFile);
    stop(e);
  };
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const isValidFileType = (fileType) => {
    return acceptedTypes.includes(fileType);
  };
  useEffect(() => {
    getVideo(videoRef);
  }, [videoRef]);

  const handleFileUpload = async (e) => {
    e.preventDefault();
    console.log("filetype", file);
    if (!isValidFileType(file.type)) {
      alert("Only images are allowed (png or jpg)");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("image", file);
    console.log("file", file);

    await axios({
      method: "post",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
      data: formData,
      url: "http://localhost:5000/images",
      onUploadProgress: (ev) => {
        const progress = (ev.loaded / ev.total) * 100;
        updateUploadProgress(Math.round(progress));
      },
    })
      .then((resp) => {
        // our mocked response will always return true
        // in practice, you would want to use the actual response object
        console.log("response", resp);
        setUploadStatus(true);
        setUploading(false);
        getBase64(file, (uri) => {
          setImageURI(uri);
        });
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="upload-picture-container">
      <div className="upload-picture-form">
        <form onSubmit={handleFileUpload} className="form">
          <fieldset className="fieldset">
            <video
              onCanPlay={() => paintToCanvas(videoRef, photoRef)}
              ref={videoRef}
            />
            <canvas ref={photoRef} style={{ display: "none" }} />
            <button onClick={handleTakePicture}>Take a photo</button>

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
            {/* <button className="file-chooser-button" type="button">
            {file ? "1 file selected" : "Choose File"}
          </button> */}
            <button className="upload-button" type="submit">
              Upload
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
