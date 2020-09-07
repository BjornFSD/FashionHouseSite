import React, { useState, useEffect } from "react";
import data from "../data.json";

function Product({ match }) {
  console.log(match);

  const [products, setProducts] = useState([]);
  const [sectionName, setSectionName] = useState(match.params.id);

  useEffect(() => {
    const sectionSpecificFilteredData = data.find(
      (section) => section.section === sectionName
    );
    const { products } = sectionSpecificFilteredData;
    setProducts(products);
  }, [sectionName]);

  const ProductDetails = ({ product }) => {
    return (
      <div className="product_items-box">
        <img src={product.img} alt={product.description} />
        <div className="product_items-box--details">
          <span className="product_items-box--details-desc">
            {product.description}
          </span>
          <span className="product_items-box--details-price">
            {product.price},-
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="product">
      <h1 className="product_title">{match.params.id}</h1>
      <div className="product_items">
        {products.length > 0 &&
          products.map((product, index) => (
            <ProductDetails key={index} product={product} />
          ))}
      </div>
    </div>
  );
}

export default Product;
