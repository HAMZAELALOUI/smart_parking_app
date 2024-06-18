import React from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions, IconButton, List, ListItem,
  ListItemIcon, ListItemText, TextField, Avatar
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

const LiveChatDialog = ({
  openChat,
  handleChatClose,
  chatMessages,
  newMessage,
  handleNewMessageChange,
  handleSendMessage
}) => (
  <Dialog open={openChat} onClose={handleChatClose} fullWidth maxWidth="sm">
    <DialogTitle>
      Live Chat
      <IconButton
        aria-label="close"
        onClick={handleChatClose}
        sx={{ position: 'absolute', right: 8, top: 8 }}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>
    <DialogContent dividers sx={{ minHeight: '400px' }}>
      <List sx={{ maxHeight: 300, overflow: 'auto' }}>
        {chatMessages.map((msg, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <Avatar>{msg.sender[0]}</Avatar>
            </ListItemIcon>
            <ListItemText primary={msg.text} secondary={msg.time} />
          </ListItem>
        ))}
      </List>
    </DialogContent>
    <DialogActions sx={{ justifyContent: 'space-between' }}>
      <TextField
        autoFocus
        margin="dense"
        label="Type your message..."
        type="text"
        fullWidth
        variant="outlined"
        value={newMessage}
        onChange={handleNewMessageChange}
        onKeyPress={(event) => {
          if (event.key === 'Enter' && !event.shiftKey) {
            handleSendMessage();
            event.preventDefault();
          }
        }}
      />
      <IconButton color="primary" onClick={handleSendMessage}>
        <SendIcon />
      </IconButton>
    </DialogActions>
  </Dialog>
);

export default LiveChatDialog;
