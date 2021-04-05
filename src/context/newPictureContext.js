import { createContext, useState, useContext } from "react";

const NewPictureContext = createContext({});

export function NewPictureProvider(props) {
  const [file, setFile] = useState();
  const [uploadProgress, updateUploadProgress] = useState(0);
  const [imageURI, setImageURI] = useState();
  const [uploadStatus, setUploadStatus] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [response, setResponse] = useState();

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
