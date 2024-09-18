import React from 'react';
import './header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="title">My Portfolio</h1>
        <nav>
          <ul className="nav-list">
            <li className='nav-item'><a href="#home">Home</a></li>
            <li className='nav-item'><a href="#about">About</a></li>
            <li className='nav-item'><a href="#career">Career</a></li>
            <li className='nav-item'><a href="#skill">Skill</a></li>
            <li className='nav-item'><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;