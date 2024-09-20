import React from 'react';
import '../styles/Feature.css';



const Features = () => {
  return (
    <section id="features" className="features py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center">
            <h3>HIGHER PROFITS</h3>
            <p>We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</p>
          </div>
          <div className="col-md-4 text-center">
            <h3>ROBUST SCALING</h3>
            <p>Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</p>
          </div>
          <div className="col-md-4 text-center">
            <h3>BEST SELECTION</h3>
            <p>With 900+ products and top quality brands, you can choose the best products for your business.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
