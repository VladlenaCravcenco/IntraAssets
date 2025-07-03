import React, { useEffect, useState } from 'react';
import './Team.css';
import { useLanguage } from '../context/LanguageContext';
import { client } from '../sanityClient';

function Team() {
  const { lang } = useLanguage();
  const [data, setData] = useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "team"][0]`).then(setData);
  }, []);

  if (!data) return null;

  return (
    <section className="team-section">
      <div className="team-container">
        <div className="title-line">
          <div className="line" />
          <h2>{data.title[lang]}</h2>
        </div>
        <div className="team-grid">
          {data.members?.map((member, index) => (
            <div className="team-card" key={index}>
              <p className="team-name">{member.name}</p>
              <p className="team-role">{member.role[lang]}</p>
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