import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={isOpen ? 'bar open' : 'bar'}></div>
        <div className={isOpen ? 'bar open' : 'bar'}></div>
        <div className={isOpen ? 'bar open' : 'bar'}></div>
      </div>
      <ul className={isOpen ? 'navbar-links open' : 'navbar-links'}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/algorithms" onClick={toggleMenu}>Algorithms</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
