import React from 'react';
import { Link } from 'react-router-dom';
import { Timeline } from 'react-twitter-widgets';

import './Single.css';

const Single = ({ greviculteur, history }) => {
  return (
    <div 
      className="Single"
      onClick={() => history.push('/')}
    >
      <div 
        className={greviculteur.category}
        onClick={e => e.stopPropagation()}
      >
        <Link className="Single-close" to="/">
          <i class="fas fa-times-circle"></i>
        </Link>
        <h1>{greviculteur.name}</h1>
        <div 
          className="Single-content" 
          dangerouslySetInnerHTML={{
          __html: greviculteur.description
          }} 
        />
        {greviculteur.twitter &&
          <div className="Single-twitter">
            <h2>Derniers messages sur <strong>Twitter</strong></h2>
            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: greviculteur.twitter
              }}
              options={{
                chrome: 'noheader nofooter noscrollbar',
                tweetLimit: 3,
              }}
            />
          </div>
        }
      </div>
    </div>
  );
};

export default Single;