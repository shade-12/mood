import React from 'react';

import mons1 from '../../images/monster1.png';
import mons2 from '../../images/monster2.png';
import mons3 from '../../images/monster3.png';
import mons4 from '../../images/monster4.png';
import mons5 from '../../images/monster5.png';
import mons6 from '../../images/monster6.png';

function Banner(props) {
    return (
      <div className="banner">
        <div className="thumbnail-container">
          <img className="thumbnail" src={mons1} />
          <img className="thumbnail" src={mons2} />
          <img className="thumbnail" src={mons3} />
          <img className="thumbnail" src={mons4} />
          <img className="thumbnail" src={mons5} />
          <img className="thumbnail" src={mons6} />
        </div>
      </div>
    );
}

export default Banner;
