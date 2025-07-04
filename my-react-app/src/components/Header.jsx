import React, { useState, useEffect } from 'react';
import './Header.css';
import { useLanguage } from '../context/LanguageContext';
import { client } from '../sanityClient';

function Header() {
  const { lang, setLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "header"][0]{
        logoImage { asset->{url} },
        navLinks
      }`)
      .then(setData)
      .catch(console.error);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!data) return null;

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          {data.logoImage ? (
            <img src={data.logoImage.asset.url} alt="Logo" />
          ) : (
            <>Intra <span>Assets</span></>
          )}
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#about">{data.navLinks?.about?.[lang]}</a>
          <a href="#activity">{data.navLinks?.activity?.[lang]}</a>
          <a href="#services">{data.navLinks?.services?.[lang]}</a>
          <a href="#contacts">{data.navLinks?.contacts?.[lang]}</a>
        </nav>

        <div className="language-switcher">
          <button onClick={() => setLang('ro')}>ro</button> | 
          <button onClick={() => setLang('en')}>        en</button>
        </div>

        <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <span className="close-icon">✕</span> : <span className="burger-icon">☰</span>}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-nav">
            <a href="#about" onClick={() => setMenuOpen(false)}>{data.navLinks?.about?.[lang]}</a>
            <a href="#activity" onClick={() => setMenuOpen(false)}>{data.navLinks?.activity?.[lang]}</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>{data.navLinks?.services?.[lang]}</a>
            <a href="#contacts" onClick={() => setMenuOpen(false)}>{data.navLinks?.contacts?.[lang]}</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;