import React from 'react';
import './UpcomingSidebar.css';
import policeLogo from '../assets/police-sports-club.png';
import bloomfieldLogo from '../assets/bloomfield-cricket-club.png';

const UpcomingSidebar = () => (
  <aside className="upcoming-sidebar">
    <h3>Upcoming</h3>
    <div className="event">
      <div className="event-title">MAJOR CLUB T20 2025</div>
      <div className="event-date">22 May 2025</div>
      <div className="event-location">Colts, Colombo</div>
      <div className="clubs">
        <div className="club">
          <img src={policeLogo} alt="Police Sports Club" />
          <span>POLICE SPORTS CLUB</span>
        </div>
        <div className="club">
          <img src={bloomfieldLogo} alt="Bloomfield Cricket and Athletic Club" />
          <span>BLOOMFIELD CRICKET AND ATHLETIC CLUB</span>
        </div>
      </div>
    </div>
  </aside>
);

export default UpcomingSidebar;
