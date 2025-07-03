import React from 'react';
import './WhereWeOperate.css';
import { useLanguage } from '../context/LanguageContext';
import sampleMap from '../assets/sample-map.png';

export default function WhereWeOperate() {
    const { t, lang, setLang } = useLanguage();
  
  return (
    <section className="where" id='activity'>
      <div className="where-container">
        <div className="title-line">
          
          <h2>{t.wherewetitle}</h2>
          <div className="line" />
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
            <div className="card-operate">
              <h3>{t.wherewesubtitle}</h3>
              <p>{t.wherewesubdescription}</p>
            </div>
            <div className="card-operate">
              <h3>{t.wherewecountry}</h3>
              <div className="entry">
                <span>{t.whereweMD}</span>
                <p>{t.whereweMDdescr}</p>
              </div>
              <div className="entry">
                <span>{t.whereweRO}</span>
                <p>{t.whereweROdescr}</p>
              </div>
              <div className="entry">
                <span>{t.whereweUK}</span>
                <p>{t.whereweUKdescr}</p>
              </div>
              <a href='/files/Reperfectatã la data de - 25.02.2025.pdf' download className="yellow-btn">{t.wherewebutton}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}