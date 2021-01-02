import React from 'react';
import './style.css';

import wingsuitLogo from '../../../design/homepage/wingsuit-logo.svg';

const Heading = () => (
  <div id="heading">
    <div>
      <img className="sb-title" src={wingsuitLogo} alt="Wingsuit Logo" />
    </div>
  </div>
);

export default Heading;
