import React from 'react';

import './Nav.css';

const Nav = ({ toggleMobileList }) => {
  return (
    <nav className="Nav">
      <h1>Grève Générale</h1>
      <h2>Amis «&nbsp;gréviculteurs&nbsp;» vous n'êtes pas seuls !</h2>
      <button onClick={() => toggleMobileList()}><i className="fas fa-bars"></i></button>
    </nav>
  );
};

export default Nav;