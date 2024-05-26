package com.example.demo.service;

import com.example.demo.bean.Location;
import com.example.demo.dao.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LocationService {

    @Autowired
    private LocationRepository locationRepository;

    public Location createLocation(Location location) {
        return locationRepository.save(location);
    }

    public List<Location> getAllLocations() {
        return locationRepository.findAll();
    }

    public Optional<Location> getLocationById(Long id) {
        return locationRepository.findById(id);
    }

    public void deleteLocation(Long id) {
        locationRepository.deleteById(id);
    }

    public Location updateLocation(Long id, Location updatedLocation) {
        Optional<Location> existingLocation = locationRepository.findById(id);
        if (existingLocation.isPresent()) {
            Location location = existingLocation.get();
            if (updatedLocation.getLocation() != null) {
                location.setLocation(updatedLocation.getLocation());
            }
            if (updatedLocation.getUser() != null) {
                location.setUser(updatedLocation.getUser());
            }
            return locationRepository.save(location);
        } else {
            throw new RuntimeException("Location not found with id " + id);
        }
    }
}
