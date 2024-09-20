import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
