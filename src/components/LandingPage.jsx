import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Ensure this file exists

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="background-image"></div>
      <div className="content">
        <h1>Paradise Nursery</h1>
        <p>Welcome to Paradise Nursery, your go-to destination for the best house plants.</p>
        <Link to="/products">
          <button className="get-started-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
