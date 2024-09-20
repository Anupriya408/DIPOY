import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">PRINTIFY</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#features">How It Works</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">Sell</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Start Selling</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

