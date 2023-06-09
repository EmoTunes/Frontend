import React, { useState } from 'react';
import './Navbar.css';

import { NavHashLink as NavLink } from "react-router-hash-link";

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
          
          <NavLink to="/landing"   spy={true} activeClass="active" smooth={true} offset={0} duration={500} className='Navbar_item'>
          Home
        </NavLink>
        </li>
        <li
          className={`nav-item ${activeItem === 'features' ? 'active' : ''}`}
          onClick={() => handleItemClick('features')}
        >
           <NavLink to="/features" spy={true} activeClass="active" smooth={true} offset={0} duration={500} className='Navbar_item'>
         Features
        </NavLink>
          </li>
        
        <li
          className={`nav-item ${activeItem === 'contact' ? 'active' : ''}`}
          onClick={() => handleItemClick('contact')}
        >
           <NavLink to="/contact" spy={true} activeClass="active" smooth={true} offset={0} duration={500} className='Navbar_item'>
           Contact
        </NavLink>
          
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;