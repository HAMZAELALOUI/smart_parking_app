// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// const ParkingMap = ({ center, zoom, parkingLocations }) => {
//   return (
//     <div style={{ width: '70%', zIndex: 10, height: '92%', marginTop: '50px' }}>
//       <MapContainer
//         center={center}
//         zoom={zoom}
//         style={{ height: "100%", width: "100%" }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         {parkingLocations.map((park) => (
//           <Marker key={park.name} position={[park.lat, park.lng]}>
//             <Popup>{park.name}</Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default ParkingMap;
