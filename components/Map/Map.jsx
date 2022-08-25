import React, { useState, useRef, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from 'mapbox-gl'

const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-103.6327, 48.1649]
      },
      properties: {
        title: 'Mapbox',
        description: 'Platinum Blades Williston'
      }
    },
  ]
};

const Map = () => {
  
    useEffect(() => {
  
      mapboxgl.accessToken = process.env.mapbox_key ?? '';
  
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-103.63274004145296, 48.164926211456134],
        zoom: 13
      })
     for ( const feature of geojson.features) {
       const el = document.createElement('div');
        el.className = 'marker';
        
       new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
     }
         
    }, [])
    
  
    return (
      <div id="map" className="h-[50vh] sm:h-[40vh] sm:w-[50%] w-[100%]">
      
      </div>
      );
    };

  export default Map;

