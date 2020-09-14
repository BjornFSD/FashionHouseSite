import React from "react";
import Nav from "./Nav.js";
import logo from "../img/Logo.png";
import { Link } from "react-router-dom";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Header({ isActive, setIsActive }) {
  return (
    <div className="header">
      <div className="header_bar">
        <div className="header_bar--left">
          <span>Phone +44 222 111 003</span>
        </div>
        <div className="header_bar--middle">
          <span>Fashion House</span>
        </div>
        <div className="header_bar--right">
          <span>fashionhouse@xyz.com</span>
        </div>
      </div>
      <div className="header_logo">
        <Link to="/">
          {" "}
          <img
            className="top img-fluid rounded mx-auto mt-5 d-block"
            src={logo}
            alt=""
          />
        </Link>
      </div>

      <Nav isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
}

export default Header;
