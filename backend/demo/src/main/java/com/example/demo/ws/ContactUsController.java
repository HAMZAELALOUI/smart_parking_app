package com.example.demo.ws;

import com.example.demo.bean.ContactUs;
import com.example.demo.service.ContactUsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/contactus")
public class ContactUsController {

    @Autowired
    private ContactUsService contactUsService;

    @PostMapping
    public ContactUs createContactUs(@RequestBody ContactUs contactUs) {
        return contactUsService.createContactUs(contactUs);
    }

    @GetMapping
    public List<ContactUs> getAllMessages() {
        return contactUsService.getAllMessages();
    }

    @GetMapping("/{id}")
    public Optional<ContactUs> getMessageById(@PathVariable Long id) {
        return contactUsService.getMessageById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteMessage(@PathVariable Long id) {
        contactUsService.deleteMessage(id);
    }

    @PutMapping("/{id}")
    public ContactUs updateContactUs(@PathVariable Long id, @RequestBody ContactUs updatedContactUs) {
        return contactUsService.updateContactUs(id, updatedContactUs);
    }
}
