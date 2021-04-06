import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import useToken from "../../context/useToken";
import { useHistory } from "react-router";

export default function UserCard({
  user,
  followed,
  followButton,
  unfollowButton,
}) {
  const history = useHistory();
  const { token } = useToken();
  console.log("usercard", user);

  return (
    <div className="user-card">
      {user.latestImage.length === 0 ? (
        <FontAwesomeIcon icon={faAddressCard} />
      ) : (
        <img className="profileImage" src={user.latestImage} alt="profile" />
      )}

      <div className="user-info">
        <p className="user-text">{user.firstName}</p>
        <p className="user-text">{user.lastName}</p>
      </div>
      {!token && (
        <button
          className="follow-button"
          onClick={() => {
            history.push("/signup");
          }}
        >
          Sign up
        </button>
      )}
      {!followed && token && (
        <button className="follow-button" onClick={() => followButton(user.id)}>
          Follow
        </button>
      )}
      {followed && token && (
        <button
          className="follow-button"
          onClick={() => unfollowButton(user.id)}
        >
          Unfollow
        </button>
      )}
    </div>
  );
}
