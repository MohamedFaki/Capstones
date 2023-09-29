import React from "react";
import "./CardComponent.css";

function CardComponent({ product, onRemove }) {
  return (
    <div className="mini-product-card">
      <img
        src={product.image}
        alt={product.title}
        className="mini-product-image"
      />
      <br />

      <h3 className="product-title">{product.title}</h3>

      <button
        className="remove-button"
        onClick={onRemove}
      >
        Remove
      </button>
    </div>
  );
}

export default CardComponent;