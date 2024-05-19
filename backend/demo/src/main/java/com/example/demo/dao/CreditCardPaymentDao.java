package com.example.demo.dao;

import com.example.demo.bean.CreditCardPayment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CreditCardPaymentDao extends JpaRepository<CreditCardPayment, Long> {
}
