import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductListComponent.css";
import "./CardComponent.css";
import CardComponent from "./CardComponent";
import menuIcon from "../../Images/menu-icon.svg";
import searchIcon from "../../Images/search-icon.svg";
import shoppingBagIcon from "../../Images/shopping-bag.svg";

function ProductListComponent({ addToCart, cart, removeFromCart }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [limit, setLimit] = useState(20);
  const [sort, setSort] = useState("asc");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showCartSummary, setShowCartSummary] = useState(true); // Initially, show the cart summary
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showFilterCategory, setShowFilterCategory] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));

    const apiUrl =
      selectedCategory === "all"
        ? `https://fakestoreapi.com/products?limit=${limit}&sort=${sort}`
        : `https://fakestoreapi.com/products/category/${selectedCategory}?limit=${limit}&sort=${sort}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [limit, sort, selectedCategory]);

  const toggleCartSummary = () => {
    setShowCartSummary(!showCartSummary);
  };

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  const toggleFilterCategory = () => {
    setShowFilterCategory(!showFilterCategory);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="product-list-container">
      <div className="options">
        <img
          src={menuIcon}
          alt="Menu Icon"
          className="menu-icon"
          onClick={toggleFilterCategory}
        />
        <img
          src={searchIcon}
          alt="Search Icon"
          className="search-icon"
          onClick={toggleSearchBar}
        />
        <img
          src={shoppingBagIcon}
          alt="Shopping Bag Icon"
          className="cart-icon"
          onClick={toggleCartSummary}
        />
        {showFilterCategory && (
          <div>
            <label>
              Limit:
              <select value={limit} onChange={(e) => setLimit(e.target.value)}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
            </label>
            <label>
              Sort:
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </label>
            <label>
              Category:
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
          </div>
        )}
        {showSearchBar && (
          <label>
            <input
              type="text"
              placeholder="Search products"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="search-input"
            />
          </label>
        )}
      </div>

      <h1 className="product-list-heading">E-Commerce Products</h1>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/products/${product.id}`}>
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
            </Link>
            <div className="product-info">
              <h2 className="product-title">{product.title}</h2>
              <button
                onClick={() => addToCart(product)}
                className="add-to-cart-button"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="cart-icon-container">
        {showCartSummary && (
          <div className="cart-summary">
            <p>Cart Summary:</p>
            <div className="mini-product-list">
              {cart.map((item) => (
                <CardComponent
                  key={item.id}
                  product={item}
                  totalAmount={totalAmount}
                  onRemove={() => removeFromCart(item.id)}
                />
              ))}
            </div>
            <p>Total Items in Cart: {cart.length}</p>
            <p>Total Amount: ${totalAmount.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductListComponent;