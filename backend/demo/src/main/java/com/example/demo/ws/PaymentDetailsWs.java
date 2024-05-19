package com.example.demo.ws;


import com.example.demo.bean.BankTransfer;
import com.example.demo.bean.CreditCardPayment;
import com.example.demo.bean.PayPalPayment;
import com.example.demo.service.PaymentDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/payments")
public class PaymentDetailsWs {

    @Autowired
    private PaymentDetailsService paymentService;

    @PostMapping("/credit-card")
    public void saveCreditCardPayment(@RequestBody CreditCardPayment payment) {
        paymentService.saveCreditCardPayment(payment);
    }

    @PostMapping("/paypal")
    public void savePayPalPayment(@RequestBody PayPalPayment payment) {
        paymentService.savePayPalPayment(payment);
    }

    @PostMapping("/bank-transfer")
    public void saveBankTransfer(@RequestBody BankTransfer payment) {
        paymentService.saveBankTransfer(payment);
    }
}
