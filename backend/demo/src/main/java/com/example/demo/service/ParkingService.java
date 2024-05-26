package com.example.demo.service;


import com.example.demo.bean.Parking;
import com.example.demo.dao.ParkingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ParkingService {

    private final ParkingRepository parkingRepository;

    public ParkingService(ParkingRepository parkingRepository) {this.parkingRepository = parkingRepository;}


    public List<Parking> getAllParkings() {
        return parkingRepository.findAll();
    }

    public Optional<Parking> getParkingById(Long id) {
        return parkingRepository.findById(id);
    }

    public Parking createParking(Parking parking) {
        return parkingRepository.save(parking);
    }

    public Optional<Parking> updateParking(Long id, Parking parkingDetails) {
        Optional<Parking> optionalParking = parkingRepository.findById(id);
        if (optionalParking.isPresent()) {
            Parking existingParking = optionalParking.get();
            existingParking.setCity(parkingDetails.getCity()); // Assuming 'city' is a field in Parking
            return Optional.of(parkingRepository.save(existingParking));
        } else {
            return Optional.empty();  // Or handle this case appropriately
        }
    }

    public void deleteParking(Long id) {
        parkingRepository.deleteById(id);
    }
}

