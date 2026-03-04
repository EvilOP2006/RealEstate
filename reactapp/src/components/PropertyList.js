// src/components/PropertyList.js
import React from 'react';

const PropertyList = ({ properties = [], loading = false, error = null, onSelect }) => {
  if (loading) {
    return (
      <div className="loading-state" data-testid="loading">
        <div className="loading-spinner" />
        <p>Finding your perfect property...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-state" data-testid="error">
        {error}
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="empty-state" data-testid="empty-list">
        <div className="empty-state-icon">🏠</div>
        <p>No properties found.</p>
      </div>
    );
  }

  return (
    <div className="property-list" data-testid="property-list">
      {properties.map((property) => (
        <div
          key={property.id}
          className="property-card"
          data-testid={`property-card-${property.id}`}
          onClick={() => onSelect && onSelect(property)}
        >
          <div className="card-image">🏡</div>
          <div className="card-body">
            <h3 className="card-title">{property.title}</h3>
            <p className="card-price">${property.price?.toLocaleString()}</p>
            <div className="card-meta">
              <span>🛏️ {property.bedrooms} bed</span>
              <span>📐 {property.area} sq ft</span>
              <span>📍 {property.city}</span>
            </div>
            {property.status && (
              <div className="card-status">
                <span className={`status-badge status-${property.status.toLowerCase().replace(' ', '-')}`}>
                  {property.status}
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
