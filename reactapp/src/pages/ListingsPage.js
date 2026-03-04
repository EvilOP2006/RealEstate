// src/pages/ListingsPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropertyFilter from '../components/PropertyFilter';
import PropertyList from '../components/PropertyList';
import { fetchAllProperties, fetchPropertyById, filterProperties } from '../utils/api';

function ListingsPage() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFiltered, setIsFiltered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchAllProperties();
      setProperties(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = async (criteria) => {
    try {
      setLoading(true);
      setError(null);
      const data = await filterProperties(criteria);
      setProperties(data);
      setIsFiltered(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setIsFiltered(false);
    loadProperties();
  };

  const handleSelectProperty = (property) => {
    navigate(`/listings/${property.id}`);
  };

  return (
    <div className="listings-page">
      <section className="listings-page-header">
        <h2>Browse Properties</h2>
        <p>Search and filter our available listings</p>
      </section>
      <PropertyFilter onFilter={handleFilter} onClear={handleClear} loading={loading} />
      <PropertyList
        properties={properties}
        loading={loading}
        error={error}
        onSelect={handleSelectProperty}
      />
    </div>
  );
}

export default ListingsPage;
