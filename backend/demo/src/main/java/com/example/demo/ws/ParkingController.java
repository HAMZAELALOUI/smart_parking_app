package com.example.demo.ws;
import com.example.demo.bean.Parking;
import com.example.demo.service.ParkingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/parkings")
public class ParkingController {

    private final ParkingService parkingService;

    public ParkingController(ParkingService parkingService) {
        this.parkingService = parkingService;
    }

    @GetMapping
    public List<Parking> getAllParkings() {
        return parkingService.getAllParkings();
    }

    @PostMapping
    public Parking createParking(@RequestBody Parking parking) {
        return parkingService.createParking(parking);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getParkingById(@PathVariable Long id) {
        Optional<Parking> parkingOptional = parkingService.getParkingById(id);
        if (parkingOptional.isPresent()) {
            return ResponseEntity.ok(parkingOptional.get());
        } else {
            return ResponseEntity.notFound().build(); // Or return an appropriate error response
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateParking(@PathVariable Long id, @RequestBody Parking parkingDetails) {
        Optional<Parking> updatedParking = parkingService.updateParking(id, parkingDetails);
        if (updatedParking.isPresent()) {
            return ResponseEntity.ok(updatedParking.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteParking(@PathVariable Long id) {
        parkingService.deleteParking(id);
        return ResponseEntity.noContent().build();
    }
}

