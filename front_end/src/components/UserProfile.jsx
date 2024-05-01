import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box, CircularProgress, List, ListItem, ListItemIcon, ListItemText, Divider, Popover, Badge, IconButton, Collapse } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import DashboardUser from './DashboardUser';
import { Person } from '@mui/icons-material';

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
    const [view, setView] = useState('profile'); // Can be 'profile' or 'dashboard'
    const [anchorEl, setAnchorEl] = useState(null); // For Popover control
    const [notifications, setNotifications] = useState([
        { id: 1, title: "Notification 1", details: "Details about notification 1", open: false },
        { id: 2, title: "Notification 2", details: "Details about notification 2", open: false },
        { id: 3, title: "Notification 3", details: "Details about notification 3", open: false },
    ]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (user.newPassword !== user.confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setMessage('Profile and Password Updated Successfully!');
        }, 2000);
    };

    const handleNotificationClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleNotificationClose = () => {
        setAnchorEl(null);
    };

    const handleExpandClick = (id) => {
        setNotifications(notifications.map(notification => 
            notification.id === id ? {...notification, open: !notification.open} : notification
        ));
    };

    const handleDeleteNotification = (id) => {
        setNotifications(notifications.filter(notification => notification.id !== id));
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Box sx={{ display: 'flex', height: '100vh', p: 2, mt: 9 }}>
            <Box sx={{ width: '25%', bgcolor: 'background.paper' }}>
                <List component="nav" aria-label="mailbox folders">
                    <ListItem button onClick={() => setView('dashboard')}>
                        <ListItemIcon><DashboardIcon /></ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button onClick={() => setView('profile')}>
                        <ListItemIcon><Person /></ListItemIcon>
                        <ListItemText primary="Profile Settings" />
                    </ListItem>
                    <ListItem button onClick={handleNotificationClick}>
                        <ListItemIcon>
                            <Badge badgeContent={notifications.length} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </ListItemIcon>
                        <ListItemText primary="Notifications" />
                    </ListItem>
                </List>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleNotificationClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <List sx={{ p: 2, width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {notifications.map(notification => (
                            <React.Fragment key={notification.id}>
                                <ListItem>
                                    <ListItemText primary={notification.title} secondary={notification.details} />
                                    <IconButton onClick={() => handleExpandClick(notification.id)}>
                                        <ExpandMoreIcon />
                                    </IconButton>
                                    <IconButton edge="end" onClick={() => handleDeleteNotification(notification.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItem>
                                <Collapse in={notification.open} timeout="auto" unmountOnExit>
                                    <Box sx={{ pl: 4, pr: 4, pb: 2 }}>
                                        <Typography>{notification.details}</Typography>
                                    </Box>
                                </Collapse>
                                <Divider />
                            </React.Fragment>
                        ))}
                    </List>
                </Popover>
            </Box>
            <Paper elevation={3} sx={{ width: '75%', p: 3, overflow: 'auto' }}>
                {view === 'profile' ? (
                    <>
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
                    </>
                ) : (
                    <DashboardUser/>
                )}
            </Paper>
        </Box>
    );
}

export default UserProfile;
