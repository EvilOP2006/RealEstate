// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <h2>Find Your Dream Home</h2>
        <p>Explore our curated collection of properties. Filter by price, location, and more.</p>
        <Link to="/listings" className="btn btn-primary btn-hero">
          View All Listings
        </Link>
      </section>
      <section className="home-features">
        <div className="feature-card">
          <span className="feature-icon">🔍</span>
          <h3>Smart Search</h3>
          <p>Filter by price range, bedrooms, and city to find exactly what you need.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🏠</span>
          <h3>Quality Listings</h3>
          <p>Browse verified properties with detailed descriptions and specifications.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">📍</span>
          <h3>Location Focus</h3>
          <p>Find properties in your preferred neighborhoods and cities.</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
