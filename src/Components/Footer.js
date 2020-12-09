import React from "react";
import "./Footer.css";

// import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <a className="footer-left-links" href="">
          Contact Us
        </a>
        {"  "}|{"  "}
        <a className="footer-left-links" href="">
          Search
        </a>
      </div>
      <div className="footer-center">
        <FontAwesomeIcon icon={faExpand} size="lg" />
      </div>
      <div className="footer-right">
        <div>
          <select className="dropdown-footer" name="Language" id="Language">
            <option value="English">English</option>
            <option value="Italian">Italian</option>
            <option value="Dutch">Dutch</option>
            <option value="Arab">Arab</option>
          </select>
        </div>
        {"  "} | {"  "}
        ©Copyright 2020
      </div>
    </footer>
  );
}
