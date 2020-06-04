import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

// import Header from '../Header';
import Header from '../../new-components/layout/Header';
import Container from './Container';
import Footer from '../Footer';
import './style.css';

const Docs = ({sections, selectedItem, selectedSectionId, selectedItemId}) => (
  <div>
    <div className="header-wrapper">
      <Helmet title={`${selectedItem.title}`}/>
      <Header currentSection="docs"/>
    </div>
    <div className="container">
      <Container
        sections={sections}
        selectedItem={selectedItem}
        selectedSectionId={selectedSectionId}
        selectedItemId={selectedItemId}
      />
      <Footer/>
    </div>
  </div>
);
Docs.propTypes = {
  sections: PropTypes.array, // eslint-disable-line
  selectedItem: PropTypes.object, // eslint-disable-line
  selectedSectionId: PropTypes.string.isRequired,
  selectedItemId: PropTypes.string.isRequired,
};

export default Docs;
