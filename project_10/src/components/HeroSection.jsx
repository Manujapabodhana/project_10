import React from 'react';
import './HeroSection.css';
import heroBg from '../assets/hero-bg.jpg';

const HeroSection = () => (
  <section
    className="hero-section"
    style={{ backgroundImage: `url(${heroBg})` }}
  >
    <div className="hero-overlay">
      <h1>
        RETIRING 16 TEST TON ANGELO<br />
        MATHEWS A TRUE WARRIOR
      </h1>
      <button className="read-more">READ MORE</button>
    </div>
  </section>
);

export default HeroSection;
