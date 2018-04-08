import React, { Component } from 'react';

import db from './firebase';
import Map from './Map';
import Nav from './Nav';
import Greviculteurs from './Greviculteurs';

import './App.css';

class App extends Component {
  state = {}

  componentWillMount() {
    db.collection('greviculteurs').orderBy('createdAt', 'desc').get()
      .then(collection => {
        this.setState({ greviculteurs: collection.docs.map( doc => Object.assign( doc.data(), { id: doc.id } ) ) });
      });
  }
  
  render() {
    return (
      <div className="App">
        <Map />
        <Nav />
        <Greviculteurs greviculteurs={this.state.greviculteurs} />
      </div>
    );
  }
}

export default App;
