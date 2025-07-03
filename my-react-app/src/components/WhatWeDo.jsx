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
          <button className="circle-btn">
            <span className="arrow">↗</span>
          </button>
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