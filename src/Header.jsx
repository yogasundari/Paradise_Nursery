import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css'; // Ensure this file exists

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          <div className="cart-icon">
            <span className="cart-count">{totalItems}</span>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
