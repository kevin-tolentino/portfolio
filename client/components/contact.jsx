import React from 'react';

function Contact(props) {
  return (
    <footer className="pb-4 bg-light d-flex flex-column justify-content-center">
      <div className="row my-4">
        <div className="col">
          <h3 className="text-center">Kevin Tolentino</h3>
        </div>
      </div>
      <div className="row my-4 justify-content-center">
        <div className="text-center col-md-2">
          <p><i className="fas fa-map-marker-alt fa-2x"></i> Los Angeles, CA</p>
        </div>
        <div className="text-center contact-text col-md-2">
          <a href="tel:562-303-7446"><i className="mx-1 fa-2x fas fa-phone-alt"></i> (562) 303-7446</a>
        </div>
        <div className="text-center contact-text col-md-2">
          <a href="mailto:kevin.tolentino95@gmail.com"><i className="mx-1 fas fa-envelope fa-2x"></i>kevin.tolentino95@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
