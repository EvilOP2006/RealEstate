// src/utils/api.js
const API_BASE_URL = 'http://localhost:8080/api/properties';

export const fetchAllProperties = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) throw new Error('Failed to fetch properties');
    return await response.json();
  } catch (error) {
    console.error('Error fetching properties:', error);
    throw error;
  }
};

export const fetchPropertyById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    if (!response.ok) throw new Error('Property not found');
    return await response.json();
  } catch (error) {
    console.error('Error fetching property:', error);
    throw error;
  }
};

export const filterProperties = async (filters) => {
  const params = new URLSearchParams();

  if (filters.minPrice !== null) params.append('minPrice', filters.minPrice);
  if (filters.maxPrice !== null) params.append('maxPrice', filters.maxPrice);
  if (filters.bedrooms !== null) params.append('bedrooms', filters.bedrooms);
  if (filters.city) params.append('city', filters.city);

  const url = `${API_BASE_URL}/filter?${params.toString()}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to filter properties');
    return await response.json();
  } catch (error) {
    console.error('Error filtering properties:', error);
    throw error;
  }
};