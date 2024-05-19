package com.example.demo.dao;

import com.example.demo.bean.PaymentDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentDetailsDao extends JpaRepository<PaymentDetails, Long> {
}

