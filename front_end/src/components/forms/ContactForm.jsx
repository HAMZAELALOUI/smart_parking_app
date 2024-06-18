import React, { useState } from 'react';
import { Box, Tabs, Tab, TextField, Button, Snackbar, Typography, Paper, IconButton } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
    setOpenSnackbar(true);
    setSnackbarMessage(type === 'contact' ? 'Contact request submitted!' : 'Feedback submitted!');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', p: 2, alignItems: 'center', justifyContent: 'space-between' }}>
      <Box sx={{ width: '60%', p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <img src="/assets/contactus.webp" alt="Contact Image" style={{ width: '100%', height: 'auto' }} />
      </Box>
      <Box sx={{ width: '40%', p: 4 }}>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Contact Us" />
          <Tab label="Feedback" />
        </Tabs>
        {tabValue === 0 && (
          <Box sx={{ mt: 2, p: 3 }}>
            <Typography variant="h6">Contact Us</Typography>
            <TextField fullWidth label="Name" name="name" value={contact.name} onChange={(e) => handleInputChange(e, 'contact')} sx={{ mb: 4 }} />
            <TextField fullWidth label="Email" name="email" value={contact.email} onChange={(e) => handleInputChange(e, 'contact')} sx={{ mb: 4 }} />
            <TextField fullWidth label="Message" name="message" value={contact.message} onChange={(e) => handleInputChange(e, 'contact')} multiline rows={4} sx={{ mb: 4 }} />
            <Button variant="contained" sx={{ backgroundColor: '#4CAF50', '&:hover': { backgroundColor: '#45A049' }, color: 'white', '&.Mui-disabled': { backgroundColor: '#E0E0E0', color: '#9E9E9E' } }} onClick={() => handleSubmit('contact')}>Submit</Button>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <IconButton color="primary"><FacebookIcon /></IconButton>
              <IconButton color="primary"><TwitterIcon /></IconButton>
              <IconButton color="primary"><LinkedInIcon /></IconButton>
            </Box>
          </Box>
        )}
        {tabValue === 1 && (
          <Box sx={{ mt: 2, p: 3 }}>
            <Typography variant="h6">Feedback</Typography>
            <TextField fullWidth label="Email" name="email" value={feedback.email} onChange={(e) => handleInputChange(e, 'feedback')} sx={{ mb: 4 }} />
            <TextField fullWidth label="Feedback" name="content" value={feedback.content} onChange={(e) => handleInputChange(e, 'feedback')} multiline rows={4} sx={{ mb: 4 }} />
            <Button variant="contained" sx={{ backgroundColor: '#4CAF50', '&:hover': { backgroundColor: '#45A049' }, color: 'white', '&.Mui-disabled': { backgroundColor: '#E0E0E0', color: '#9E9E9E' } }} onClick={() => handleSubmit('feedback')}>Submit</Button>
          </Box>
        )}
        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
          <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}

export default ContactForm;
