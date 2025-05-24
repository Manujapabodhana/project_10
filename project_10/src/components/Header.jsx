import React from 'react';
import './Header.css';
import logo from '../assets/srilanka-cricket-logo.png';

const Header = () => (
  <header className="header">
    <div className="header-left">
      <img src={logo} alt="Sri Lanka Cricket" className="logo" />
      <nav className="nav">
        <a href="/">HOME</a>
        <div className="dropdown">
          <a href="/">INTERNATIONAL</a>
        </div>
        <div className="dropdown">
          <a href="/">DOMESTIC</a>
        </div>
        <a href="/">NEWS</a>
        <a href="/">MEDIA</a>
        <a href="/">COACHING</a>
        <a href="/">GALLERY</a>
        <a href="/">ABOUT US</a>
      </nav>
    </div>
    <div className="header-right">
      <button className="buy-tickets">Buy Tickets</button>
      <button className="live-btn">Live</button>
      <span className="lang-select">සිංහල</span>
    </div>
  </header>
);

export default Header;
