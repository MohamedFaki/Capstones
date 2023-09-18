import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'; // Import Routes
import HomeRoutes from './routes/HomeRoutes';
import HomeComponent from './Components/Home/HomeComponent';
import './App.css';
import ProductsRoutes from './routes/ProductsRoutes';
import ProductListComponent from './Components/ProductList/ProductListComponent';
import CartRoutes from './routes/CartRoutes';
import CartComponent from './Components/Cart/CartComponent';

function App() {
// link to home and products, cart
// path to home and products, cart

  return (
    <Router>
      <div className="App">
        <nav className ="navbar">
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/products">Product Page</Link>
            </li>
            <li>
              <Link to="/cart">Cart Page</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<HomeComponent />} />
          <Route exact path="/products" element={<ProductListComponent />} />
          <Route exact path="/cart" element={<CartComponent />} />
        </Routes>
      </div>
    </Router>
  );

}

export default App;