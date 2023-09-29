import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import './index.css'
import ProductListComponent from './Components/ProductList/ProductListComponent';
import ProductDetailComponent from './Components/ProductList/ProductDetailComponent';
import HeaderComponent from './Components/Header/HeaderComponent';
import './Components/ProductList/CardComponent.css';
import AuthenticationComponent from './Components/Authentication/AuthenticationComponent';
import AuthenticationRoutes from './routes/AuthenticationRoutes';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  return (
    <Router>
      <div className="App">
        <HeaderComponent />

        <nav className="navbar">
          <ul>


          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/login" />}
          />
          <Route
            path="/products/:id"
            element={<ProductDetailComponent addToCart={addToCart} cart={cart} />}
          />
          <Route exact path="/login" element={<AuthenticationComponent />} />

          <Route
            path="/product-list"
            element={<ProductListComponent addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;