import React from "react";
import data from "../data.json";
import { Link } from "react-router-dom";

//Przykładowe wyciąganie daty z pliku json jeśli nie potrzebuję dostać się przez serwer api

function Nav({ isActive, setIsActive }) {
  const dataItems = data.map((data) => {
    return (
      <li
        onClick={() => setIsActive(false)}
        className="nav_li"
        key={data.section}
      >
        <Link to={data.link}>{data.sectionPL}</Link>
      </li>
    );
  });

  return (
    <div  className={isActive ? "nav_bar_container active" : "nav_bar_container"}>
      <ul className="nav">{dataItems}</ul>
    </div>
  );
}

export default Nav;
