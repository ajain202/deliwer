import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React from "react";
import { maxHeight, maxWidth } from 'tailwindcss/defaultTheme';

const containerStyle = {
  width: '800px',
  height: '300px',
  maxWidth:'100%'
};

const Map = () => {
  const center = {
    lat: 41.8781,
    lng: 87.6298
  };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default Map;
