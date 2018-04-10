import React, { Component } from 'react';

import db from './firebase';
import Map from './Map';
import Nav from './Nav';
import Greviculteurs from './Greviculteurs';

class App extends Component {
  state = {
    isMobileListHidden: true,
  }

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

  handleListHover(id) {
    this.setState({
      greviculteurHovered: id,
    });
  }

  toggleMobileList() {
    this.setState((prevState) => ({
      isMobileListHidden: !prevState.isMobileListHidden,
    }));
  }

  render() {
    return (
      <div className={`App${(this.state.isMobileListHidden ? '' : ' Mobile-list-displayed')}`}>
        <Map greviculteurs={this.state.greviculteurs} greviculteurHovered={this.state.greviculteurHovered} />
        <Nav toggleMobileList={() => this.toggleMobileList()}/>
        <Greviculteurs
          getAll={() => this.getAll()}
          getCategory={(category) => this.getCategory(category)}
          greviculteurs={this.state.greviculteurs}
          handleListHover={(id) => this.handleListHover(id)}
        />
      </div>
    );
  }
}

export default App;
