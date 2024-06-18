import React, { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import carIcon from '../img/road.png';
import RoutingMachine from './RoutingMachine';

const mapTilerUrl = `https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=4yZsih8hRnRRvWHqnDuw`;

const initialCenter = [33.5335, -7.5816]; // EMSI Casablanca Parking

const parkingLocations = [
  { name: "EMSI Casablanca Parking", lat: 33.5335, lng: -7.5816 },
  { name: "EMSI Rabat Parking", lat: 34.0209, lng: -6.8416 },
  { name: "EMSI Marrakech Parking", lat: 31.6295, lng: -7.9811 },
];

const redIcon = new L.Icon({
  iconUrl: carIcon,
  iconSize: [50, 50],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// Setup to avoid icon missing issues in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
iconUrl: require('leaflet/dist/images/marker-icon.png'),
shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapView = ({ searchedCoords, location }) => {
  const mapRef = useRef();

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(searchedCoords || initialCenter);
    }
  }, [searchedCoords]);

  return (
    <MapContainer
      center={initialCenter}
      zoom={7}
      style={{ height: "100%", width: "100%" }}
      whenCreated={mapInstance => { mapRef.current = mapInstance; }}
    >
      <TileLayer
        url={mapTilerUrl}
        attribution='© <a href="https://www.maptiler.com/">MapTiler</a> © <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {parkingLocations.map((park) => (
        <Marker key={park.name} position={[park.lat, park.lng]}>
          <Popup>{park.name}</Popup>
        </Marker>
      ))}
      {searchedCoords && (
        <Marker position={searchedCoords} icon={redIcon}>
          <Popup>{location}</Popup>
        </Marker>
      )}
      {searchedCoords && <RoutingMachine map={mapRef.current} searchedCoords={searchedCoords} destination={[31.6295, -7.9811]} />}
    </MapContainer>
  );
};

export default MapView;
