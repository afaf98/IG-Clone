import React, { useEffect, useState } from "react";
import getUsers from "../../services/getUsers";
import useToken from "../../context/useToken";
import UserCard from "../UserCard/UserCard";

import "./Users.css";
import addFollower, { getFollowers, unfollow } from "../../services/followers";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [followers, setFollowers] = useState([]);
  const { token } = useToken();

  async function followButton(id) {
    await addFollower(token, id);

    // setFollowers(followers.remove);
    setFollowers([...followers, id]);
  }

  async function unfollowButton(id) {
    await unfollow(token, id);
    var index = followers.indexOf(id);
    const updatedFollowers = followers.map((follow) => {
      if (follow === id) {
        return;
      }
    });
    setFollowers(updatedFollowers);
  }

  async function usersData() {
    const response = await getUsers();
    setUsers(response);
    if (token) {
      const followers = await getFollowers(token);
      const followerIds = followers.map((follower) => follower.id);
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
        {users.length === 0 && <h2>Loading..</h2>}
        {users.map((user, index) => {
          return (
            <UserCard
              user={user}
              followButton={followButton}
              unfollowButton={unfollowButton}
              followed={followers.includes(user.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
