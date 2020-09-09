import React from 'react';
import Link from 'gatsby-link';
import { window } from 'global';
import { Link as NewLink } from '../../../new-components/basics';

import '../../Docs/Nav/style.css';
import { UsedByBg } from '../UsedBy';
import './style.css';

class MainLinks extends React.Component {
  componentDidMount() {
    window.docsearch({
      apiKey: 'fae96724816fdc3cd16b899557964910',
      indexName: 'wingsuit-designsystem',
      inputSelector: '#search',
      debug: false, // Set debug to true if you want to inspect the dropdown
    });
  }

  render() {
    return (
      <div id="main-links">
        <div className="main-links-container">
          <div className="try-now">
            <h2>Try it now!</h2>
            <pre>
              <code>
                npx @wingsuit-designsystem/cli init
                <br />
              </code>
            </pre>

            <h2 style={{ paddingTop: 40 }}>Online demo!</h2>
            <div style={{ paddingBottom: 40 }} className="used-by-more-examples">
              <a
                href="https://wingsuit.netlify.app/?path=/story/base-welcome--page"
                target="_blank"
                rel="noreferrer"
              >
                Storybook on netlify
              </a>

            </div>
          </div>

          <div
            className="row"
            id="nav"
            style={{
              borderRight: '0 none',
              position: 'relative',
            }}
          >
            <UsedByBg color="#81E6D9" />
            <div className="col-xs-12 col-sm-12 read-docs">
              <h2 style={{ color: '#000000' }}>Documentation</h2>
              <div
                className="form-group has-feedback"
                style={{ maxWidth: '450px', margin: '20px auto' }}
              >
                <label className="sr-only control-label" htmlFor="search">
                  Search wingsuit documentation
                </label>
                <input
                  className="form-control"
                  type="search"
                  id="search"
                  placeholder="type to search"
                />
                <span
                  className="form-control-feedback"
                  role="img"
                  aria-hidden="true"
                  aria-label="magnifying glass"
                >
                  🔍
                </span>
              </div>
            </div>

            <div className="col-sm-4 read-docs">
              <Link to="/basics/introduction/">
                <h3>Basics</h3>
              </Link>
              <ul>
                <li>
                  <Link to="/basics/introduction/">Introduction</Link>
                </li>
                <li>
                  <Link to="/guides/quick-start-guide/">Quick setup</Link>
                </li>
                <li>
                  <Link to="/guides/create-component-guide/">Create new component</Link>
                </li>
              </ul>
            </div>

            <div className="col-sm-4 read-docs">
              <Link to="/configurations/details/">
                <h3>Configuration</h3>
              </Link>
              <ul>
                <li>
                  <Link to="/configurations/details/">Configuration</Link>
                </li>
                <li>
                  <Link to="/configurations/custom-webpack-config/">
                    Custom webpack configuration
                  </Link>
                </li>
                <li>
                  <Link to="/configurations/preset-webpack/">Webpack presets</Link>
                </li>
              </ul>
            </div>

            <div className="col-sm-4 read-docs">
              <Link to="/components/overview/">
                <h3>Components</h3>
              </Link>
              <ul>
                <li>
                  <Link to="/components/globals/">Global variables</Link>
                </li>
                <li>
                  <Link to="/components/wingsuit/">Wingsuit/UI Patterns</Link>
                </li>
                <li>
                  <Link to="/components/twig/">Twig only</Link>
                </li>
                <li>
                  <Link to="/components/presentation/">Presentation</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainLinks;
