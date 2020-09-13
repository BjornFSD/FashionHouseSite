import React from "react";
import data from "../data.json";
import Trend from "./Trend.js";
import Slider from "./Slider.js";
import { Link } from "react-router-dom";

const dataItems = data.slice(1).map((data) => {
  return (
    <Link to={data.link} className="box_router">
      <img src={`img/${data.sectionPL}.png`} alt={data.sectionPL} />
    </Link>
  );
});

function Main() {
  return (
    <div>
      <Slider />
      <Trend />
      <div className="box">{dataItems}</div>
    </div>
  );
}

export default Main;
