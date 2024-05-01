import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box, CircularProgress, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';

function UserProfile() {
    const [user, setUser] = useState({
        firstName: 'Hamza',
        lastName: 'El Aloui',
        phone: '+44',
        email: 'hamza.elaloui10@gmail.com',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        if (user.newPassword !== user.confirmPassword) {
            setMessage('Passwords do not match');
            return false;
        }
        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateForm()) {
            return;
        }
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setMessage('Profile and Password Updated Successfully!');
        }, 2000);
    };

    return (
        <Box sx={{ display: 'flex', height: '100vh', p: 2 }}>
            <Box sx={{ width: '25%', bgcolor: 'background.paper' }}>
                <Typography variant="h6" sx={{ my: 2, ml: 2 }}>
                    Profile Options
                </Typography>
                <List component="nav" aria-label="mailbox folders">
                    <ListItem button>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <NotificationsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Notifications" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile Settings" />
                    </ListItem>
                </List>
            </Box>
            <Paper elevation={3} sx={{ width: '75%', p: 3, overflow: 'auto' }}>
                <Typography variant="h5" sx={{ mb: 2 }}>Account Information</Typography>
                {message && <Typography color="primary" sx={{ mb: 2 }}>{message}</Typography>}
                <form onSubmit={handleSubmit}>
                    {/* Form Fields */}
                    <TextField fullWidth label="First name" variant="outlined" name="firstName" value={user.firstName} onChange={handleChange} sx={{ mb: 2 }} />
                    <TextField fullWidth label="Last name" variant="outlined" name="lastName" value={user.lastName} onChange={handleChange} sx={{ mb: 2 }} />
                    <TextField fullWidth label="Phone number" variant="outlined" name="phone" value={user.phone} onChange={handleChange} sx={{ mb: 2 }} />
                    <TextField fullWidth label="Email Address" variant="outlined" name="email" value={user.email} onChange={handleChange} sx={{ mb: 2 }} />
                    <TextField fullWidth label="Current Password" type="password" variant="outlined" name="currentPassword" value={user.currentPassword} onChange={handleChange} sx={{ mb: 2 }} />
                    <TextField fullWidth label="New Password" type="password" variant="outlined" name="newPassword" value={user.newPassword} onChange={handleChange} sx={{ mb: 2 }} />
                    <TextField fullWidth label="Confirm New Password" type="password" variant="outlined" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} sx={{ mb: 2 }} />
                    <Button type="submit" variant="contained" fullWidth disabled={loading} sx={{ backgroundColor: '#4CAF50', '&:hover': { backgroundColor: '#45A049' }, color: 'white', '&.Mui-disabled': { backgroundColor: '#E0E0E0', color: '#9E9E9E' } }}>
                        {loading ? <CircularProgress size={24} color="inherit" /> : 'Update Profile'}
                    </Button>
                </form>
            </Paper>
        </Box>
    );
}

export default UserProfile;
