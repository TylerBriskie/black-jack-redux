import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

const propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

function Header({title, subtitle}){
  return (
    <header className="App-header">
      <h1 className="App-title">{title} <span className="header-span">{subtitle}</span></h1>
    </header>
  )
}

Header.propTypes = propTypes;
export default Header;

