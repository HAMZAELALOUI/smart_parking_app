package com.example.demo.ws;

import com.example.demo.bean.ParkingSpot;
import com.example.demo.service.ParkingSpotService;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/api/parking-spots")
public class ParkingSpotController {

    private final ParkingSpotService parkingSpotService;

    public ParkingSpotController(ParkingSpotService parkingSpotService) {
        this.parkingSpotService = parkingSpotService;
    }

    @GetMapping
    public List<ParkingSpot> getAllParkingSpots() {
        return parkingSpotService.getAllParkingSpots();
    }

    @PostMapping
    public ParkingSpot createParkingSpot(@RequestBody ParkingSpot parkingSpot) {
        return parkingSpotService.createParkingSpot(parkingSpot);
    }

    @GetMapping("/{id}")
    public ParkingSpot getParkingSpotById(@PathVariable Long id) {
        return parkingSpotService.getParkingSpotById(id);
    }

    @PutMapping("/{id}")
    public ParkingSpot updateParkingSpot(@PathVariable Long id, @RequestBody ParkingSpot parkingSpotDetails) {
        return parkingSpotService.updateParkingSpot(id, parkingSpotDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteParkingSpot(@PathVariable Long id) {
        parkingSpotService.deleteParkingSpot(id);
    }
}
