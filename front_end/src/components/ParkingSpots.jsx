import React, { useState, useEffect } from 'react';

function ParkingSpots() {
    // Simulating parking spots data
    const [parkingSpots, setParkingSpots] = useState([
        { id: 1, available: true },
        { id: 2, available: false },
        { id: 3, available: true },
        { id: 4, available: false },
        { id: 5, available: true },
        // Add more spots as needed
    ]);

    return (
        <div className="max-w-7xl mx-auto my-10 p-8 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">Parking Availability</h2>
            <div className="grid grid-cols-3 gap-4">
                {parkingSpots.map(spot => (
                    <div key={spot.id} className={`p-4 ${spot.available ? 'bg-green-200' : 'bg-red-200'} rounded-lg flex items-center justify-center`}>
                        <span className="text-lg font-semibold">{spot.available ? 'Available' : 'Occupied'}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ParkingSpots;
