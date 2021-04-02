import React, { useState, useEffect } from "react";
import getProfilePictures from "../../services/getProfilePictures";
import useToken from "../../context/useToken";
import "./ProfilePage.css";

export default function ProfilePage() {
  const { token } = useToken();
  const [images, setImages] = useState();
  const [status, setStatus] = useState("Loading..");
  const [user, setUser] = useState();

  useEffect(() => {
    const responseImages = async () => {
      const data = await getProfilePictures(token);
      console.log("Data", data);
      setImages(data.images);
      setUser(data.user);
    };
    responseImages();
  }, [token]);
  console.log("Use", images);
  return (
    <div className="profile-page">
      <div className="profile-info">
        {/* <p>Profile image</p> */}
        <img src="https://via.placeholder.com/150" />
        <p className="name-user">{!user ? status : user.name}</p>
        <p className="name-user">{!user ? status : user.lastName}</p>
        <div className="counters-followers-posts">
          <div className="c-posts">Posts</div>
          <div className="c-followers">Followers</div>
          <div className="buttons">
            <button>Follow</button>
          </div>
        </div>
      </div>
      <div className="image-container">
        {!images
          ? status
          : images.map((image) => {
              return (
                <div className="image-card ">
                  <img src={image.url} className="image" />
                  <label className="label-description">Description :</label>
                  <p>{image.name}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
}
