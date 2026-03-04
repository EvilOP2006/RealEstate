package com.examly.springapp.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.time.LocalDate;

@Entity
@Table(name = "properties")
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Title is required")
    @Size(max = 100, message = "Title must be less than 100 characters")
    private String title;

    @NotBlank(message = "Description is required")
    @Size(max = 500, message = "Description must be less than 500 characters")
    private String description;

    @NotNull(message = "Price is required")
    @Positive(message = "Price must be positive")
    private Double price;

    @NotNull(message = "Bedrooms is required")
    @Min(value = 1, message = "Bedrooms must be at least 1")
    private Integer bedrooms;

    @NotNull(message = "Bathrooms is required")
    @Positive(message = "Bathrooms must be positive")
    private Double bathrooms;

    @NotNull(message = "Area is required")
    @Positive(message = "Area must be positive")
    private Double area;

    @NotBlank(message = "Address is required")
    private String address;

    @NotBlank(message = "City is required")
    private String city;

    @NotBlank(message = "State is required")
    private String state;

    @NotBlank(message = "ZIP code is required")
    @Pattern(regexp = "\\d{6}", message = "ZIP code must be 6 digits")
    private String zipCode;

    @NotBlank(message = "Property type is required")
    private String propertyType;

    @NotBlank(message = "Listing type is required")
    private String listingType; // "Rent" or "For Sale"

    @NotBlank(message = "Phone number is required")
    @Pattern(regexp = "\\d{10}", message = "Phone number must be 10 digits")
    private String phoneNumber;

    private LocalDate listingDate;

    @NotBlank(message = "Status is required")
    private String status; // "Available", "Sold", "Rented"

    private Boolean isAvailable;

    public Property() {
        this.listingDate = LocalDate.now();
        this.status = "Available";
        this.isAvailable = true;
    }

    // Getters and setters remain the same...
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }

    public Integer getBedrooms() { return bedrooms; }
    public void setBedrooms(Integer bedrooms) { this.bedrooms = bedrooms; }

 public Double getBathrooms() { return bathrooms; }
public void setBathrooms(Double bathrooms) { this.bathrooms = bathrooms; }

public Double getArea() { return area; }
public void setArea(Double area) { this.area = area; }

public String getAddress() { return address; }
public void setAddress(String address) { this.address = address; }

public String getCity() { return city; }
public void setCity(String city) { this.city = city; }

public String getState() { return state; }
public void setState(String state) { this.state = state; }

public String getZipCode() { return zipCode; }
public void setZipCode(String zipCode) { this.zipCode = zipCode; }

public String getPropertyType() { return propertyType; }
public void setPropertyType(String propertyType) { this.propertyType = propertyType; }

public String getListingType() { return listingType; }
public void setListingType(String listingType) { this.listingType = listingType; }

public String getPhoneNumber() { return phoneNumber; }
public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }

public LocalDate getListingDate() { return listingDate; }
public void setListingDate(LocalDate listingDate) { this.listingDate = listingDate; }

public String getStatus() { return status; }
public void setStatus(String status) { this.status = status; }

public Boolean getIsAvailable() { return isAvailable; }
public void setIsAvailable(Boolean isAvailable) { this.isAvailable = isAvailable; }
}