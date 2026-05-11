import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Car } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <Car size={32} />
          <span>Ride Bay</span>
        </Link>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/booking" className={isActive('/booking') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>
            Book Ride
          </Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>
            About Us
          </Link>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          <Link to="/driver" className={`driver-link ${isActive('/driver') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
            Driver Portal
          </Link>
        </nav>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
