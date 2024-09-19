import React, { useState } from 'react';
import './header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="container">
        <h1 className="title">My Portfolio</h1>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="#career">Career</a></li>
            <li className="nav-item"><a href="#skill">Skill</a></li>
            <li className="nav-item"><a href="#projects">Projects</a></li>
          </ul>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;