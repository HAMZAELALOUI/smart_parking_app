import React from 'react';
import { Typography, List, ListItem, ListItemIcon, ListItemText, IconButton, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ChatIcon from '@mui/icons-material/Chat';

const ContactUsList = ({ handleChatOpen }) => (
  <Paper elevation={3} sx={{ p: 2 }}>
    <Typography variant="h6" gutterBottom>Contact Us</Typography>
    <List>
      <ListItem>
        <ListItemIcon>
          <PhoneIcon />
        </ListItemIcon>
        <ListItemText primary="Call Us" secondary={<a href="tel:+1234567890" style={{ textDecoration: 'none', color: 'inherit' }}>+123 456 7890</a>} />
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
        <IconButton edge="end" aria-label="chat" onClick={handleChatOpen}>
          <ChatIcon color="primary" />
        </IconButton>
      </ListItem>
    </List>
  </Paper>
);

export default ContactUsList;
