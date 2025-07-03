import React from 'react';
import './WhatWeDo.css';
import { useLanguage } from '../context/LanguageContext';

import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';

const cardsData = [
  { id: '01', key: 'card1', image: card1 },
  { id: '02', key: 'card2', image: card2 },
  { id: '03', key: 'card3', image: card3 },
  { id: '04', key: 'card4', image: card4 },
];

export default function WhatWeDo() {
    const { t, lang, setLang } = useLanguage();
  
  return (
    <section className="what"id='services'>
      <div className="what-container">
        <div className="title-line">
          <div className="line" />
          <h2>{t.wedotitle}</h2>
        </div>
        <div className="what-header">
          <p>{t.wedodescr}</p>
          <a href='#contacts' className="circle-btn">
            <span className="arrow"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.6577 0.5H13.1577V2.1875H24.6242L0.746094 26.0572L1.93578 27.2469L25.8139 3.37719V14H27.5014V1.34375C27.5014 1.11997 27.4125 0.905362 27.2543 0.747129C27.096 0.588895 26.8814 0.5 26.6577 0.5Z" fill="black"/>
</svg>
</span>
          </a>
        </div>
        <div className="cards">
          {cardsData.map((card) => (
            <div className="card" key={card.id}>
              <span className="card-number">{card.id}</span>
              <p className="card-text">{t[card.key]}</p>
              <div
                className="card-image"
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}