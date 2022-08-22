import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";



const Map = () => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 48.164926211456134,
    longitude: -103.63274004145296,
    zoom: 11,
  });

  return (
      
          <ReactMapGL
            mapStyle="mapbox://styles/aleksamarjanov/cl72iaroo001f14nusf0r0hwy"
            mapboxAccessToken={process.env.mapbox_key}
            {...viewport}
            width="100%"
            height="calc(100vh - 64px)"
            onViewPortChange={(nextViewPort) => setViewport(nextViewPort)}
          >
            <Marker
              longitude={-103.63274004145296}
              latitude={48.164926211456134}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <p role="img" className="cursor-pointer text-2xl animate-bounce" aria-label="push-pin">📌</p>
            </Marker>
            {/* <Popup
          //   onClose={() => setSelectedLocation({})}
            closeOnClick={true}
            >
                  <p>Come and Check out the best barber</p>
            </Popup> */}
          </ReactMapGL>

  );
};

export default Map;