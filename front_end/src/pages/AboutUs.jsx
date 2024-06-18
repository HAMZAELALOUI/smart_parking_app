import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import FAQAccordion from '../components/common/help-common/FAQAccordion';
import ContactUsList from '../components/common/help-common/ContactUsList';
import LiveChatDialog from '../components/common/help-common/LiveChatDialog';


function HelpSection() {
  const [openChat, setOpenChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const faqs = [
    { question: "How do I reserve a parking spot?", answer: "You can reserve a parking spot by navigating to the 'Reserve' section in our app and selecting the spot you wish to reserve." },
    { question: "What are the payment options?", answer: "We accept various payment methods including credit cards, PayPal, and mobile payments." },
    { question: "What should I do if I encounter an issue with a parking spot?", answer: "Please contact our support using the chat feature or email us directly for immediate assistance." },
  ];

  const handleChatOpen = () => {
    setOpenChat(true);
  };

  const handleChatClose = () => {
    setOpenChat(false);
  };

  const handleSendMessage = async () => {
    // Implement the function to send a message
  };

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  return (
    <Box sx={{ p: 3, mt: 9 }}>
      <Typography variant="h4" gutterBottom>
        Help & Support
      </Typography>
      <FAQAccordion faqs={faqs} />
      <ContactUsList handleChatOpen={handleChatOpen} />
      <LiveChatDialog
        openChat={openChat}
        handleChatClose={handleChatClose}
        chatMessages={chatMessages}
        newMessage={newMessage}
        handleNewMessageChange={handleNewMessageChange}
        handleSendMessage={handleSendMessage}
      />
    </Box>
  );
}

export default HelpSection;
