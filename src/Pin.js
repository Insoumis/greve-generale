import React, { Component } from 'react';

import './Pin.css';

class Pin extends Component {
  state = { showTooltip: false }

  render() {
    const { greviculteur, goToSingle } = this.props;

    return (
      <div
        id={greviculteur.id}
        className={`Pin ${greviculteur.category}`}
        onClick={() => goToSingle()}
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