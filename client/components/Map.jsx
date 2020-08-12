import * as React from 'react';
import { useState } from 'react';
import MapGL from 'react-map-gl';
import PropTypes from 'prop-types';

const MAPBOX_TOKEN = 'pk.eyJ1IjoicnB6aWdsZXIiLCJhIjoiY2tkcXYyeHBhMGpveTJwcGJyYWN3ZnJkMyJ9.konKcHwfSopf4R4nI_fjAQ';

const Map = ({ latitude, longitude }) => {
  const [viewport, setViewport] = useState({
    latitude,
    longitude,
    zoom: 14,
    bearing: 0,
    pitch: 0,
  });

  return (
    <MapGL
      latitude={viewport.latitude}
      longitude={viewport.longitude}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/rpzigler/ckdqusuc00d0d19l8bon6oyml"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    />
  );
};

export default Map;
