import React from "react";

// const navItems = [
//   "Koszulki",
//   "Koszule",
//   "Swetry",
//   "Marynarki",
//   "Kurtki",
//   "Spodnie",
//   "Bielizna",
//   "Akcesoria",
// ];

function Nav() {
  return (
    <div className="nav">
      <button className="nav_btn">Koszulki</button>
      <button className="nav_btn">Koszule</button>
      <button className="nav_btn">Swetry</button>
      <button className="nav_btn">Marynarki</button>
      <button className="nav_btn">Kurtki</button>
      <button className="nav_btn">Spodnie</button>
      <button className="nav_btn">Bielizna</button>
      <button className="nav_btn">Akcesoria</button>
    </div>
  );
}

export default Nav;
