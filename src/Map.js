import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import { withRouter } from 'react-router-dom';

import Pin from './Pin';

import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';

class Map extends Component {
  state = {}

  markers = []

  componentDidMount() {
    let coords = [8, 47.909578];
    let zoom = 5;
    if (window.matchMedia('(max-width: 1023px)').matches) {
      coords = [1.8, 47.909578];
      zoom = 4.2;
    }

    mapboxgl.accessToken = 'pk.eyJ1Ijoic25haGVkaXMiLCJhIjoiMS1rYlVhcyJ9.fQMsZNexqS0Xd6-AZaj_ow';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/snahedis/cjfr0uxsj0x8x2rruqub9fb24',
      center: coords,
      zoom,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.greviculteurs && this.props.greviculteurs !== nextProps.greviculteurs) {
      if (this.markers.length > 0) {
        this.markers.forEach(marker => marker.remove());
        this.markers = []
      }

      nextProps.greviculteurs.reverse().forEach((greviculteur) => {
        const container = document.createElement('div');
        ReactDOM.render(
          <Pin greviculteur={greviculteur} goToSingle={() => nextProps.history.push(`/${greviculteur.id}`)} />
        , container);
        const marker = new mapboxgl.Marker(container)
          .setLngLat([greviculteur.lng, greviculteur.lat])
          .addTo(this.map);
        this.markers.push(marker);
      });
    }

    if (this.props.greviculteurHovered !== nextProps.greviculteurHovered) {
      this.props.greviculteurHovered && document.getElementById(this.props.greviculteurHovered) && 
        document.getElementById(this.props.greviculteurHovered).classList.remove('hovered');
        
      nextProps.greviculteurHovered && document.getElementById(nextProps.greviculteurHovered) && 
        document.getElementById(nextProps.greviculteurHovered).classList.add('hovered');
    }
  }
  
  render() {
    return (
      <div id="map" className="Map">
        
      </div>
    );
  }
}

export default withRouter(Map);
