import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GiCarKey, GiParkingMeter } from 'react-icons/gi';
import { MdBlock } from 'react-icons/md';
import { Tooltip, Paper, Typography } from '@mui/material';

function ParkingSpotsDisplay() {
    const navigate = useNavigate();

    // Simulating a list of parking spots with address and availability
    const parkingSpots = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        available: Math.random() > 0.5,
        address: `123${i + 1} Park Street, Parking Lot ${i + 1}`
    }));

    const handleSpotClick = (spot) => {
        if (spot.available) {
            navigate('/reservation-details');
        }
    };

    return (
        <Paper elevation={3} sx={{ maxWidth: '7xl', mx: 'auto', my: 4, p: 3, borderRadius: 2 }}>
            <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
                Parking Spot Availability
            </Typography>
            <div className="grid grid-cols-4 gap-4">
                {parkingSpots.map(spot => (
                    <div key={spot.id}
                         className={`p-4 rounded-lg flex flex-col items-center justify-center gap-2 
                                    ${spot.available ? 'bg-green-200 cursor-pointer hover:bg-green-300 transition duration-300 ease-in-out' : 'bg-gray-300 cursor-not-allowed'} 
                                    relative`}
                         onClick={() => spot.available && handleSpotClick(spot)}>
                        {spot.available ? (
                            <>
                                <GiCarKey className="text-3xl text-green-800" />
                                <Typography variant="subtitle1" component="span">
                                    Spot {spot.id}
                                </Typography>
                            </>
                        ) : (
                            <>
                                <MdBlock className="text-3xl text-red-600" />
                                <Typography variant="subtitle1" component="span" className="line-through">
                                    Spot {spot.id}
                                </Typography>
                                <span className="absolute top-2 right-2 text-xs font-bold text-red-500">BOOKED</span>
                            </>
                        )}
                        <Tooltip title={spot.address} placement="top">
                            <Typography variant="caption" display="block">
                                {spot.address}
                            </Typography>
                        </Tooltip>
                    </div>
                ))}
            </div>
        </Paper>
    );
}

export default ParkingSpotsDisplay;
