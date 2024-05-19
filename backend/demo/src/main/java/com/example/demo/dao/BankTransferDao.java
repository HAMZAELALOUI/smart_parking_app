package com.example.demo.dao;

import com.example.demo.bean.BankTransfer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BankTransferDao extends JpaRepository<BankTransfer, Long> {
}
