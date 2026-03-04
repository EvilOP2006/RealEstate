// src/components/PropertyFilter.js
import React, { useState } from 'react';

const PropertyFilter = ({ onFilter, onClear, loading }) => {
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    city: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleClear = () => {
    setFilters({
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      city: ''
    });
    setError('');
    if (onClear) onClear();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const minPrice = filters.minPrice ? parseFloat(filters.minPrice) : null;
    const maxPrice = filters.maxPrice ? parseFloat(filters.maxPrice) : null;

    if (minPrice && maxPrice && minPrice > maxPrice) {
      setError('Min price should be less than max price.');
      return;
    }

    setError('');
    if (onFilter) {
      onFilter({
        minPrice,
        maxPrice,
        bedrooms: filters.bedrooms ? parseInt(filters.bedrooms, 10) : null,
        city: filters.city || null
      });
    }
  };

  return (
    <div className="property-filter">
      <h3>Search Properties</h3>
      <form onSubmit={handleSubmit} className="filter-form">
        <div className="filter-group">
          <label htmlFor="minPrice">Minimum Price</label>
          <input
            id="minPrice"
            type="number"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleChange}
            placeholder="e.g. 100000"
          />
        </div>
        <div className="filter-group">
          <label htmlFor="maxPrice">Maximum Price</label>
          <input
            id="maxPrice"
            type="number"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleChange}
            placeholder="e.g. 500000"
          />
        </div>
        <div className="filter-group">
          <label htmlFor="bedrooms">Bedrooms</label>
          <input
            id="bedrooms"
            type="number"
            name="bedrooms"
            value={filters.bedrooms}
            onChange={handleChange}
            placeholder="Any"
            min="1"
          />
        </div>
        <div className="filter-group">
          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            name="city"
            value={filters.city}
            onChange={handleChange}
            placeholder="e.g. New York"
          />
        </div>
        <div className="filter-actions">
          <button type="submit" className="btn btn-primary" data-testid="filter-button" disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleClear} data-testid="clear-button">
            Clear
          </button>
          {error && <span className="filter-error" data-testid="filter-error">{error}</span>}
        </div>
      </form>
    </div>
  );
};

export default PropertyFilter;
