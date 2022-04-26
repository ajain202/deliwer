import { createControlComponent } from '@react-leaflet/core';
import L from 'leaflet';
import 'leaflet-routing-machine';

const createRoutineMachineLayer = ({currOrder}) => {
  let lat= currOrder.status==='bid-unaccepted'? 41.8717:currOrder.lat
  let long=currOrder.status==='bid-unaccepted'? -87.6602:currOrder.long
  // console.log(lat)
  // console.log(long)
  let instance = L.Routing.control({
    waypoints: [L.latLng(41.8717, -87.6602), L.latLng(lat, long)],
    lineOptions: {
      styles: [{ color: '#6FA1EC', weight: 4 }],
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
