import React, { useState, useEffect } from 'react';
import './Header.css';
import { useLanguage } from '../context/LanguageContext';



function Header() {
    const { t, lang, setLang } = useLanguage();
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
          <a href="#about">{t.about}</a>
        <a href="#activity">{t.activity}</a>
        <a href="#services">{t.services}</a>
        <a href="#contacts">{t.contacts}</a>
        </nav>

        <div className="language-switcher">
          <button onClick={() => setLang('ro')}>ro</button> / 
        <button onClick={() => setLang('en')}>en</button>
        </div>

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
            <a href="#about" onClick={() => setMenuOpen(false)}>{t.about}</a>
            <a href="#activity" onClick={() => setMenuOpen(false)}>{t.activity}</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>{t.services}</a>
            <a href="#contacts" onClick={() => setMenuOpen(false)}>{t.contacts}</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;