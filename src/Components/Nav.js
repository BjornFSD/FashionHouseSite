import React from "react";
import data from "../data.json";

//Przykładowe wyciąganie daty z pliku json jeśli nie potrzebuję dostać się przez serwer api

function Nav() {
  const dataItems = data.map((data) => {
    return (
      <li className="nav_li">
        <a href={data.link}>{data.sectionPL}</a>
      </li>
    );
  });

  return (
    <div>
      <ul className="nav">{dataItems}</ul>
    </div>
  );
}

export default Nav;
