import React from "react";
import Slider from "./Slider.js";
import Nav from "./Nav.js";
import logo from "../img/Logo.png";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Header({ Home }) {
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
        <img src={logo} alt="" />
      </div>
      <Nav />

      <Slider />
    </div>
  );
}

export default Header;
