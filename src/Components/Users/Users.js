import React, { useEffect, useState, useCallback } from "react";
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
    setFollowers([...followers, id]);
  }

  async function unfollowButton(id) {
    await unfollow(token, id);
    const updatedFollowers = followers.filter((follow) => {
      if (follow !== id) {
        return true;
      } else {
        return false;
      }
    });
    setFollowers(updatedFollowers);
  }

  const usersData = useCallback(async () => {
    const response = await getUsers();
    setUsers(response);
    if (token) {
      const followers = await getFollowers(token);
      const followerIds = followers.map((follower) => follower.id);
      setFollowers(followerIds);
    }
  }, [token]);

  useEffect(() => {
    usersData();
  }, [usersData]);

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
