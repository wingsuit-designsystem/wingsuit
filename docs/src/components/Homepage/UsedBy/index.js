import PropTypes from 'prop-types';
import React from 'react';
import Link from 'gatsby-link';
import './style.css';

export const UsedByBg = ({ color, style }) => (
  <div className="used-by-bg" style={style}>
    <svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 1440 380"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="Canvas" transform="translate(618 -3261)">
        <use
          xlinkHref="#path0_fill"
          transform="translate(-618 3261.5)"
          fill={color}
          id="used-by-bg"
        />
      </g>
      <defs>
        <path id="path0_fill" d="M 43.5 300.5L 0 35L 1440 0L 1371.5 379.5L 43.5 300.5Z" />
      </defs>
    </svg>
  </div>
);
UsedByBg.propTypes = {
  color: PropTypes.string,
  // eslint-disable-next-line
  style: PropTypes.object,
};
UsedByBg.defaultProps = {
  color: 'white',
  style: {},
};

const User = ({ logoSrc, demo, site, title }) => (
  <a
    className="used-by-user"
    href={demo || site}
    target="_blank"
    rel="noopener nofollow noreferrer"
  >
    <img className="used-by-user-image" src={logoSrc} alt={title} />
  </a>
);
User.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  demo: PropTypes.string,
  site: PropTypes.string.isRequired,
  title: PropTypes.string,
};
User.defaultProps = {
  demo: '',
  title: '',
};

const UsedBy = ({ users }) => ('');
UsedBy.propTypes = {
  users: PropTypes.array, // eslint-disable-line
};

export default UsedBy;
