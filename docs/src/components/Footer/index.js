import React from 'react';
import slackIcon from './images/slack-icon.png';
import githubIcon from './images/github-icon.png';
import './style.css';

const Footer = () => (
  <div id="footer" className="row">
    <div className="col-md-12">
      <div className="logos">
        <div className="col-xs-12">

          <center>
            <a
              href="https://drupaltwig.slack.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={slackIcon} alt="Wingsuit Slack" style={{ padding: '7px' }} />
            </a>
            <a
              href="https://github.com/wingsuit-designsystem/wingsuit"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={githubIcon} alt="Storybook GitHub" style={{ padding: '7px' }} />
            </a>
          </center>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
