import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        {/* Logo */}
        <a href="#hero" className="navbar-logo">
          <img src={logoImg} alt="Harsh Patel Logo" className="logo-img" />
          <span className="logo-text">Harsh AI Creations</span>
        </a>

        {/* Navigation Links Desktop */}
        <div className="nav-links-desktop">
          <a href="#hero" className="nav-link">Home</a>
          <a href="#portfolio" className="nav-link">Work</a>
          <a href="#tools" className="nav-link">Expertise</a>
          <a href="#stats" className="nav-link">Stats</a>
          <a href="#contact" className="nav-link-btn">Let's Talk</a>
        </div>

        {/* Hamburger Menu Toggle Mobile */}
        <button 
          className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle Navigation Menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`navbar-mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <a href="#hero" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
        <a href="#portfolio" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Work</a>
        <a href="#tools" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Expertise</a>
        <a href="#stats" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Stats</a>
        <a href="#contact" className="mobile-btn-link" onClick={() => setMobileMenuOpen(false)}>Let's Talk</a>
      </div>
    </nav>
  );
}
