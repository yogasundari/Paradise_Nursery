import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const SuperCoin = () => {
  const [superCoins, setSuperCoins] = useState(0);
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    const totalAmount = cartItems.reduce(
      (accumulator, item) => accumulator + item.price * item.quantity,
      0
    );

    if (totalAmount >= 200) {
      setSuperCoins(30);
    } else if (totalAmount >= 150) {
      setSuperCoins(20);
    } else if (totalAmount >= 100) {
      setSuperCoins(10);
    } else {
      setSuperCoins(0);
    }
  }, [cartItems]);

  return (
    <div>
      <h2>Super Coins</h2>
      <p>You have earned {superCoins} Super Coins!</p>
    </div>
  );
};

export default SuperCoin;
