import React from 'react';

function Contact(props) {
  return (
    <footer className="pb-4 footer bg-light d-flex flex-column justify-content-center">
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
    </footer>
  );
}

export default Contact;
