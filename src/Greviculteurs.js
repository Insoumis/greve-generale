import React, { Component } from 'react';

import './Greviculteurs.css';

class Greviculteurs extends Component {
  render() {
    return (
      <div className="Greviculteurs">
        {this.props.greviculteurs && this.props.greviculteurs.map((greviculteur) => (
          <article key={greviculteur.id} className={greviculteur.category}>
            {(greviculteur.twitter) ? 
              <img src={`https://twitter.com/${greviculteur.twitter}/profile_image?size=normal`} alt="Avatar Twitter"/>
            : false}
            <div>
              <h1>
                {greviculteur.name}
              </h1>
              <p>
                {greviculteur.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    );
  }
}

export default Greviculteurs;