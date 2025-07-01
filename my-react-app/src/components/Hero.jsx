import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">Intra Assets – Light Without Borders</h1>
        <p className="hero-description">
          Regional electricity trading company, active in wholesale energy markets across Moldova, Romania, and Ukraine.
        </p>
        <div className="hero-buttons">
          <button className="yellow-btn">Request Partnership</button>
          <button className="yellow-btn">Get in Touch</button>
          <button className="circle-btn">
            <span className="arrow">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}
