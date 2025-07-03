import React from 'react';
import './Team.css';
import { useLanguage } from '../context/LanguageContext';



 function Team() {
    const { t } = useLanguage();
  const team = [
    {
      name: 'Chiril Lucinschi',
      role: 'Administrator',
      email: 'intraassets@gmail.com',
    },
    {
      name: 'Diana Chistrea',
      role: 'Commercial Director',
      email: 'intraassets@gmail.com',
    },
    {
      name: 'Eduard Scutaru',
      role: 'Jurist',
      email: 'e.scutaru@bulr.com',
    },
  ];

  return (
    <section className="team-section">
      <div className="team-container">
        <div className="title-line">
          <div className="line" />
          <h2>{t.Teamtitle}</h2>
          
        </div>
        <div className="team-grid">
          {team.map((member, index) => (
            <div className="team-card" key={index}>
              <p className="team-name">{member.name}</p>
              <p className="team-role">{member.role}</p>
              <a className="team-email" href={`mailto:${member.email}`}>
                {member.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;