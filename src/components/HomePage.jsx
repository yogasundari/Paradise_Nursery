import React from 'react';
import './HomePage.css'; // Import the CSS file for styling

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Green Paradise Nursery</h1>
        <p>Your go-to destination for beautiful and unique houseplants.</p>
      </header>
      <section className="home-content">
        <h2>About Us</h2>
        <p>
          At Paradise Nursery, we are passionate about bringing the beauty of nature into your home. 
          We offer a diverse selection of houseplants, each chosen for their unique beauty and ease of care. 
          Our mission is to provide you with high-quality plants and exceptional service to help you create your own green oasis.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
