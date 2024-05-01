// import React, { useState } from 'react';
// import { GiCarDoor } from 'react-icons/gi';  // You'll need to install react-icons if not already available

// function ParkingSpots() {
//     // Simulating parking spots data
//     const [parkingSpots, setParkingSpots] = useState([
//         { id: 1, available: true },
//         { id: 2, available: false },
//         { id: 3, available: true },
//         { id: 4, available: false },
//         { id: 5, available: true },  // Add more spots as needed
//     ]);

//     return (
//         <div className="max-w-7xl mx-auto my-10 p-8 bg-gray-100 shadow-md rounded-lg">
//             <h2 className="text-2xl font-semibold text-center mb-6">Parking Availability</h2>
//             <div className="grid grid-cols-3 gap-4">
//                 {parkingSpots.map(spot => (
//                     <div key={spot.id} className={`relative p-4 rounded-lg flex items-center justify-center
//                         ${spot.available ? 'bg-green-300' : 'bg-red-300'} shadow-lg`}>
//                         <GiCarDoor className="text-4xl" />
//                         <span className="absolute top-1 right-2 text-sm font-semibold">
//                             {spot.id}
//                         </span>
//                         <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 text-white text-opacity-80
//                             ${spot.available ? 'text-green-800' : 'text-red-800'}`}>
//                             {spot.available ? 'Available' : 'Occupied'}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default ParkingSpots;
