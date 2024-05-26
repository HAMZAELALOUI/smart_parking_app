package com.example.demo.service;

import com.example.demo.bean.ParkingSpot;
import com.example.demo.dao.ParkingSpotRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ParkingSpotService {

    private final ParkingSpotRepository parkingSpotRepository;

    public ParkingSpotService(ParkingSpotRepository parkingSpotRepository) {
        this.parkingSpotRepository = parkingSpotRepository;
    }

    public List<ParkingSpot> getAllParkingSpots() {
        return parkingSpotRepository.findAll();
    }

    public ParkingSpot getParkingSpotById(Long id) {
        Optional<ParkingSpot> optionalParkingSpot = parkingSpotRepository.findById(id);
        return optionalParkingSpot.orElse(null);
    }

    public ParkingSpot createParkingSpot(ParkingSpot parkingSpot) {
        return parkingSpotRepository.save(parkingSpot);
    }

    public ParkingSpot updateParkingSpot(Long id, ParkingSpot parkingSpotDetails) {
        Optional<ParkingSpot> optionalParkingSpot = parkingSpotRepository.findById(id);
        if (optionalParkingSpot.isPresent()) {
            ParkingSpot parkingSpot = optionalParkingSpot.get();
            parkingSpot.setName(parkingSpotDetails.getName());
            parkingSpot.setStatus(parkingSpotDetails.getStatus());
            return parkingSpotRepository.save(parkingSpot);
        } else {
            return null;
        }
    }

    public void deleteParkingSpot(Long id) {
        Optional<ParkingSpot> optionalParkingSpot = parkingSpotRepository.findById(id);
        optionalParkingSpot.ifPresent(parkingSpotRepository::delete);
    }


}
