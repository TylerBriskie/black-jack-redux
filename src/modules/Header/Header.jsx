import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

function Header({title, subtitle}){
  return (
    <header className="header">
      <h1 className="header-title">{title} <span className="header-span">{subtitle}</span></h1>
    </header>
  )
}

Header.propTypes = propTypes;
export default Header;

