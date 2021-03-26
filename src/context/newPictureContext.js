// Manage a file state
// It should pass too any component, setFile,file
// Upload

import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const NewPictureContext = createContext({});

export function NewPictureProvider(props) {
  const [file, setFile] = useState();
  const [uploadProgress, updateUploadProgress] = useState(0);
  const [imageURI, setImageURI] = useState();
  const [uploadStatus, setUploadStatus] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [response, setResponse] = useState();

  const history = useHistory();

  return (
    <NewPictureContext.Provider
      value={{
        file: file,
        setFile: setFile,
        uploadProgress: uploadProgress,
        updateUploadProgress: updateUploadProgress,
        imageURI: imageURI,
        setImageURI: setImageURI,
        uploadStatus: uploadStatus,
        setUploadStatus: setUploadStatus,
        uploading: uploading,
        setUploading: setUploading,
        response: response,
        setResponse: setResponse,
      }}
    >
      {props.children}
    </NewPictureContext.Provider>
  );
}

export default function useNewPicture() {
  return useContext(NewPictureContext);
}
