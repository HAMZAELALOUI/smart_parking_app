import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Card, CardContent, Typography, Avatar, useMediaQuery } from '@mui/material';
import ScrollContainer from 'react-indiana-drag-scroll'; // This library helps with smooth dragging for scroll containers

export default function Testimonials() {
    const reviews = [
        { name: "Zakaraia ", location: "Q Park Mayfair", comment: "Easy to follow instructions. Plenty of parking spaces and very secure. Would highly recommend." },
        { name: "Morad", location: "London Heathrow Marriott Hotel Car Park", comment: "Hotel easy to spot in plenty of time. Bus lane not a problem. Followed directions and instructions, so parked car in space." },
        { name: "Michael B", location: "Heathrow Terminal 5 Long Stay", comment: "Very convenient and competitively priced. Shuttle service was prompt and efficient." },
        { name: "Hamza", location: "London Heathrow Marriott Hotel Car Park", comment: "Hotel easy to spot in plenty of time. Bus lane not a problem. Followed directions and instructions, so parked car in space." },
        { name: "Reda", location: "London Heathrow Marriott Hotel Car Park", comment: "Hotel easy to spot in plenty of time. Bus lane not a problem. Followed directions and instructions, so parked car in space." },
        { name: "Ikram", location: "London Heathrow Marriott Hotel Car Park", comment: "Hotel easy to spot in plenty of time. Bus lane not a problem. Followed directions and instructions, so parked car in space." },
        { name: "Oussama", location: "London Heathrow Marriott Hotel Car Park", comment: "Hotel easy to spot in plenty of time. Bus lane not a problem. Followed directions and instructions, so parked car in space." },

        // Additional reviews...
    ];

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Box sx={{
            overflow: 'hidden',
            py: 3,
            px: 1,
            bgcolor: 'rgba(245, 245, 220, 0.3)' // Beige background color with some transparency
        }}>
            <ScrollContainer className="scroll-container" vertical={false} hideScrollbars={true}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    p: 1,
                    gap: 2,
                    bgcolor: 'rgba(245, 245, 220, 0.8)' // Deeper beige for contrast
                }}>
                    {reviews.map((review, index) => (
                        <Card key={index} sx={{
                            minWidth: 300,
                            maxWidth: 300,
                            boxShadow: 3,
                            bgcolor: 'background.paper' // Keeps the card background slightly off-white for readability
                        }}>
                            <CardContent>
                                <Avatar sx={{ bgcolor: theme.palette.secondary.main, mb: 2 }}>{review.name.charAt(0)}</Avatar>
                                <Typography variant="subtitle1" gutterBottom sx={{ fontFamily: '"Times New Roman", Times, serif' }}>
                                    {review.comment}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {review.name} at {review.location}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </ScrollContainer>
        </Box>
    );
}
