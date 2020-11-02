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
              href="https://drupaltwig.slack.com/archives/C01C82BH864"
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
              <img
                src={githubIcon}
                alt="Storybook GitHub"
                style={{ borderRadius: '50%', padding: '0', background: '#ffffff' }}
              />
            </a>
          </center>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
