import React from 'react';
import { useNavigate } from 'react-router-dom';

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
        <div className="max-w-7xl mx-auto my-12 p-8 bg-white shadow-xl rounded-xl">
            <h2 className="text-3xl font-semibold text-center mb-6">Parking Spot Availability</h2>
            <div className="grid grid-cols-4 gap-4">
                {parkingSpots.map(spot => (
                    <div key={spot.id} 
                         className={`p-4 rounded-lg ${spot.available ? 'bg-green-200 cursor-pointer' : 'bg-gray-300 cursor-not-allowed'} relative`}
                         onClick={() => spot.available && handleSpotClick(spot)}>
                        {spot.available ? (
                            <span className="text-lg font-semibold">{`Spot ${spot.id}`}</span>
                        ) : (
                            <>
                                <span className="text-lg font-semibold line-through">{`Spot ${spot.id}`}</span>
                                <span className="absolute top-2 right-2 text-xs font-bold text-red-500">BOOKED</span>
                            </>
                        )}
                        <p className="text-sm mt-2">{spot.address}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ParkingSpotsDisplay;
