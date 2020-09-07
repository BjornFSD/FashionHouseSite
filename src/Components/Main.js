import React from "react";
import data from "../data.json";
import Trend from "./Trend.js";

const dataItems = data.map((data) => {
  return (
    <a href={data.link} className="box_router">
      <img src={`img/${data.sectionPL}T.png`} alt={data.sectionPL} />
    </a>
  );
});

function Main() {
  return (
    <div>
      <Trend />
      <div className="box">{dataItems}</div>
    </div>
  );
}

export default Main;
