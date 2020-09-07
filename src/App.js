import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header.js";
import Main from "./Components/Main.js";
import Footer from "./Components/Footer.js";
import Product from "./Components/Product.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/product/:id" exact component={Product} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
