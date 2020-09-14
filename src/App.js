import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header.js";
import Main from "./Components/Main.js";
import Footer from "./Components/Footer.js";
import Product from "./Components/Product.js";
import Cart from "./Components/Cart.js";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "bootstrap/dist/css/bootstrap.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [cart, setCart] = useState([]);
  const countItems = cart.reduce((a, c) => a + c.count, 0);

  return (
    <Router>
      <div className="app">
        <Link to="/cart" className="header_cartIcon">
          ({cart.length > 0 ? countItems : 0})
          <ShoppingCartIcon fontSize="large" />
        </Link>
        <Header isActive={isActive} setIsActive={setIsActive} />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={300} classNames="fade">
                <Switch locatio={location}>
                  <Route path="/" exact component={Main} />
                  <Route
                    path="/product/:id"
                    exact
                    component={(props) => (
                      <Product {...props} setCart={setCart} cart={cart} />
                    )}
                  />
                  <Route
                    path="/cart"
                    exact
                    component={(props) => (
                      <Cart {...props} setCart={setCart} cart={cart} />
                    )}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
