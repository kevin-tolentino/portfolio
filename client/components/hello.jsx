import React from 'react';

function Hello(props) {
  return (
    <div className="text-white d-flex flex-column justify-content-center component hero-image">
      <div className="hero-icon-row">
        <div className='hero-icon-div d-flex flex-column align-items-center justify-content-center'>
          <img className="hero-logo" src="/images/logo-white.png" alt="logo-white" />
          <h1 className="text-center hero-text">Learn. Code. Serve.</h1>
        </div>
      </div>

    </div>
  );
}

export default Hello;
