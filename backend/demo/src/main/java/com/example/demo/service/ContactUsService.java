package com.example.demo.service;

import com.example.demo.bean.ContactUs;
import com.example.demo.dao.ContactUsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactUsService {

    @Autowired
    private ContactUsRepository contactUsRepository;

    public ContactUs createContactUs(ContactUs contactUs) {
        return contactUsRepository.save(contactUs);
    }

    public List<ContactUs> getAllMessages() {
        return contactUsRepository.findAll();
    }

    public Optional<ContactUs> getMessageById(Long id) {
        return contactUsRepository.findById(id);
    }

    public void deleteMessage(Long id) {
        contactUsRepository.deleteById(id);
    }

    public ContactUs updateContactUs(Long id, ContactUs updatedContactUs) {
        return contactUsRepository.findById(id)
                .map(contactUs -> {
                    if (updatedContactUs.getEmail() != null && !updatedContactUs.getEmail().isEmpty()) {
                        contactUs.setEmail(updatedContactUs.getEmail());
                    }
                    if (updatedContactUs.getMessage() != null && !updatedContactUs.getMessage().isEmpty()) {
                        contactUs.setMessage(updatedContactUs.getMessage());
                    }
                    if (updatedContactUs.getUser() != null) {
                        contactUs.setUser(updatedContactUs.getUser());
                    }
                    return contactUsRepository.save(contactUs);
                })
                .orElseThrow(() -> new RuntimeException("Message not found with id " + id));
    }
}
