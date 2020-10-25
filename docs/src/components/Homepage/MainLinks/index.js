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
        <div className="main-links-container bg-purple-100">
          <div className="try-now">
            <div className="row">
              <div className="col-2 d-none d-sm-block triangle-container">
                <svg
                  viewBox="0 0 150 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg-triangle"
                >
                  <polygon points="0,0 0,100 150,50" />
                </svg>
              </div>
              <div className="col-12 col-sm-8">
                <div>
                  <h2
                    style={{ marginBottom: '10px', marginTop: '20px' }}
                    className="font-weight-bold text-center"
                  >
                    Try it now!
                  </h2>
                  <pre className="bg-purple-500" style={{ color: '#fff', height: '52px' }}>
                    <code>
                      npx @wingsuit-designsystem/cli init
                      <br />
                    </code>
                  </pre>
                </div>
              </div>
              <div className="col-2 d-none d-sm-block triangle-container">
                <svg
                  viewBox="0 0 150 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg-triangle"
                >
                  <polygon points="150,0 150,100 0,50" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-yellow-100">
            <div className="container">
              <div
                className="pt-5 pb-4 row footer-nav"
                id="nav"
                style={{
                  borderRight: '0 none',
                  position: 'relative',
                }}
              >
                <div className="col-xs-12 col-sm-12 read-docs">
                  <h2 style={{ color: '#000000' }}>Documentation</h2>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainLinks;
