import axios from "axios";
console.log("pROCESS", process.env);

export const acceptedTypes = ["image/png", "image/jpg", "image/jpeg"];

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const isValidFileType = (fileType) => {
  return acceptedTypes.includes(fileType);
};

export const handleFileUpload = async (
  updateUploadProgress,
  setImageURI,
  setUploadStatus,
  setUploading,
  setResponse,
  token,
  file
) => {
  if (!isValidFileType(file.type)) {
    alert("Only images are allowed (png or jpg)");
    return;
  }

  setUploading(true);
  const formData = new FormData();
  formData.append("image", file);

  await axios({
    method: "post",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
    data: formData,
    url: `${process.env.REACT_APP_DEV_SERVER}/images`,
    onUploadProgress: (ev) => {
      const progress = (ev.loaded / ev.total) * 100;
      updateUploadProgress(Math.round(progress));
    },
  })
    .then((resp) => {
      // our mocked response will always return true
      // in practice, you would want to use the actual response object
      setUploadStatus(true);
      setResponse(resp);
      setUploading(false);
      getBase64(file, (uri) => {
        setImageURI(uri);
      });
    })
    .catch((err) => console.error(err));
};
