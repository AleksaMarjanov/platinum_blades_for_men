import React, {useState} from 'react'
import ReactMapGL from 'react-map-gl'

const Map = () => {

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8,
    })

  return (
    <ReactMapGL
    mapStyle='mapbox://styles/aleksamarjanov/cl72iaroo001f14nusf0r0hwy'
    mapboxAccessToken={process.env.REACT_APP_MAPBOX_KEY}
    {...viewport} 
    >

    </ReactMapGL>
  )
}

export default Map