package com.example.demo.service;

import com.example.demo.bean.ReservationDetail;
import com.example.demo.dao.ReservationDetailRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class ReservationDetailService {

    private final ReservationDetailRepository reservationDetailRepository;

    public ReservationDetailService(ReservationDetailRepository reservationDetailRepository) {
        this.reservationDetailRepository = reservationDetailRepository;
    }

    public List<ReservationDetail> getAllReservationDetails() {
        return reservationDetailRepository.findAll();
    }

    public ReservationDetail getReservationDetailById(Long id) {
        Optional<ReservationDetail> optionalReservationDetail = reservationDetailRepository.findById(id);
        return optionalReservationDetail.orElse(null);
    }

    public ReservationDetail createReservationDetail(ReservationDetail reservationDetail) {
        return reservationDetailRepository.save(reservationDetail);
    }

    public ReservationDetail updateReservationDetail(Long id, ReservationDetail reservationDetailDetails) {
        Optional<ReservationDetail> optionalReservationDetail = reservationDetailRepository.findById(id);
        if (optionalReservationDetail.isPresent()) {
            ReservationDetail reservationDetail = optionalReservationDetail.get();
            reservationDetail.setDateParking(reservationDetailDetails.getDateParking());
            reservationDetail.setEndDateParking(reservationDetailDetails.getEndDateParking());
            reservationDetail.setPaymentId(reservationDetailDetails.getPaymentId());
            reservationDetail.setCar(reservationDetailDetails.getCar());
            reservationDetail.setParking(reservationDetailDetails.getParking());
            reservationDetail.setParkingSpot(reservationDetailDetails.getParkingSpot());
            reservationDetail.setUser(reservationDetailDetails.getUser());
            return reservationDetailRepository.save(reservationDetail);
        } else {
            return null;
        }
    }

    public void deleteReservationDetail(Long id) {
        Optional<ReservationDetail> optionalReservationDetail = reservationDetailRepository.findById(id);
        optionalReservationDetail.ifPresent(reservationDetailRepository::delete);
    }
}
