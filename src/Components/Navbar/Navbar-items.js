import React from "react";
import "./NavBar.css";
import useToken from "../../context/useToken";
import { useHistory } from "react-router-dom";

export default function Navbaritems(props) {
  const history = useHistory();
  const { logout } = useToken();

  function handleOnClick() {
    if (props.item === "Logout") {
      logout();
      history.push(props.path);
    } else {
      history.push(props.path);
    }
  }

  return (
    <button
      className={
        ["Logout", "Login"].includes(props.item)
          ? "topnav-button"
          : "topnav-links"
      }
      onClick={handleOnClick}
    >
      {props.item}
    </button>
  );
}
