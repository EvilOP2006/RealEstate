package com.examly.springapp.service;

import com.examly.springapp.model.Property;
import com.examly.springapp.repository.PropertyRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PropertyServiceImpl implements PropertyService {

    private final PropertyRepository propertyRepository;

    public PropertyServiceImpl(PropertyRepository propertyRepository) {
        this.propertyRepository = propertyRepository;
    }

    @Override
    public Property addProperty(Property property) {
        // Ensure default values are set
        if (property.getListingDate() == null) {
            property.setListingDate(java.time.LocalDate.now());
        }
        if (property.getIsAvailable() == null) {
            property.setIsAvailable(true);
        }
        return propertyRepository.save(property);
    }

    @Override
    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    @Override
    public Optional<Property> getPropertyById(Long id) {
        if (id == null || id <= 0) {
            return Optional.empty();
        }
        return propertyRepository.findById(id);
    }

    @Override
    public List<Property> filterProperties(Double minPrice, Double maxPrice, Integer bedrooms, String city) {
        List<Property> allProperties = propertyRepository.findAll();
        
        return allProperties.stream()
                .filter(property -> minPrice == null || property.getPrice() >= minPrice)
                .filter(property -> maxPrice == null || property.getPrice() <= maxPrice)
                .filter(property -> bedrooms == null || property.getBedrooms() >= bedrooms)
                .filter(property -> city == null || city.isEmpty() || 
                    property.getCity().equalsIgnoreCase(city))
                .collect(Collectors.toList());
    }
}