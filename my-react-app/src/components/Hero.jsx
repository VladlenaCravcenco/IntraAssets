import React, { useEffect, useState } from 'react';
import './WhatWeDo.css';
import { useLanguage } from '../context/LanguageContext';
import { client } from '../sanityClient';
import { motion } from 'framer-motion';

export default function WhatWeDo() {
  const { lang } = useLanguage();
  const [data, setData] = useState(null);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    client
      .fetch(`*[_type == "whatWeDo"][0]{
        title,
        description,
        services[]{
          id,
          text,
          image {
            asset->{ url }
          }
        }
      }`)
      .then(setData);
  }, []);

  if (!data) return null;

  return (
    <section className="what" id="services">
      <div className="what-container">
        <motion.div
          className="title-line"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="line" />
          <h2>{data.title?.[lang]}</h2>
        </motion.div>

        <motion.div
          className="what-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>{data.description?.[lang]}</p>
          <a href="#contacts" className="circle-btn">
            <span className="arrow">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.6577 0.5H13.1577V2.1875H24.6242L0.746094 26.0572L1.93578 27.2469L25.8139 3.37719V14H27.5014V1.34375C27.5014 1.11997 27.4125 0.905362 27.2543 0.747129C27.096 0.588895 26.8814 0.5 26.6577 0.5Z" fill="black"/>
              </svg>
            </span>
          </a>
        </motion.div>

        <div className="cards">
          {data.services?.map((card, i) => (
            <motion.div
              className={`card ${activeCard === i ? 'active' : ''}`}
              key={i}
              onMouseEnter={() => setActiveCard(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="card-number">{card.id}</span>
              <p className="card-text">{card.text?.[lang]}</p>
              <div
                className="card-image"
                style={{ backgroundImage: `url(${card.image?.asset?.url})` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}