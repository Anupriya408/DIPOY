import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <section className="banner text-center d-flex align-items-center justify-content-center">
      <div className="container">
        <h1>Discover Amazing Products</h1>
        <p>Start your journey with us today!</p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </section>
  );
};

export default Banner;
