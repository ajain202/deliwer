import React,{useEffect,useState} from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import RoutineMachine from './routing-machine';


const Map = ({currOrder}) => {
  const [keyMAP, setkeyMAP] = useState("")
  useEffect(() => {
    setkeyMAP(Math.random())
  }, [currOrder])

  
  return (
    <MapContainer className="md:h-full h-[200px]" doubleClickZoom={false} id="mapId" zoom={14} center={[41.8918, -87.6052]}>
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"
      />
      <RoutineMachine key={keyMAP} currOrder={currOrder} />

    </MapContainer>
  );
};

export default Map;
