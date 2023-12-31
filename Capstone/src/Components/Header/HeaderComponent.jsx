import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './HeaderComponent.css';
import cartIcon from '../../Images/shopping-bag.svg';

function HeaderComponent({ toggleFilterCategory, toggleSearchBar, toggleCartSummary }) {
  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>


    </header>
  );
}

export default HeaderComponent;