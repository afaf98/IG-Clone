import React from "react";
import "./Footer.css";

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
      <div className="footer-center"></div>
      <div className="footer-right"></div>
    </footer>
  );
}
