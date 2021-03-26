import React, { useEffect, useState } from "react";
import getUsers from "../../services/getUsers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import useToken from "../../context/useToken";

import "./Users.css";
import { useHistory } from "react-router";

export default function Users() {
  const [loading, setLoading] = useState("Loading");
  const [users, setUsers] = useState();
  const history = useHistory();
  const { token } = useToken();

  async function followButton() {
    if (!token) {
      history.push("/signup");
    }
  }

  async function usersData() {
    const response = await getUsers();
    setLoading(null);
    setUsers(response);
  }

  useEffect(() => {
    usersData();
  }, []);

  return (
    <div className="users-page">
      <h2>All users using this AMAZING App!</h2>
      <div className="users-box">
        {!users
          ? loading
          : users.map((user, index) => {
              return (
                <div className="user-card" key={index}>
                  <FontAwesomeIcon size="100px" icon={faAddressCard} />
                  <div className="user-info">
                    <p className="user-text">{user.firstName}</p>
                    <p className="user-text">{user.lastName}</p>
                  </div>
                  <button className="follow-button" onClick={followButton}>
                    {!token ? "Sign up" : "Follow"}
                  </button>
                </div>
              );
            })}
      </div>
    </div>
  );
}
