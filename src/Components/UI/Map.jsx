// import React, { useState, useEffect } from "react";
// import ReactMapGL, { Marker, Popup } from "react-map-gl";
// import 'mapbox-gl/dist/mapbox-gl.css';
// import "../styles/map.css"

// const Map = () => {
//   const [viewport, setViewport] = useState({
//     latitude: 25.3686,
//     longitude: 51.5516,
//     width: "100vw",
//     height: "100vh",
//     zoom: 8,
//   });

//   return (
//     <div className="mapBox__container">

//     <ReactMapGL
//       {...viewport}
//       mapboxApiAccessToken=
//         {process.env.REACT_APP_MAPBPOX_TOKEN}
//       onViewportChange={(viewport) => {
//         setViewport(viewport);
//       }}
//     >
//      markers Here
//     </ReactMapGL>
//     </div>
//   );
// };

// export default Map;

// import React, { useRef, useEffect, useState } from "react";
// import mapboxgl from "mapbox-gl";
// import "../styles/map.css";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoibWlreXNkZWxpIiwiYSI6ImNsN3pzeWlqYzAzdXozeHVpdGdrN2ZyMHcifQ.AxHbECPE8dfa1cpxVV-UuA";

// const Map = () => {
//   const mapContainerRef = useRef(null);

//   const [lng, setLng] = useState(51.5516);
//   const [lat, setLat] = useState(25.3686);
//   const [zoom, setZoom] = useState(10);

  
//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: "mapbox://styles/mapbox/streets-v11",
//       center: [lng, lat],
//       zoom: zoom,
//     });

    
//     map.addControl(new mapboxgl.NavigationControl(), "top-right");

//     map.on("move", () => {
//       setLng(map.getCenter().lng.toFixed(4));
//       setLat(map.getCenter().lat.toFixed(4));
//       setZoom(map.getZoom().toFixed(2));
//     });

    
//     return () => map.remove();
//   }, []); 

//   return (
//     <div className="mapBox__container">
//       <div className="sidebarStyle">
//         <div>
//           Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
//         </div>
//       </div>
//       <div className="map-container" ref={mapContainerRef} />
//     </div>
//   );
// };

// export default Map;


import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "../styles/map.css";
import geoJson from "./miky's-stores.json";
import Marker from "../../images/locationMarker.png"
import Tooltip from './Tooltip';
import ReactDOM from 'react-dom';

mapboxgl.accessToken =
"pk.eyJ1IjoibWlreXNkZWxpIiwiYSI6ImNsN3pzeWlqYzAzdXozeHVpdGdrN2ZyMHcifQ.AxHbECPE8dfa1cpxVV-UuA";
// mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;

const Map = () => {
  const mapContainerRef = useRef(null);
  const tooltipRef = useRef(new mapboxgl.Popup({ offset: 15 }));

  
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      attributionControl: false,
      center: [51.51253576855366,25.31859760530991],
      zoom: 11,
    });

    map.on("load", function () {
      
      map.loadImage(
        Marker,
        // "../../images/locationMarker.png",
        // "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
        function (error, image) {
          if (error) throw error;
          map.addImage("image-name", image);
         
          map.addSource("points", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: geoJson.features,
            },
          });
          
          map.addLayer({
            id: "points",
            type: "symbol",
            source: "points",
            layout: {
              "icon-image": "image-name",
              'icon-size': 0.30,
              'icon-allow-overlap': true,
              "text-field": ["get", "title"],
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, 1.25],
              "text-anchor": "top",
              'text-size': 13,
              'text-allow-overlap': true,
            },
          });
        }
      );
    });


    map.on('mouseenter', e => {
      if (e.features.length) {
        map.getCanvas().style.cursor = 'pointer';
      }
    });

    
    map.on('mouseleave', () => {
      map.getCanvas().style.cursor = '';

    });

   
    map.on('click', e => {
      const features = map.queryRenderedFeatures(e.point);
      if (features.length) {
        const feature = features[0];

        
        const tooltipNode = document.createElement('div');
        ReactDOM.render(<Tooltip feature={feature} />, tooltipNode);

        
        tooltipRef.current
          .setLngLat(e.lngLat)
          .setDOMContent(tooltipNode)
          .addTo(map);
      }
    });

   
    // map.addControl(new mapboxgl.NavigationControl(), "top-right");

    
    return () => map.remove();
  }, []);

  return <section className="mapbox__map"><div className="map-container" ref={mapContainerRef} /></section>;
};

export default Map;
