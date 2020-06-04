import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import './style.css';
// import Header from '../Header';
import Heading from './Heading';
import Demo from './Demo';
// import Platforms from './Platforms';
import MainLinks from './MainLinks';
// import Featured from './Featured';
import UsedBy from './UsedBy';
import Footer from '../Footer';

const Homepage = ({ users }) => (
  <div className="container">
    <Helmet title="Storybook - UI dev environment you'll love to use" />
    {/* <Header currentSection="home" /> */}
    <Heading />
    <Demo />
    {/* <Platforms /> */}
    <MainLinks />
    <UsedBy users={users} />
    {/* <Featured featuredStorybooks={featuredStorybooks} /> */}
    <Footer />
  </div>
);

Homepage.propTypes = {
  featuredStorybooks: PropTypes.array, // eslint-disable-line
  users: PropTypes.array, // eslint-disable-line
};

export default Homepage;
