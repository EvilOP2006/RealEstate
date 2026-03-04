// src/components/PropertyDetail.js
import React from 'react';

const PropertyDetail = ({ property, onBack }) => {
  if (!property) return null;

  return (
    <div className="property-detail" data-testid="property-detail">
      <div className="detail-header">
        <h2>{property.title}</h2>
        <p className="detail-price">${property.price?.toLocaleString()}</p>
      </div>
      <div className="detail-body">
        {property.description && (
          <div className="detail-section">
            <h4>Description</h4>
            <p>{property.description}</p>
          </div>
        )}
        <div className="detail-grid">
          <div className="detail-section">
            <h4>Bedrooms</h4>
            <p>{property.bedrooms}</p>
          </div>
          <div className="detail-section">
            <h4>Bathrooms</h4>
            <p>{property.bathrooms}</p>
          </div>
          <div className="detail-section">
            <h4>Area</h4>
            <p>{property.area} sq ft</p>
          </div>
          <div className="detail-section">
            <h4>Property Type</h4>
            <p>{property.propertyType}</p>
          </div>
        </div>
        <div className="detail-section">
          <h4>Address</h4>
          <p>{[property.address, property.city, property.state].filter(Boolean).join(', ')}</p>
          {property.zipCode && <p>{property.zipCode}</p>}
        </div>
        <div className="detail-badges">
          {property.listingDate && (
            <span className="detail-badge">Listed {property.listingDate}</span>
          )}
          <span className="detail-badge" aria-label="Available:">
            {property.isAvailable ? '✓ Available' : 'Unavailable'}
          </span>
        </div>
      </div>
      <div className="detail-actions">
        <button onClick={onBack} className="btn-back" data-testid="back-button">
          ← Back to List
        </button>
      </div>
    </div>
  );
};

export default PropertyDetail;
