import React,{useEffect,useState} from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import RoutineMachine from './routing-machine';


const Map = ({currOrder}) => {
  const [keyMAP, setkeyMAP] = useState("")
  useEffect(() => {
    setkeyMAP(Math.random())
  }, [currOrder])

  
  return (
    <MapContainer key={keyMAP} className="md:h-full h-[200px]" doubleClickZoom={false} id="mapId" zoom={16} center={[41.8717, -87.6602]}>
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"
      />
      <RoutineMachine key={keyMAP} currOrder={currOrder} />

    </MapContainer>
  );
};

export default Map;
