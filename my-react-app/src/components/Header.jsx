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
    logoText,
    navLinks
  }`)
  .then(setData);
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
          {data.logo ? (
            <img src={data.logo.asset.url} alt="Logo" />
          ) : (
            <>Intra <span>Assets</span></>
          )}
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {data.navItems?.map((item, i) => (
            <a key={i} href={item.url}>{item.label}</a>
          ))}
          {data.ctaText && (
            <a className="cta" href={data.ctaUrl}>{data.ctaText}</a>
          )}
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
            {data.navItems?.map((item, i) => (
              <a key={i} href={item.url} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            {data.ctaText && (
              <a className="cta" href={data.ctaUrl} onClick={() => setMenuOpen(false)}>
                {data.ctaText}
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;