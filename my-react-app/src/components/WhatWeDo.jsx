import React from 'react';
import './WhatWeDo.css';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';

const cardsData = [
  { id: '01', text: 'Electricity trading in wholesale markets', image: card1 },
  { id: '02', text: 'Participation in regional energy exchanges', image: card2 },
  { id: '03', text: 'Optimization of cross-border power flows', image: card3 },
  { id: '04', text: 'Commercial support for regional partners', image: card4 },
];

export default function WhatWeDo() {
  return (
    <section className="what">
      <div className="what-container">
        <div className="title-line">
          <div className="line" />
          <h2>What we do</h2>
        </div>
        <div className="what-header">
          <p>
            Intra Assets delivers strategic energy solutions across Eastern Europe. We operate exclusively in the wholesale market, enabling transparent, reliable, and efficient electricity flows between regional actors.
          </p>
          <button className="circle-btn">
            <span className="arrow">↗</span>
          </button>
        </div>
        <div className="cards">
          {cardsData.map((card) => (
            <div className="card" key={card.id}>
              <span className="card-number">{card.id}</span>
              <p className="card-text">{card.text}</p>
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