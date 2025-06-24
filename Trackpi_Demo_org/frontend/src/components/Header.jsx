import React, { useContext } from 'react';
import './styles/header.css';
import logo from "../assets/trackpiLogo.png";
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { setUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate('/')
  }
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
      <button onClick={handleLogout} className="logout-container">
        <span className="logout-text">Logout</span>
      </button>
    </header>
  );
};

export default Header;