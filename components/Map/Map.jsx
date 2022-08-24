import React, { useState, useRef, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { markers } from "./Marker";
import mapboxgl from 'mapbox-gl'

const Map = () => {
  
    useEffect(() => {
  
      mapboxgl.accessToken = process.env.mapbox_key ?? '';
  
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-103.63274004145296, 48.164926211456134],
        zoom: 13
      })
    }, [])
    const geojson = {
      features: markers.map((marker) => ({
        geometry: {
          coordinates: {
            lat: marker.latCoord,
            lng: marker.longCoord
          }
        }
      }))
    };
    
      const addToMap = (map) => {
        const marker = new mapboxgl.Marker().setLngLat(marker.geometry.coordinates).addTo(map);
      }
  
    return (
      <div className="h-[50vh] sm:h-[40vh] sm:w-[50%] w-[100%]">
      
      </div>
      );
    };

  export default Map;

