import React from "react";
import Navbaritems from "./Navbar-items";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <nav className="topnav">
      <div className="topnav-logo-container">
        <FontAwesomeIcon size="lg" icon={faExpand} />
      </div>
      <div className="topnav-links-container">
        {/* <Navbaritems item="Ideas" path="/ideas" /> */}
        <Navbaritems item="About Us" path="/aboutus" />
        <Navbaritems item="Login" path="/login" />
      </div>
    </nav>
  );
}
