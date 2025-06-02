import React from 'react';
import './styles/header.css';
import logo from "../assets/trackpiLogo.png";

const Header = () => {
  return (
    <header className="header-container">
      {/* Logo */}
      <div className="logo-container">
        <img 
          src={logo}
          alt="Trackpi Logo" 
          className="logo-img"
        />
      </div>

      {/* Logout */}
      <div className="logout-container">
        <span className="logout-text">Logout</span>
      </div>
    </header>
  );
};

export default Header;