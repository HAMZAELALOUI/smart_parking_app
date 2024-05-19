package com.example.demo.dao;

import com.example.demo.bean.PayPalPayment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PayPalPaymentDao extends JpaRepository<PayPalPayment, Long> {
}
