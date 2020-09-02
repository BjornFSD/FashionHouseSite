import React from "react";
import "./App.scss";
import Header from "./Components/Header.js";
import Main from "./Components/Main.js";
import Footer from "./Components/Footer.js";
import Trend from "./Components/Trend.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Trend />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
