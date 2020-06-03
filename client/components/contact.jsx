import React from 'react';

function Contact(props) {
  return (
    <div className="pb-4 container-xl bg-light">
      <div className="row">
        <div className="p-3 col">
          <h2>Contact</h2>
        </div>
      </div>
      <div className="row my-4">
        <div className="col">
          <h3 className="text-center">Kevin Tolentino</h3>
        </div>
      </div>
      <div className="row my-4">
        <div className="col">
          <div className="text-center">
            {/* add location icon */}
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="col">
          <div className="text-center">
            {/* add phone icon */}
            <a href="tel:562-303-7446">(562) 303-7446</a>
          </div>
        </div>
        <div className="col">
          <div className="text-center">
            {/* add email icon */}
            <a href="mailto:kevin.tolentino95@gmail.com">kevin.tolentino95@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
