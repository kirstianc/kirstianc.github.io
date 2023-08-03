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
        <ul className={isMenuOpen ? 'header_ul menu-open' : 'header_ul'}>
          <li><a href="/Home/">Home</a></li>
          <li><a href="/Projects">Projects</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
      </nav>

      <h1><a href="/Home/">Computer Science Major at San Jose State University | Ian Chavez</a></h1>

    </header>
  );
};

export default Header;
