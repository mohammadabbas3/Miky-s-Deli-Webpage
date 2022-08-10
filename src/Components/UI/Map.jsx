import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const features = [
  {
    Name: "Mik's Deli Pearl Qatar",
    coordinates: [25.36536920957482, 51.5432953386371],
  },
];

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 25.285446, lng: 51.53104 }}
    />
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

const Map = () => {
  // const [selectedBranch, setSelectedBranch] = useState(null);

  return (
    <div>
      <MapWrapped googleMapURL={``} />
    </div>
  );
};

export default Map;
