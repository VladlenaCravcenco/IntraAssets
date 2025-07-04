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
          <a href="#contacts" className="circle-btn">
            <span className="arrow">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.6577 0.5H13.1577V2.1875H24.6242L0.746094 26.0572L1.93578 27.2469L25.8139 3.37719V14H27.5014V1.34375C27.5014 1.11997 27.4125 0.905362 27.2543 0.747129C27.096 0.588895 26.8814 0.5 26.6577 0.5Z" fill="black"/>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;