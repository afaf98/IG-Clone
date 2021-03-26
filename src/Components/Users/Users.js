import React, { useEffect, useState } from "react";
import getUsers from "../../services/getUsers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import useToken from "../../context/useToken";

import "./Users.css";
import { useHistory } from "react-router";
import addFollower, { getFollowers } from "../../services/addFollower";

export default function Users() {
  const [loading, setLoading] = useState("Loading");
  const [users, setUsers] = useState([]);
  const [newFollower, setNewFollower] = useState();
  const [followers, setFollowers] = useState([]);
  const history = useHistory();
  const { token } = useToken();

  async function followButton(id) {
    if (!token) {
      history.push("/signup");
    }
    const response = await addFollower(token, id);
    setFollowers([...followers, id]);
  }
  console.log("follower", followers);

  async function usersData() {
    const response = await getUsers();
    setLoading(null);
    setUsers(response);
    if (token) {
      const followers = await getFollowers(token);
      const followerIds = followers.map((follower) => follower.id);
      setLoading(null);
      setFollowers(followerIds);
    }
  }

  useEffect(() => {
    usersData();
  }, []);

  return (
    <div className="users-page">
      <h2>All users using this AMAZING App!</h2>
      <div className="users-box">
        {users.length === 0
          ? loading
          : users.map((user, index) => {
              return (
                <div className="user-card" key={index}>
                  <FontAwesomeIcon icon={faAddressCard} />
                  <div className="user-info">
                    <p className="user-text">{user.firstName}</p>
                    <p className="user-text">{user.lastName}</p>
                  </div>
                  {!followers && !token ? (
                    <button
                      className="follow-button"
                      onClick={(e) => {
                        e.preventDefault();
                        followButton(user.id);
                      }}
                    >
                      Sign up
                    </button>
                  ) : !followers.includes(user.id) ? (
                    <button onClick={() => followButton(user.id)}>
                      Follow
                      {/* {followers.includes(user.id) ? "Unfollow" : "Follow"} */}
                    </button>
                  ) : (
                    <button onClick={() => console.log("Implement unfollow")}>
                      Unfollow
                    </button>
                  )}
                </div>
              );
            })}
      </div>
    </div>
  );
}
