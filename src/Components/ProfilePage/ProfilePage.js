import React, { useState, useEffect } from "react";
import getProfilePictures from "../../services/getProfilePictures";
import useToken from "../../context/useToken";
import "./ProfilePage.css";
import { useHistory } from "react-router";

export default function ProfilePage() {
  const { token } = useToken();
  const [images, setImages] = useState();
  const [profileImage, setProfileImage] = useState("");
  const [status, setStatus] = useState("Loading..");
  const [user, setUser] = useState();
  const history = useHistory();

  useEffect(() => {
    const responseImages = async () => {
      const data = await getProfilePictures(token);
      setImages(data.images);
      setUser(data.user);
      setProfileImage(data.profileImage);
      setStatus(null);
    };
    responseImages();
  }, [token]);

  function uploadPicture() {
    history.push("/choose");
  }

  return (
    <div className="profile-page">
      <div className="profile-info">
        <button onClick={uploadPicture} className="profileButton">
          <img
            src={
              profileImage
                ? profileImage
                : "https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png"
            }
            className={profileImage ? "profileImage" : "noProfileImage"}
            alt="profile"
          />
          <br />
          Edit your profile picture
        </button>
        <p className="name-user">{user && user.name}</p>
        <p className="name-user">{user && user.lastName}</p>
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
                  <img src={image.url} className="image" alt={image.id} />
                  <label className="label-description">Description :</label>
                  <p>{image.name}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
}
