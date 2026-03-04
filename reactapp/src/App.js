// src/App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ListingsPage from './pages/ListingsPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import AddPropertyPage from './pages/AddPropertyPage';
import './App.css';

function App() {
  return (
    <div className="App">
        <header className="app-header">
          <nav className="app-nav">
            <Link to="/" className="nav-logo">
              Real Estate Listings
            </Link>
            <div className="nav-links">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/listings" className="nav-link">Listings</Link>
              <Link to="/add-property" className="nav-link">List Property</Link>
            </div>
          </nav>
          <p className="header-tagline">Find your dream home</p>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/listings" element={<ListingsPage />} />
            <Route path="/listings/:id" element={<PropertyDetailPage />} />
            <Route path="/add-property" element={<AddPropertyPage />} />
          </Routes>
        </main>
      </div>
  );
}

export default App;
