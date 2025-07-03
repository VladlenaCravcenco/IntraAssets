import React, { useEffect, useState } from 'react';
import './Hero.css';
import { useLanguage } from '../context/LanguageContext';
import { client } from '../sanityClient';

function Hero() {
  const { lang } = useLanguage();
  const [data, setData] = useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "hero"][0]`).then(setData);
  }, []);

  if (!data) return null;

  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">{data.title[lang]}</h1>
        <div className='hero-descr-container'>
          <p className="hero-description">{data.subtitle[lang]}</p>
          <a href='#contacts' className="yellow-btn">{data.cta1[lang]}</a>
          <a href='#contacts' className="yellow-btn">{data.cta2[lang]}</a>
          <a href='#contacts' className="circle-btn">
            <span className="arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;