package com.example.demo.service;

import com.example.demo.bean.Feedback;
import com.example.demo.dao.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    public Feedback createFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    public List<Feedback> getAllFeedbacks() {
        return feedbackRepository.findAll();
    }

    public Optional<Feedback> getFeedbackById(Long id) {
        return feedbackRepository.findById(id);
    }

    public void deleteFeedback(Long id) {
        feedbackRepository.deleteById(id);
    }

    public Feedback updateFeedback(Long id, Feedback updatedFeedback) {
        Optional<Feedback> existingFeedback = feedbackRepository.findById(id);
        if (existingFeedback.isPresent()) {
            Feedback feedback = existingFeedback.get();
            if (updatedFeedback.getEmail() != null) {
                feedback.setEmail(updatedFeedback.getEmail());
            }
            if (updatedFeedback.getMessage() != null) {
                feedback.setMessage(updatedFeedback.getMessage());
            }
            if (updatedFeedback.getUser() != null) {
                feedback.setUser(updatedFeedback.getUser());
            }
            return feedbackRepository.save(feedback);
        } else {
            throw new RuntimeException("Feedback not found with id " + id);
        }
    }
}
