import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';

class Map extends Component {
  state = {}

  markers = []

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic25haGVkaXMiLCJhIjoiMS1rYlVhcyJ9.fQMsZNexqS0Xd6-AZaj_ow';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/snahedis/cjfr0uxsj0x8x2rruqub9fb24',
      center: [8, 47.909578],
      zoom: 5,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.greviculteurs && this.props.greviculteurs !== nextProps.greviculteurs) {
      if (this.markers.length > 0) {
        this.markers.forEach(marker => marker.remove());
        this.markers = []
      }

      nextProps.greviculteurs.forEach((greviculteur) => {
        const container = document.createElement('div');
        ReactDOM.render(
          <div
            id={greviculteur.id}
            className={`Map-pin ${greviculteur.category}`}
          />
        , container);
        const marker = new mapboxgl.Marker(container)
          .setLngLat([greviculteur.lng, greviculteur.lat])
          .addTo(this.map);
        this.markers.push(marker);
      });
    }

    if (this.props.greviculteurHovered !== nextProps.greviculteurHovered) {
      this.props.greviculteurHovered && document.getElementById(this.props.greviculteurHovered).classList.remove('hovered')
      nextProps.greviculteurHovered && document.getElementById(nextProps.greviculteurHovered).classList.add('hovered');
    }
  }
  
  render() {
    return (
      <div id="map" className="Map">
        
      </div>
    );
  }
}

export default Map;
