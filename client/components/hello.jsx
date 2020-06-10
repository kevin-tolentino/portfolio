import React from 'react';
import { scroller } from 'react-scroll';

class Hello extends React.Component {
  render() {

    return (
      <div id="hero" className="text-white d-flex flex-column justify-content-center hero-component hero-image">
        <div className="hero-icon-row">
          <div onClick={() => {
            scroller.scrollTo('about-me', {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart'
            });
          }}
          className='cursor-pointer hero-icon-div d-flex flex-column align-items-center justify-content-center'>
            <div className="hero-logo-container">
              <img className="hero-logo" src="/images/logo-white.png" alt="logo-white" />
              <div className="hero-logo-div-sibling"></div>
              <h1 className="text-center hero-text">Learn. Code. Serve.</h1>
            </div>
          </div>
        </div>

      </div>
    );
  }

}

export default Hello;
