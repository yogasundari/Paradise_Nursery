import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../features/cartSlice'; // Import the removeItem action
import './ShoppingCartPage.css';

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleContinueShopping = () => {
    navigate('/products'); // Navigate to the product listing page
  };

  return (
    <div className="shopping-cart">
      {cart.items.map((item) => (
        <div key={item.id} className="cart-item">
          <img
            src={`/images/plant${item.id}.jpg`}
            alt={item.name}
            className="cart-item-image"
          />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
      <div className="cart-summary">
        <h2>Total Amount: ${cart.totalAmount}</h2>
        <button className="checkout-button">Checkout</button>
        <button className="continue-shopping-button" onClick={handleContinueShopping}>Continue Shopping</button>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
