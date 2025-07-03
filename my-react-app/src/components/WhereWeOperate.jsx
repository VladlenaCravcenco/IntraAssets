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
                <span className="arrow"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.6577 0.5H13.1577V2.1875H24.6242L0.746094 26.0572L1.93578 27.2469L25.8139 3.37719V14H27.5014V1.34375C27.5014 1.11997 27.4125 0.905362 27.2543 0.747129C27.096 0.588895 26.8814 0.5 26.6577 0.5Z" fill="black"/>
</svg>
</span>
              </button>
            </div>
          </div>

          <div className="cards-side">
            <div className="card-operate">
              <h3>{t.wherewesubtitle}</h3>
              <p>{t.wherewesubdescr}</p>
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