import React, { useState } from "react";
import Navbaritems from "./Navbar-items";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import useToken from "../../context/useToken";

export default function NavBar() {
  const { token, logout } = useToken();
  // const [authLink, setAuthLink] = useState(token ? "Logout" : "Login");

  let authLink = token ? "Logout" : "Login";

  console.log("token", token);
  return (
    <nav className="topnav">
      <div className="topnav-logo-container">
        <FontAwesomeIcon size="lg" icon={faExpand} />
      </div>
      <div className="topnav-links-container">
        <Navbaritems item="About Us" path="/aboutus" />
        <Navbaritems
          item={token ? "Logout" : "Login"}
          path={token ? "/" : "/login"}
        />
        ;
      </div>
    </nav>
  );
}
