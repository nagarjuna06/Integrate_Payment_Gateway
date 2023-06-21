import React from "react";

const Product = ({ title, price, category, image, buyNow }) => {
  let priceFloor = Math.floor(price * 72.04);
  const handleButtonClick = () => {
    buyNow({ image, price: priceFloor, title });
  };
  return (
    <div className="product">
      <img src={image} alt={title} className="product__image" />
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">₹ {priceFloor.toLocaleString()}</p>
        <p className="product__category">{category}</p>
        <button onClick={handleButtonClick}>Buy Now</button>
      </div>
    </div>
  );
};

export default Product;
