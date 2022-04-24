import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import RoutineMachine from "./RoutineMachine";

const Map = (props) => {
  return (
    <MapContainer
      className="md:h-full h-[200px]"
      doubleClickZoom={false}
      id="mapId"
      zoom={14}
      center={[41.8919, -87.6051]}
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"
      />
      <RoutineMachine />
    </MapContainer>
  );
};

export default Map;
