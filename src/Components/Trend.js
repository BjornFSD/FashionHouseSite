import React from "react";

function Trend() {
  return (
    <div className="trend ">
      <div className="trend_aside">
        <span className="trend_aside_main">Summer Trend</span>
        <p className="trend_aside_dscb">
          Zobacz naszą najnowszą kolekcję na lato
        </p>

        <span className="trend_aside_check">Zobacz</span>
      </div>
      <img src="img/kolekcja.png" className="trend_img img-fluid w-80" alt="" />
    </div>
  );
}

export default Trend;
