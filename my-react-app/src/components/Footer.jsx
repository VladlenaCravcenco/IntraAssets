import React from 'react';
import './Footer.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h2><span className="yellow">Intra</span> Assets</h2>
          <p>Intra Assets SRL</p>
          <p>Licensed by ANRE – Dec 3, 2020</p>
          <p>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {' '}|{' '}
            <a href="/IntraAssets_License.pdf" target="_blank" rel="noopener noreferrer">Download License PDF</a>
          </p>
          <div className="footer-line" />
        </div>

        <div className="footer-col">
          <h3>Contact information</h3>
          <p><FaMapMarkerAlt className="icon" /> <a href="https://maps.google.com/?q=str.București+76,Chișinău" target="_blank" rel="noopener noreferrer">Chișinău, Republic of Moldova, MD-2012, str.București 76</a></p>
          <p><FaPhoneAlt className="icon" /> <a href="tel:+37379409945">+373 79409945</a></p>
          <p><FaEnvelope className="icon" /> <a href="mailto:contact@intra-assets.md">contact@intra-assets.md</a></p>
        </div>
      </div>
     
       
    </footer>
  );
}