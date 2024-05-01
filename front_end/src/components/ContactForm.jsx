import React, { useState } from 'react';
import { Box, Tabs, Tab, TextField, Button, Snackbar, Typography } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ContactForm() {
  const [tabValue, setTabValue] = useState(0);
  const [contact, setContact] = useState({ name: '', email: '', message: '' });
  const [feedback, setFeedback] = useState({ email: '', content: '' });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleInputChange = (event, type) => {
    const { name, value } = event.target;
    if (type === 'contact') {
      setContact(prev => ({ ...prev, [name]: value }));
    } else {
      setFeedback(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (type) => {
    // Simulation of form submission
    setOpenSnackbar(true);
    setSnackbarMessage(type === 'contact' ? 'Contact request submitted!' : 'Feedback submitted!');
  };

  return (
    <Box sx={{ width: '100%', mt: 3 }}>
      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tab label="Contact Us" />
        <Tab label="Feedback" />
      </Tabs>

      {tabValue === 0 && (
        <Box sx={{ mt: 2, p: 3 }}>
          <Typography variant="h6">Contact Us</Typography>
          <TextField fullWidth label="Name" name="name" value={contact.name} onChange={(e) => handleInputChange(e, 'contact')} sx={{ mb: 2 }} />
          <TextField fullWidth label="Email" name="email" value={contact.email} onChange={(e) => handleInputChange(e, 'contact')} sx={{ mb: 2 }} />
          <TextField fullWidth label="Message" name="message" value={contact.message} onChange={(e) => handleInputChange(e, 'contact')} sx={{ mb: 2 }} multiline rows={4} />
          <Button variant="contained" color="primary" onClick={() => handleSubmit('contact')}>Submit</Button>
        </Box>
      )}

      {tabValue === 1 && (
        <Box sx={{ mt: 2, p: 3 }}>
          <Typography variant="h6">Feedback</Typography>
          <TextField fullWidth label="Email" name="email" value={feedback.email} onChange={(e) => handleInputChange(e, 'feedback')} sx={{ mb: 2 }} />
          <TextField fullWidth label="Feedback" name="content" value={feedback.content} onChange={(e) => handleInputChange(e, 'feedback')} sx={{ mb: 2 }} multiline rows={4} />
          <Button variant="contained" color="primary" onClick={() => handleSubmit('feedback')}>Submit</Button>
        </Box>
      )}

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ContactForm;
