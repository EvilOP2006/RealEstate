package com.examly.springapp.repository;

import com.examly.springapp.model.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Long> {
    List<Property> findByPriceBetween(Double minPrice, Double maxPrice);
    List<Property> findByBedroomsGreaterThanEqual(Integer bedrooms);
    List<Property> findByCityIgnoreCase(String city);
    
    // Combined filtering methods
    List<Property> findByPriceBetweenAndBedroomsGreaterThanEqual(Double minPrice, Double maxPrice, Integer bedrooms);
    List<Property> findByPriceBetweenAndCityIgnoreCase(Double minPrice, Double maxPrice, String city);
    List<Property> findByBedroomsGreaterThanEqualAndCityIgnoreCase(Integer bedrooms, String city);
    List<Property> findByPriceBetweenAndBedroomsGreaterThanEqualAndCityIgnoreCase(
        Double minPrice, Double maxPrice, Integer bedrooms, String city);
}