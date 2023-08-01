import React, { useState } from 'react';
import './Header.css';
import MenuBar from './MenuBar';
import './MenuBar.css';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <header>
      <nav>
        {/* animated menu on top of screen */}
        <MenuBar onClick={toggleMenu} isMenuOpen={isMenuOpen} />

        {/* dropdown menu */}
        <ul className={isMenuOpen ? 'menu-open' : ''}>
          <li><a href="/home/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      <h1>Computer Science Major at San Jose State University | Ian Chavez</h1>

    </header>
  );
};

export default Header;
