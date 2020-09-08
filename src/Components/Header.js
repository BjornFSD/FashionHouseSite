import React from "react";
import Slider from "./Slider.js";
import Nav from "./Nav.js";
import logo from "../img/Logo.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
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
        <Link to="/cart" className="header_cartIcon">
        <ShoppingCartIcon fontSize="large" />
      </Link>
      </div>
      <div className="header_logo">
        <img src={logo} alt="" />
      </div>
      <Nav isActive={isActive} setIsActive={setIsActive} />

      <Slider />
    </div>
  );
}

export default Header;
