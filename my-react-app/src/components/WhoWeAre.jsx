import React from 'react';
import './WhoWeAre.css';
import sample1 from '../assets/sample1.png';
import sample2 from '../assets/sample2.png';

export default function WhoWeAre() {
  return (
    <section className="who">
      <div className="who-container">
        <div className="title-line">
          <div className="line" />
          <h2>Who we are</h2>
        </div>

        <div className="who-grid">
          <div className="who-img">
            <img src={sample1} alt="Tower" />
          </div>

          <div className="who-text">
            <h3>Experts In Regional Electricity Trading</h3>
            <p>Intra Assets SRL is a licensed electricity supplier operating exclusively in the wholesale energy market.</p>
            <p>We trade electricity between suppliers, traders, and exchanges in Moldova, Romania, and Ukraine.</p>
            <p>We do not supply end-consumers – our role is to enable and optimize cross-border flows of electricity between market participants.</p>
          </div>

          <div className="who-arrow">
            <button className="circle-btn">
              <span className="arrow">↗</span>
            </button>
          </div>

          <div className="who-extra-img">
            <img src={sample2} alt="People" />
          </div>
        </div>
      </div>
    </section>
  );
}