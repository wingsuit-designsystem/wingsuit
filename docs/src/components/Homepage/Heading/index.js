import React from 'react';
import './style.css';

import wingsuitLogo from '../../../design/homepage/wingsuit-logo.svg';

const Heading = () => (
  <div id="heading" className="row">
    <div className="col-xs-12 col-sm-12">
      <img className="sb-title" src={wingsuitLogo} alt="Storybook Logo" />
      <h3 className="mt-4 sb-tagline">
        A Designsystem for rapid pattern development.
        <br />
        You'll ♥️ to use
      </h3>
    </div>
  </div>
);

export default Heading;
