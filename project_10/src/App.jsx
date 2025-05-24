import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import HeroSection from './components/HeroSection';
import UpcomingSidebar from './components/UpcomingSidebar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <div className="main-content">
        <HeroSection />
        <UpcomingSidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
