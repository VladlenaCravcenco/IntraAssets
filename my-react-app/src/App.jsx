import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import WhereWeOperate from './components/WhereWeOperate';
import WhatWeDo from './components/WhatWeDo';
import EnergySection from './components/EnergySection';
import FooterMap from './components/FooterMap';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <WhoWeAre />
      <WhereWeOperate />
      <WhatWeDo />
      <EnergySection />
      <FooterMap />
    </>
  );
}

export default App;
