import React from 'react';
import './Hero.css';
import { useLanguage } from '../context/LanguageContext';

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">{t.herotitle}</h1>
        <div className='hero-descr-container'>
          <p className="hero-description">
            {t.herosubtitle}
          </p>
          <button className="yellow-btn">{t.herorequest}</button>
          <button className="yellow-btn">{t.herocontact}</button>
          <button className="circle-btn">
            <span className="arrow">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;