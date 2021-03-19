import React, { useState, useEffect } from "react";
import getProfilePictures from "../../services/getProfilePictures";
import useToken from "../../context/useToken";
import "./ProfilePage.css";

export default function ProfilePage() {
  const { token } = useToken();
  const [images, setImages] = useState();
  const [status, setStatus] = useState("Loading..");

  useEffect(() => {
    const responseImages = async () => {
      const data = await getProfilePictures(token);
      console.log("Data", data);
      setImages(data.images);
    };
    responseImages();
  }, [token]);
  console.log("Use", images);
  return (
    <div className="profile-page">
      <div className="image-container">
        {!images
          ? status
          : images.map((image) => {
              return (
                <div className="image-card ">
                  <img src={image.url} className="image" />
                  <p>{image.name}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
}
