import React, { useEffect, useState } from 'react';
import './Hero.css';
import { useLanguage } from '../context/LanguageContext';
import { client } from '../sanityClient';
import { motion } from 'framer-motion';

function Hero() {
  const { lang } = useLanguage();
  const [data, setData] = useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "hero"][0]`).then(setData);
  }, []);

  if (!data) return null;

  return (
    <section className="hero">
      <div className="hero-container">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {data.title[lang]}
        </motion.h1>

        <motion.div
          className="hero-descr-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {data.subtitle[lang]}
          </motion.p>

          <motion.a
            href="#contacts"
            className="yellow-btn"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            {data.cta1[lang]}
          </motion.a>

          <motion.a
            href="#contacts"
            className="yellow-btn"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            {data.cta2[lang]}
          </motion.a>

          <motion.a
            href="#contacts"
            className="circle-btn"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.75, duration: 0.5, type: 'spring' }}
          >
            <span className="arrow">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.6577 0.5H13.1577V2.1875H24.6242L0.746094 26.0572L1.93578 27.2469L25.8139 3.37719V14H27.5014V1.34375C27.5014 1.11997 27.4125 0.905362 27.2543 0.747129C27.096 0.588895 26.8814 0.5 26.6577 0.5Z" fill="black"/>
              </svg>
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;