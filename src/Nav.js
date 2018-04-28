import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import './Nav.css';

const Nav = ({ location, toggleMobileList }) => {
  return (
    <nav className="Nav">
      <h1><Link to="/">Grève Générale</Link></h1>
      <h2>Amis «&nbsp;gréviculteurs&nbsp;» vous n'êtes pas seuls !</h2>
      {(location.pathname !== '/proposer') &&
        <div>
          <Link title="Proposer une lutte" to="/proposer"><i className="fas fa-plus-square" /></Link>
          <button title="Ouvrir le menu" onClick={() => toggleMobileList()}><i className="fas fa-bars" /></button>
        </div>
      }
      {(location.pathname === '/proposer') &&
        <div>
          <Link title="Revenir à la carte" to="/"><i className="fas fa-map-marker-alt" /></Link>
        </div>
      }
    </nav>
  );
};

export default withRouter(Nav);