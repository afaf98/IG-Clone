import React from "react";
import Navbaritems from "./Navbar-items";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import useToken from "../../context/useToken";

export default function NavBar() {
  const { token } = useToken();

  console.log("token", token);
  return (
    <nav className="topnav">
      <div className="topnav-logo-container">
        <FontAwesomeIcon size="lg" icon={faExpand} />
      </div>
      <div className="topnav-links-container">
        <Navbaritems item="Users" path="/users" />
        {token && <Navbaritems item="Upload" path="/choose" />}

        {token && <Navbaritems item="Profile" path="/profile" />}
        <Navbaritems
          item={token ? "Logout" : "Login"}
          path={token ? "/" : "/login"}
        />
      </div>
    </nav>
  );
}
