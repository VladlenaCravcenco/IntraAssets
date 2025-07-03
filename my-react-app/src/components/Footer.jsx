import React from 'react';
import './Footer.css';
import { useLanguage } from '../context/LanguageContext';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const { t, lang, setLang } = useLanguage();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h2><span className="yellow">Intra</span> Assets</h2>
          <p>Intra Assets SRL</p>
          <p>{t.license}</p>
          <p>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {' '}|{' '}
            <a href="/IntraAssets_License.pdf" target="_blank" rel="noopener noreferrer">{t.buttonlicense}</a>
          </p>
          <div className="footer-line" />
        </div>

        <div className="footer-col">
          <h3>{t.Teamtitle}</h3>
          <div className="team-member">
        <p><strong>Chiril Lucinschi</strong> – Administrator</p>
        <a href="mailto:intraassets@gmail.com">intraassets@gmail.com</a>
      </div>
      <div className="team-member">
        <p><strong>Diana Chistrea</strong> – Commercial Director</p>
        <a href="mailto:intraassets@gmail.com">intraassets@gmail.com</a>
      </div>
      <div className="team-member">
        <p><strong>Eduard Scutaru</strong> – Jurist</p>
        <a href="mailto:e.scutaru@bulr.com">e.scutaru@bulr.com</a>
      </div>
        </div>

        <div className="footer-col">
          <h3>{t.contacts}</h3>
          <p> <a href="https://maps.google.com/?q=str.București+76,Chișinău" target="_blank" rel="noopener noreferrer"><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.3691 8.99953V14.9995C22.3691 17.4995 21.8691 19.2495 20.7491 20.3795L14.3691 13.9995L22.0992 6.26953C22.2792 7.05953 22.3691 7.95953 22.3691 8.99953Z" stroke="#FFCC00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.0992 6.27L6.63913 21.73C3.62913 21.04 2.36914 18.96 2.36914 15V9C2.36914 4 4.36914 2 9.36914 2H15.3691C19.3291 2 21.4092 3.26 22.0992 6.27Z" stroke="#FFCC00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.7487 20.38C19.6187 21.5 17.8687 22 15.3687 22H9.36868C8.32868 22 7.42867 21.91 6.63867 21.73L14.3687 14L20.7487 20.38Z" stroke="#FFCC00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.60843 7.9807C7.28843 5.0507 11.6884 5.0507 12.3684 7.9807C12.7584 9.7007 11.6784 11.1607 10.7284 12.0607C10.0384 12.7207 8.94844 12.7207 8.24844 12.0607C7.29844 11.1607 6.20843 9.7007 6.60843 7.9807Z" stroke="#FFCC00" stroke-width="1.5"/>
<path d="M9.46326 8.69922H9.47224" stroke="#FFCC00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Chișinău, Republic of Moldova, MD-2012, str.București 76</a></p>
          <p> <a href="tel:+37379409945"><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5911 18.33C22.5911 18.69 22.5111 19.06 22.3411 19.42C22.1711 19.78 21.9511 20.12 21.6611 20.44C21.1711 20.98 20.6311 21.37 20.0211 21.62C19.4211 21.87 18.7711 22 18.0711 22C17.0511 22 15.9611 21.76 14.8111 21.27C13.6611 20.78 12.5111 20.12 11.3711 19.29C10.2211 18.45 9.13109 17.52 8.09109 16.49C7.06109 15.45 6.13109 14.36 5.30109 13.22C4.48109 12.08 3.82109 10.94 3.34109 9.81C2.86109 8.67 2.62109 7.58 2.62109 6.54C2.62109 5.86 2.74109 5.21 2.98109 4.61C3.22109 4 3.60109 3.44 4.13109 2.94C4.77109 2.31 5.47109 2 6.21109 2C6.49109 2 6.77109 2.06 7.02109 2.18C7.28109 2.3 7.51109 2.48 7.69109 2.74L10.0111 6.01C10.1911 6.26 10.3211 6.49 10.4111 6.71C10.5011 6.92 10.5511 7.13 10.5511 7.32C10.5511 7.56 10.4811 7.8 10.3411 8.03C10.2111 8.26 10.0211 8.5 9.78109 8.74L9.02109 9.53C8.91109 9.64 8.86109 9.77 8.86109 9.93C8.86109 10.01 8.87109 10.08 8.89109 10.16C8.92109 10.24 8.95109 10.3 8.97109 10.36C9.15109 10.69 9.46109 11.12 9.90109 11.64C10.3511 12.16 10.8311 12.69 11.3511 13.22C11.8911 13.75 12.4111 14.24 12.9411 14.69C13.4611 15.13 13.8911 15.43 14.2311 15.61C14.2811 15.63 14.3411 15.66 14.4111 15.69C14.4911 15.72 14.5711 15.73 14.6611 15.73C14.8311 15.73 14.9611 15.67 15.0711 15.56L15.8311 14.81C16.0811 14.56 16.3211 14.37 16.5511 14.25C16.7811 14.11 17.0111 14.04 17.2611 14.04C17.4511 14.04 17.6511 14.08 17.8711 14.17C18.0911 14.26 18.3211 14.39 18.5711 14.56L21.8811 16.91C22.1411 17.09 22.3211 17.3 22.4311 17.55C22.5311 17.8 22.5911 18.05 22.5911 18.33Z" stroke="#FFCC00" stroke-width="1.5" stroke-miterlimit="10"/>
</svg>
 +373 79409945</a></p>
          <p> <a href="mailto:contact@intra-assets.md"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#FFCC00" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#FFCC00" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

 contact@intra-assets.md</a></p>
        </div>
      </div>
     
       
    </footer>
  );
}