import React from "react";
import Navbaritems from "./Navbar-items";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="topnav">
      <div className="topnav-logo">
        Logo
        {/* <i className="fa fa-user" /> */}
      </div>
      <div className="topnav-links-container">
        <Navbaritems item="Ideas" path="/ideas" />
        <Navbaritems item="About Us" path="/aboutus" />
        <Navbaritems item="Login" path="/login" />
      </div>
    </nav>
  );
}
