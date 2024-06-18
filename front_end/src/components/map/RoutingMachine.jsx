import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';

const RoutingMachine = ({ map, searchedCoords, destination }) => {
  useEffect(() => {
    if (!map || !searchedCoords) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(searchedCoords[0], searchedCoords[1]),
        L.latLng(destination[0], destination[1])
      ],
      routeWhileDragging: true,
      lineOptions: {
        styles: [{ color: 'red', opacity: 1, weight: 5 }]
      },
      addWaypoints: false
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map, searchedCoords, destination]);

  return null;
};

export default RoutingMachine;
