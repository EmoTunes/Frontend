import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li
          className={`nav-item ${activeItem === 'home' ? 'active' : ''}`}
          onClick={() => handleItemClick('home')}
        >
          Home
        </li>
        <li
          className={`nav-item ${activeItem === 'about' ? 'active' : ''}`}
          onClick={() => handleItemClick('about')}
        >
          About
        </li>
        <li
          className={`nav-item ${activeItem === 'services' ? 'active' : ''}`}
          onClick={() => handleItemClick('services')}
        >
          Services
        </li>
        <li
          className={`nav-item ${activeItem === 'contact' ? 'active' : ''}`}
          onClick={() => handleItemClick('contact')}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;