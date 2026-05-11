import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <Car size={28} />
            <span>Ride Bay</span>
          </div>
          <p>Your trusted ride booking platform. Safe, reliable, and affordable rides at your fingertips.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/booking">Book Ride</Link>
          <Link to="/about">About Us</Link>
          <Link to="/driver">Become a Driver</Link>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="contact-item">
            <Phone size={18} />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="contact-item">
            <Mail size={18} />
            <span>support@ridebay.com</span>
          </div>
          <div className="contact-item">
            <MapPin size={18} />
            <span>123 Main St, City, State</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Ride Bay. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
