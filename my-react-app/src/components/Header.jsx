import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">Intra <span>Assets</span></div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#about">About us</a>
          <a href="#activity">Activity</a>
          <a href="#services">Services</a>
          <a href="#contacts">Contacts</a>
        </nav>

        <div className="language-switcher">ro / en</div>

        <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <span className="close-icon">✕</span>
          ) : (
            <span className="burger-icon">☰</span>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-nav">
            <a href="#about" onClick={() => setMenuOpen(false)}>About us</a>
            <a href="#activity" onClick={() => setMenuOpen(false)}>Activity</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#contacts" onClick={() => setMenuOpen(false)}>Contacts</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;