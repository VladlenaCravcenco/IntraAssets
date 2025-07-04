import React, { useEffect, useState } from 'react';
import './EnergySection.css';
import { useLanguage } from '../context/LanguageContext';
import { client } from '../sanityClient';

import worker from '../assets/engineer.png';

export default function EnergySection() {
  const { lang } = useLanguage();
  const [data, setData] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "energySection"][0]{
        title1,
        title2,
        description,
        formTitle,
        submitText,
        licenseText
      }`)
      .then(setData);
  }, []);

  if (!data) return null;

  return (
    <section className="energy" id="contacts">
      <div className="energy-container">
        <div className="energy-text">
          <h2>
            {data.title1?.[lang]} <br /> {data.title2?.[lang]}
          </h2>
          <p>{data.description?.[lang]}</p>
          <div className="energy-links">
            <a href="#">LinkedIn</a>
            <a href="/files/Reperfectatã la data de - 25.02.2025.pdf" download>
              {data.licenseText?.[lang]}
            </a>
          </div>
        </div>

        <div className="energy-form-container">
          <form className="energy-form">
            <h3>{data.formTitle?.[lang]}</h3>
            <input type="text" placeholder="Name" />
            <div className="input-row">
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone Number" />
            </div>
            <textarea placeholder="Write Your Message Here" />
            <button type="submit">{data.submitText?.[lang]}</button>
          </form>

          <div className="energy-image">
            <img src={worker} alt="Worker" />
          </div>
        </div>
      </div>
    </section>
  );
}