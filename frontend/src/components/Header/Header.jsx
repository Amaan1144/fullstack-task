import React from 'react';
import './header.css';

const Header = ({ onRequestClick }) => (
  <header className="header">
    <h1>Abstract | Help Center</h1>
    <button onClick={onRequestClick}>Submit a request</button>
  </header>
);

export default Header;
