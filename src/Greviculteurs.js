import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
          <button className={(this.state.category ? '' : 'active')} onClick={() => this.filter()}>Tout</button>
          <button className={`Écologie${(this.state.category === 'Écologie' ? ' active' : '')}`} onClick={() => this.filter('Écologie')}>Écologie</button>
          <button className={`Éducation${(this.state.category === 'Éducation' ? ' active' : '')}`} onClick={() => this.filter('Éducation')}>Éducation</button>
          <button className={`Justice${(this.state.category === 'Justice' ? ' active' : '')}`} onClick={() => this.filter('Justice')}>Justice</button>
          <button className={`Public${(this.state.category === 'Public' ? ' active' : '')}`} onClick={() => this.filter('Public')}>Service Public</button>
        </div>
        <div className="Greviculteurs-list">
        {this.props.greviculteurs && this.props.greviculteurs.map((greviculteur) => (
          <Link key={greviculteur.id} to={`/${greviculteur.id}`}>
            <article 
              className={greviculteur.category} 
              onMouseOver={() => this.props.handleListHover(greviculteur.id)}
              onMouseOut={() => this.props.handleListHover()}
            >
              {(greviculteur.twitter) ? 
                <img src={`https://twitter.com/${greviculteur.twitter}/profile_image?size=normal`} alt="Avatar Twitter"/>
              : false}
              <div>
                <h1>
                  {greviculteur.name}
                </h1>
                <p>
                  {greviculteur.excerpt}
                </p>
              </div>
            </article>
          </Link>
        ))}
        </div>
      </div>
    );
  }
}

export default Greviculteurs;