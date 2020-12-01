import React from "react";

export default function Navbaritems(props) {
  console.log("Hey props", props);
  return (
    // <div className="topnav">
    <a href={props.path}>{props.item}</a>
    // </div>
  );
}
