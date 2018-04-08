import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';

class Map extends Component {
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic25haGVkaXMiLCJhIjoiMS1rYlVhcyJ9.fQMsZNexqS0Xd6-AZaj_ow';
    new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/snahedis/cjfr0uxsj0x8x2rruqub9fb24',
      center: [8, 47.909578],
      zoom: 5,
    });
  }
  
  render() {
    return (
      <div id="map" className="Map">
        
      </div>
    );
  }
}

export default Map;
