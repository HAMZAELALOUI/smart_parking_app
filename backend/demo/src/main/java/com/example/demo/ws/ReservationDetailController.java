package com.example.demo.ws;

import com.example.demo.bean.ReservationDetail;
import com.example.demo.service.ReservationDetailService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/reservation-details")
public class ReservationDetailController {

    private final ReservationDetailService reservationDetailService;

    public ReservationDetailController(ReservationDetailService reservationDetailService) {
        this.reservationDetailService = reservationDetailService;
    }

    @GetMapping
    public List<ReservationDetail> getAllReservationDetails() {
        return reservationDetailService.getAllReservationDetails();
    }

    @PostMapping
    public ReservationDetail createReservationDetail(@RequestBody ReservationDetail reservationDetail) {
        return reservationDetailService.createReservationDetail(reservationDetail);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getReservationDetailById(@PathVariable Long id) {
        ReservationDetail reservationDetail = reservationDetailService.getReservationDetailById(id);
        if (reservationDetail != null) {
            return ResponseEntity.ok(reservationDetail);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateReservationDetail(@PathVariable Long id, @RequestBody ReservationDetail reservationDetailDetails) {
        ReservationDetail updatedReservationDetail = reservationDetailService.updateReservationDetail(id, reservationDetailDetails);
        if (updatedReservationDetail != null) {
            return ResponseEntity.ok(updatedReservationDetail);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteReservationDetail(@PathVariable Long id) {
        reservationDetailService.deleteReservationDetail(id);
        return ResponseEntity.noContent().build();
    }
}