import React, { useEffect, useState } from 'react';
import './Team.css';
import { useLanguage } from '../context/LanguageContext';
import { client } from '../sanityClient';
import { motion } from 'framer-motion';

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
        <motion.div
          className="title-line"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="line" />
          <h2>{data.title[lang]}</h2>
        </motion.div>

        <motion.div
          className="team-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {data.members?.map((member, index) => (
            <motion.div
              className="team-card"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="team-name">{member.name}</p>
              <p className="team-role">{member.role[lang]}</p>
              <a className="team-email" href={`mailto:${member.email}`}>
                {member.email}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Team;