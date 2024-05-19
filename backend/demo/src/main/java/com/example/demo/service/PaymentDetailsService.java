package com.example.demo.service;


import com.example.demo.bean.BankTransfer;
import com.example.demo.bean.CreditCardPayment;
import com.example.demo.bean.PayPalPayment;
import com.example.demo.dao.BankTransferDao;
import com.example.demo.dao.CreditCardPaymentDao;
import com.example.demo.dao.PayPalPaymentDao;
import com.example.demo.dao.PaymentDetailsDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class PaymentDetailsService {

    @Autowired
    private PaymentDetailsDao paymentDao;

    @Autowired
    private CreditCardPaymentDao creditCardPaymentDao;

    @Autowired
    private PayPalPaymentDao payPalPaymentDao;

    @Autowired
    private BankTransferDao bankTransferDao;

    public void saveCreditCardPayment(CreditCardPayment payment) {
        creditCardPaymentDao.save(payment);
    }

    public void savePayPalPayment(PayPalPayment payment) {
        payPalPaymentDao.save(payment);
    }

    public void saveBankTransfer(BankTransfer payment) {
        bankTransferDao.save(payment);
    }
}
