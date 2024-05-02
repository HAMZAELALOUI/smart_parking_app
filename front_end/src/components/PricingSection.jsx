import React from 'react';
import { Card, CardContent, CardHeader, Typography, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import EventIcon from '@mui/icons-material/Event'; // Weekly
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'; // Monthly
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'; // Yearly
import { CheckCircleOutline } from '@mui/icons-material';

function PricingSection() {
    const plans = [
        {
            name: "Weekly Pass",
            price: "$25",
            duration: "per week",
            features: ["Unlimited access", "24/7 Support", "Email alerts"],
            icon: <EventIcon />
        },
        {
            name: "Monthly Pass",
            price: "$80",
            duration: "per month",
            features: ["Unlimited access", "Priority support", "Email and SMS alerts"],
            icon: <CalendarMonthIcon />
        },
        {
            name: "Yearly Pass",
            price: "$800",
            duration: "per year",
            features: ["Unlimited access", "Dedicated support", "All notifications", "Annual reports"],
            icon: <CalendarTodayIcon />
        }
    ];

    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', gap: '20px' }}>
            {plans.map(plan => (
                <Card key={plan.name} raised sx={{ minWidth: 275, maxWidth: 300 }}>
                    <CardHeader
                        avatar={plan.icon}
                        title={plan.name}
                        titleTypographyProps={{ align: 'center' }}
                        subheader={plan.duration}
                        subheaderTypographyProps={{ align: 'center' }}
                        action={<Typography component="h2" variant="h6" color="primary">{plan.price}</Typography>}
                        sx={{ textAlign: 'center', backgroundColor: '#f5f5f5' }}
                    />
                    <CardContent>
                        <List dense>
                            {plan.features.map(feature => (
                                <ListItem key={feature}>
                                    <ListItemIcon>
                                        <CheckCircleOutline color="success" />
                                    </ListItemIcon>
                                    <ListItemText primary={feature} />
                                </ListItem>
                            ))}
                        </List>
                        <Button fullWidth variant="outlined" color="primary">
                            Choose {plan.name.split(' ')[0]}
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default PricingSection;
