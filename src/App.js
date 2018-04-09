import React, { Component } from 'react';

import db from './firebase';
import Map from './Map';
import Nav from './Nav';
import Greviculteurs from './Greviculteurs';

import './App.css';

class App extends Component {
  state = {}

  componentWillMount() {
    this.getAll();
  }

  getAll() {
    db.collection('greviculteurs').orderBy('name').get()
      .then(collection => {
        this.setState({ greviculteurs: collection.docs.map( doc => Object.assign( doc.data(), { id: doc.id } ) ) });
      });
  }
  
  getCategory(category) {
    db.collection('greviculteurs').orderBy('name').where('category', '==', category).get()
      .then(collection => {
        this.setState({ greviculteurs: collection.docs.map( doc => Object.assign( doc.data(), { id: doc.id } ) ) });
      });
  }

  render() {
    return (
      <div className="App">
        <Map greviculteurs={this.state.greviculteurs} />
        <Nav />
        <Greviculteurs greviculteurs={this.state.greviculteurs} getAll={() => this.getAll()} getCategory={(category) => this.getCategory(category)} />
      </div>
    );
  }
}

export default App;
