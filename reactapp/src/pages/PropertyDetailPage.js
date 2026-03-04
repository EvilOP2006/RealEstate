// src/pages/PropertyDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropertyDetail from '../components/PropertyDetail';
import { fetchPropertyById } from '../utils/api';

function PropertyDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      loadProperty();
    }
  }, [id]);

  const loadProperty = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchPropertyById(id);
      setProperty(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate('/listings');
  };

  if (loading) {
    return (
      <div className="listings-page">
        <div className="loading-state" data-testid="loading">
          <div className="loading-spinner" />
          <p>Loading property details...</p>
        </div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="listings-page">
        <div className="error-state" data-testid="error">
          {error || 'Property not found.'}
        </div>
        <button onClick={handleBack} className="btn btn-secondary" style={{ marginTop: 16 }}>
          Back to Listings
        </button>
      </div>
    );
  }

  return (
    <div className="listings-page">
      <PropertyDetail property={property} onBack={handleBack} />
    </div>
  );
}

export default PropertyDetailPage;
