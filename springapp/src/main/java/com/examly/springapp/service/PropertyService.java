package com.examly.springapp.service;

import com.examly.springapp.model.Property;
import java.util.List;
import java.util.Optional;

public interface PropertyService {
    Property addProperty(Property property);
    List<Property> getAllProperties();
    Optional<Property> getPropertyById(Long id);
    List<Property> filterProperties(Double minPrice, Double maxPrice, Integer bedrooms, String city);
}