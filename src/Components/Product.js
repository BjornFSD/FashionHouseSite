import React, { useState, useEffect } from "react";
import data from "../data.json";
import Button from "@material-ui/core/Button";

function Product(props) {
  const [products, setProducts] = useState([]);
  const [sectionName, setSectionName] = useState(props.match.params.id);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const sectionSpecificFilteredData = data.find(
      (section) => section.section === sectionName
    );
    const { products } = sectionSpecificFilteredData;
    setProducts(products);
    setIsLoading(false);
  }, [sectionName]);

  useEffect(() => {
    setSectionName(props.match.params.id);
  }, [props.match.params.id]);

  const handleButton = (product) => {
    const cartItems = props.cart.slice();
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
    props.setCart(cartItems);
    console.log(cartItems);
  };
  const ProductDetails = ({ product }) => {
    return (
      <div className="c col-md-6 col-lg-4">
        <img
          className="a img-fluid mx-auto h-75 w-100"
          src={product.img}
          alt={product.description}
        />
        <div className="d-flex justify-content-between p-2">
          <div className="d-flex flex-column">
            <p>{product.description}</p>
            <p>{product.price}$</p>
          </div>
          <div>
            <Button
              className="btn"
              type="button"
              variant="outlined"
              onClick={(e) => {
                e.preventDefault();
                handleButton(product);
              }}
            >
              add to cart
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="product row">
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <div className="title_line">
            <h1 className="product_title">{props.match.params.id}</h1>
          </div>
          <div className="product_items">
            {products.length > 0 &&
              products.map((product, index) => (
                <ProductDetails key={index} product={product} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
