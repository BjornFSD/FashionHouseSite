import React from "react";
import Slider from "./Slider.js";
import Nav from "./Nav.js";

function Header() {
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
        <img src="img/Logo.png" alt="" />
      </div>
      <Nav />
      <Slider />
    </div>
  );
}

export default Header;
