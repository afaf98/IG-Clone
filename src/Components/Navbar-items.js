import React from "react";
import "./NavBar.css";

export default function Navbaritems(props) {
  console.log("Hey props", props);
  return (
    <a className="topnav-links" href={props.path}>
      {props.item}
    </a>
  );
}
