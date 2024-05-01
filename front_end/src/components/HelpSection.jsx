import React from 'react';
import { Typography, Paper, Box, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemIcon, ListItemText, Divider, IconButton, Link, Badge } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ChatIcon from '@mui/icons-material/Chat';

function HelpSection() {
    const faqs = [
        { question: "How do I reserve a parking spot?", answer: "You can reserve a parking spot by navigating to the 'Reserve' section in our app and selecting the spot you wish to reserve." },
        { question: "What are the payment options?", answer: "We accept various payment methods including credit cards, PayPal, and mobile payments." },
        { question: "What should I do if I encounter an issue with a parking spot?", answer: "Please contact our support using the chat feature or email us directly for immediate assistance." },
    ];

    return (
        <Box sx={{ p: 3, mt: 9 }}>
            <Typography variant="h4" gutterBottom>
                Help & Support
            </Typography>
            <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
                <Typography variant="h6">Frequently Asked Questions</Typography>
                {faqs.map((faq, index) => (
                    <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}a-content`}
                            id={`panel${index}a-header`}
                        >
                            <Typography>{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {faq.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Paper>
            <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>Contact Us</Typography>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <PhoneIcon />
                        </ListItemIcon>
                        <ListItemText primary="Call Us" secondary="+123 456 7890" />
                    </ListItem>
                    <ListItem button component="a" href="mailto:support@parkingapp.com">
                        <ListItemIcon>
                            <EmailIcon />
                        </ListItemIcon>
                        <ListItemText primary="Email Us" secondary="support@parkingapp.com" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ChatIcon />
                        </ListItemIcon>
                        <ListItemText primary="Live Chat" secondary="Available 24/7" />
                        <IconButton edge="end" aria-label="chat">
                            <ChatIcon color="primary" />
                        </IconButton>
                    </ListItem>
                </List>
            </Paper>
        </Box>
    );
}

export default HelpSection;
