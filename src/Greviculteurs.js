import React, { Component } from 'react';

import './Greviculteurs.css';

class Greviculteurs extends Component {
  state = {}

  filter(category) {
    if (category) {
      this.props.getCategory(category);
      this.setState({ category });
    } else {
      this.props.getAll();
      this.setState({ category: undefined });
    }
  }

  render() {
    return (
      <div className="Greviculteurs">
        <div className="Greviculteurs-filters">
          <button className={(this.state.category ? false : 'active')} onClick={() => this.filter()}>Tout</button>
          <button className={`Éducation${(this.state.category === 'Éducation' ? ' active' : '')}`} onClick={() => this.filter('Éducation')}>Éducation</button>
          <button className={`Poste${(this.state.category === 'Poste' ? ' active' : '')}`} onClick={() => this.filter('Poste')}>Poste</button>
        </div>
        <div className="Greviculteurs-list">
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
      </div>
    );
  }
}

export default Greviculteurs;