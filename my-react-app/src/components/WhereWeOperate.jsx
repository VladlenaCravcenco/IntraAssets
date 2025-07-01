import React from 'react';
import './WhereWeOperate.css';
import sampleMap from '../assets/sample-map.png';

export default function WhereWeOperate() {
  return (
    <section className="where">
      <div className="where-container">
        <div className="title-line">
          <div className="line" />
          <h2>Where we operate</h2>
        </div>

        <div className="where-content">
          <div className="map-side">
            <img src={sampleMap} alt="electric map" />
            <div className="circle-btn-wrapper">
              <button className="circle-btn">
                <span className="arrow">↗</span>
              </button>
            </div>
          </div>

          <div className="cards-side">
            <div className="card">
              <h3>Regional Presence</h3>
              <p>Intra Assets facilitates efficient and transparent cross-border electricity flows.</p>
            </div>
            <div className="card">
              <h3>Country market activity:</h3>
              <div className="entry">
                <span>🇲🇩 Moldova</span>
                <p>Licensed wholesale trader (ANRE)</p>
              </div>
              <div className="entry">
                <span>🇷🇴 Romania</span>
                <p>Active on OPCOM power exchange</p>
              </div>
              <div className="entry">
                <span>🇺🇦 Ukraine</span>
                <p>Trading partnerships with suppliers</p>
              </div>
              <button className="yellow-btn">Download License PDF</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}