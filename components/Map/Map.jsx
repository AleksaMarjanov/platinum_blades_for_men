import React, { useState, useRef, useEffect } from "react";
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import { NextPage } from "next";


const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null)
  
  useEffect(() => {

    mapboxgl.accessToken = process.env.mapbox_key ?? '';

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/aleksamarjanov/cl72iaroo001f14nusf0r0hwy',
      center: [-103.63274004145296, 48.164926211456134],
      zoom: 13
    })
  }, [])

  return (
    <div className="h-[70vh] sm:h-[40vh] w-[100%]" ref={mapContainer} />
    );
  };
  
  export default Map;
  // const [viewport, setViewport] = useState({
  //   width: "100%",
  //   height: "100%",
  //   latitude: 48.164926211456134,
  //   longitude: -103.63274004145296,
  //   zoom: 11,
  // });
  // <ReactMapGL
  //   mapStyle="mapbox://styles/aleksamarjanov/cl72iaroo001f14nusf0r0hwy"
  //   mapboxAccessToken={process.env.mapbox_key}
  //   {...viewport}
  //   width="100%"
  //   height="calc(100vh - 64px)"
  //   // height="100%"
  //   onViewPortChange={(nextViewPort) => setViewport(nextViewPort)}
  // >
  //   <Marker
  //     longitude={-103.63274004145296}
  //     latitude={48.164926211456134}
  //     offsetLeft={-20}
  //     offsetTop={-10}
  //   >
  //     <p role="img" className="cursor-pointer text-2xl animate-bounce" aria-label="push-pin">📌</p>
  //   </Marker>
  //   {/* <Popup
  // //   onClose={() => setSelectedLocation({})}
  //   closeOnClick={true}
  //   >
  //         <p>Come and Check out the best barber</p>
  //   </Popup> */}
  // </ReactMapGL>