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
            <span className="arrow"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.939 0.848633H9.60288V2.01564H17.5327L1.01953 18.523L1.84227 19.3457L18.3554 2.83838V10.1847H19.5225V1.43214C19.5225 1.27738 19.461 1.12897 19.3516 1.01954C19.2421 0.910109 19.0937 0.848633 18.939 0.848633Z" fill="black"/>
</svg>
</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;