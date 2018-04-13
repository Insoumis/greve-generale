import React, { Component } from 'react';

import './Pin.css';

class Pin extends Component {
  state = { showTooltip: false }

  render() {
    const greviculteur = this.props.greviculteur;

    return (
      <div
        id={greviculteur.id}
        className={`Pin ${greviculteur.category}`}
      >
        <div className="Pin-tooltip">
          <h1>{greviculteur.name}</h1>
          <p>{greviculteur.excerpt}</p>
        </div>
      </div>
    );
  }
}

export default Pin;