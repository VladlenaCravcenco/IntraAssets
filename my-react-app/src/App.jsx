import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import WhereWeOperate from './components/WhereWeOperate';
import WhatWeDo from './components/WhatWeDo';
import EnergySection from './components/EnergySection';
import FooterMap from './components/FooterMap';
import Footer from './components/Footer';
import CopyFooter from './components/CopyFooter';
import Team from './components/Team';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <WhoWeAre />
        <Team />
      <WhereWeOperate />
      <WhatWeDo />
      <EnergySection />
      <FooterMap />
      <Footer />
      <CopyFooter />
    </>
  );
}

export default App;
