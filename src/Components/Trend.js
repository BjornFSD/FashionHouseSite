import React from "react";

function Trend() {
  return (
    <div className="trend">
      <div className="trend_aside">
        <h3 className="trend_aside_main">Summer Trend</h3>
        <p className="trend_aside_dscb">
          Zobacz naszą najnowszą kolekcję na lato
        </p>

        <span className="trend_aside_check">Zobacz</span>
      </div>
      <img src="img/kolekcja.png" className="trend_img" alt="" />
    </div>
  );
}

export default Trend;
