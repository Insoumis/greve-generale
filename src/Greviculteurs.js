import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

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
    if (this.props.location.pathname === '/proposer') {
      return false;
    }

    return (
      <div className="Greviculteurs">
        <div className="Greviculteurs-contact">
          Contactez nous :{' '} 
          <a href="mailto:union@greve-generale.fr"><i className="fas fa-envelope"></i></a>
          <a target="_blank" href="https://twitter.com/union_generale" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        </div>
        <div className="Greviculteurs-filters">
          <button className={(this.state.category ? '' : 'active')} onClick={() => this.filter()}>Tout</button>
          <button className={`Santé${(this.state.category === 'Santé' ? ' active' : '')}`} onClick={() => this.filter('Santé')}>Santé</button>
          <button className={`Écologie${(this.state.category === 'Écologie' ? ' active' : '')}`} onClick={() => this.filter('Écologie')}>Écologie</button>
          <button className={`Public${(this.state.category === 'Public' ? ' active' : '')}`} onClick={() => this.filter('Public')}>Service Public</button>
          <button className={`Transport${(this.state.category === 'Transport' ? ' active' : '')}`} onClick={() => this.filter('Transport')}>Transport</button>
          <button className={`Éducation${(this.state.category === 'Éducation' ? ' active' : '')}`} onClick={() => this.filter('Éducation')}>Éducation</button>
          <button className={`Justice${(this.state.category === 'Justice' ? ' active' : '')}`} onClick={() => this.filter('Justice')}>Justice</button>
          <button className={`Comité5mai${(this.state.category === 'Comité5mai' ? ' active' : '')}`} onClick={() => this.filter('Comité5mai')}>#5mai</button>
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
                <img src={`https://avatars.io/twitter/${greviculteur.twitter}`} alt="Avatar Twitter" width="48" />
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

export default withRouter(Greviculteurs);