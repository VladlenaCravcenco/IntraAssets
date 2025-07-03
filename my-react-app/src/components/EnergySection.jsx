import React from 'react';
import './EnergySection.css';
import { useLanguage } from '../context/LanguageContext';


import worker from '../assets/engineer.png';

export default function EnergySection() {
    const { t, lang, setLang } = useLanguage();
  
  return (
    <section className="energy" id='contacts'>
      
      <div className="energy-container">
        <div className="energy-text">
          <h2>{t.energytitle1} <br /> {t.energytitle2}</h2>
          <p>
            {t.energydescr}
          </p>
          <div className="energy-links">
            <a href="#">LinkedIn</a>
            <a href="#">{t.energylicense}</a>
          </div>
        </div>
        <div className="energy-form-container">
          <form className="energy-form">
            <h3>{t.energyForm}</h3>
            <input type="text" placeholder="Name" />
            <div className="input-row">
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone Number" />
            </div>
            <textarea placeholder="Write Your Message Here"></textarea>
            <button type="submit">{t.energysubmit}</button>
          </form>
          <div className="energy-image">
            <img src={worker} alt="Worker" />
          </div>
        </div>
      </div>
    </section>
  );
}
