import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import db from './firebase';
import Map from './Map';
import Nav from './Nav';
import Greviculteurs from './Greviculteurs';
import Single from './Single';

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
        this.setState({ 
          greviculteurs: collection.docs.map( doc => Object.assign( doc.data(), { id: doc.id } ) ),
        });
      });
  }
  
  getCategory(category) {
    db.collection('greviculteurs').orderBy('name').where('category', '==', category).get()
      .then(collection => {
        this.setState({ 
          greviculteurs: collection.docs.map( doc => Object.assign( doc.data(), { id: doc.id } ) ),
        });
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
      <Router basename="/greve-generale">
        <div className={`App${(this.state.isMobileListHidden ? '' : ' Mobile-list-displayed')}`}>
          <Map greviculteurs={this.state.greviculteurs} greviculteurHovered={this.state.greviculteurHovered} />
          <Nav toggleMobileList={() => this.toggleMobileList()}/>
          <Greviculteurs
            getAll={() => this.getAll()}
            getCategory={(category) => this.getCategory(category)}
            greviculteurs={this.state.greviculteurs}
            handleListHover={(id) => this.handleListHover(id)}
          />
          {this.state.greviculteurs &&
            <Route 
              path="/:id" 
              render={(props) => 
                <Single 
                  history={props.history}
                  greviculteur={this.state.greviculteurs.find((greviculteur) => greviculteur.id === props.match.params.id)} 
                />
              } 
            />
          }
        </div>
      </Router>
    );
  }
}

export default App;
