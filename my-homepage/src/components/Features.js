import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section id="features" className="features py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center">
            <h3>Feature 1</h3>
            <p>Describe feature 1 here.</p>
          </div>
          <div className="col-md-4 text-center">
            <h3>Feature 2</h3>
            <p>Describe feature 2 here.</p>
          </div>
          <div className="col-md-4 text-center">
            <h3>Feature 3</h3>
            <p>Describe feature 3 here.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
