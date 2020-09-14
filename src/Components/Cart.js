import React from "react";
import { useState } from "react";

function Cart({ cart, setCart }) {
  const [showPopup, setShowPopup] = useState(false);

  const deleteItem = (product) => {
    const cartItems = cart.slice();
    setCart(cartItems.filter((item) => item.id !== product.id));
  };
  const totalCost = cart.reduce((a, c) => a + c.price * c.count, 0);

  const addCount = (product) => {
    const cartItems = cart.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    setCart(cartItems);
    //  console.log(cartItems);
  };
  const minusCount = (product) => {
    const cartItems = cart.slice();

    cartItems.forEach((item) => {
      if (item.id === product.id) {
        if (item.count === 1) {
          return;
        } else {
          item.count--;
        }
      }
    });
    setCart(cartItems);
    //  console.log(cartItems);
  };
  const handleBuy = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setCart([]);
  };

  const ProductDetails = ({ product }) => {
    return (
      <div className="cartItem_details">
        <div className="row">
          <img
            className="img-fluid w-50 col-md-2"
            src={product.img}
            alt={product.description}
          />
          <p className="cartItem_description col-md-6">{product.description}</p>
          <div className="cartItem_bottom col-md-4">
            <p className="cartItem_price">{`${product.count} x ${product.price} $`}</p>
            <p onClick={() => addCount(product)} className="cartItem_button">
              +
            </p>
            <p onClick={() => minusCount(product)} className="cartItem_button">
              -
            </p>
            <p onClick={() => deleteItem(product)} className="cartItem_button">
              Delete
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="cart">
      {cart.length > 0 ? (
        cart.map((product, index) => (
          <ProductDetails key={index} product={product} />
        ))
      ) : (
        <h3 className="cart_empty">Your cart is empty.</h3>
      )}
      {cart.length !== 0 && (
        <div className="cart_costAndButton">
          <div className="cart_totalCost">{totalCost} $</div>

          <button
            onClick={handleBuy}
            className="cart_buyButton"
            variant="outlined"
          >
            Proceed
          </button>
        </div>
      )}
      {showPopup && (
        <div className="popup">
          <div className="popup_inner">
            <h2 className="popup_inner--message">Thank You for shopping!</h2>
            <h3 className="popup_inner--message">
              Order will be around 2-3 days.
            </h3>
            <h3 className="popup_inner--message">Total cost: {totalCost} $</h3>

            <div
              onClick={closePopup}
              className="popup_close"
              variant="outlined"
            >
              X
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
