import React from 'react';
import './WhoWeAre.css';
import { useLanguage } from '../context/LanguageContext';
import sample1 from '../assets/sample1.png';
import sample2 from '../assets/sample2.png';

export default function WhoWeAre() {
  const { t, lang, setLang } = useLanguage();
  return (
    <section className="who" id='about'>
      <div className="who-container">
        <div className="title-line">
          <div className="line" />
          <h2>{t.whowetitle}</h2>
        </div>

        <div className="who-grid">
          <div className="who-img">
            <img src={sample1} alt="Tower" />
          </div>

          <div className="who-text">
            <h3>{t.whowesubtitle}</h3>
            <p>{t.whowep1}</p>
            <p>{t.whowep2}</p>
            <p>{t.whowep3}</p>
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