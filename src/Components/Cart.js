import React from "react";
import { useState } from "react";


function Cart({ cart, setCart }) {
  const [showPopup, setShowPopup] = useState(false);

  const deleteItem = (product) => {
    const cartItems = cart.slice();
    setCart(cartItems.filter((item) => item.id !== product.id));
  };

  const ProductDetails = ({ product }) => {
    return (
      <div className="cartItem_details">
        <div className="cartItem_container">
          <img
            className="cartItem_image"
            src={product.img}
            alt={product.description}
          />
          <p className="cartItem_description">{product.description}</p>
          <div className="cartItem_bottom">
            <p className="cartItem_price">{`${product.count} x ${product.price} $`}</p>
            <p
              onClick={() => deleteItem(product)}
              className="cartItem_button"
              
            >Delete</p>
          </div>
        </div>
      </div>
    );
  };
  const totalCost = cart.reduce((a, c) => a + c.price * c.count, 0);

  const handleBuy = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setCart([]);
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