import React from "react";
import data from "../data.json";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import menuIcon from "@iconify/icons-entypo/menu";
import xIcon from "@iconify/icons-bi/x";

function Nav({ isActive, setIsActive }) {
  const dataItems = data.map((data) => {
    return (
      <li
        onClick={() => setIsActive(false)}
        className={isActive ? "navi_li navi_li-active" : "navi_li"}
        key={data.section}
      >
        <Link to={data.link}>{data.sectionPL}</Link>
      </li>
    );
  });

  return (
    <div>
      <Icon
        icon={isActive ? xIcon : menuIcon}
        width="42"
        height="42"
        className={isActive ? "burger burger_active" : "burger"}
        onClick={() => setIsActive(!isActive)}
      />

      <div className={isActive ? "bar bar_active" : "bar"}>
        <ul className={isActive ? "navi navi_active" : "navi"}>{dataItems}</ul>
      </div>
    </div>
  );
}

export default Nav;
