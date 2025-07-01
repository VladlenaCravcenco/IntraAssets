import React from 'react';
import './EnergySection.css';

import worker from '../assets/engineer.png';

export default function EnergySection() {
  return (
    <section className="energy">
      
      <div className="energy-container">
        <div className="energy-text">
          <h2>Light Without Borders. <br /> Energy Without Limits.</h2>
          <p>
            Intra Assets is your trusted partner in regional electricity trading across Eastern Europe. <br />
            Agile, connected, and committed to market integrity.
          </p>
          <div className="energy-links">
            <a href="#">LinkedIn</a>
            <a href="#">Download License PDF</a>
          </div>
        </div>
        <div className="energy-form-container">
          <form className="energy-form">
            <h3>Contact Our Team</h3>
            <input type="text" placeholder="Name" />
            <div className="input-row">
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone Number" />
            </div>
            <textarea placeholder="Write Your Message Here"></textarea>
            <button type="submit">submit now</button>
          </form>
          <div className="energy-image">
            <img src={worker} alt="Worker" />
          </div>
        </div>
      </div>
    </section>
  );
}
