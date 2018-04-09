import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';

class Map extends Component {
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic25haGVkaXMiLCJhIjoiMS1rYlVhcyJ9.fQMsZNexqS0Xd6-AZaj_ow';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/snahedis/cjfr0uxsj0x8x2rruqub9fb24',
      center: [8, 47.909578],
      zoom: 5,
    });


      // const container = document.createElement('div');
      // ReactDOM.render(<div className="Map-pin" />, container);
      // new mapboxgl.Marker(container)
      //   .setLngLat([3.075137100000006, 50.63165999999999])
      //   .addTo(this.map);

      // const container2 = document.createElement('div');
      // ReactDOM.render(<div className="Map-pin" />, container2);
      // new mapboxgl.Marker(container2)
      //   .setLngLat([-0.5835070000000542, 44.839896])
      //   .addTo(this.map);

  }

  componentDidUpdate() {
    this.props.greviculteurs && this.props.greviculteurs.forEach((greviculteur) => {
      const container = document.createElement('div');
      ReactDOM.render(<div className={`Map-pin ${greviculteur.category}`} />, container);
      new mapboxgl.Marker(container)
        .setLngLat([greviculteur.lng, greviculteur.lat])
        .addTo(this.map);
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
