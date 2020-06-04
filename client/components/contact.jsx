import React from 'react';

function Contact(props) {
  return (
    <footer className="container-fluid pb-4 bg-light d-flex flex-column justify-content-center">
      <div className="row my-4">
        <div className="col">
          <h3 className="text-center">Kevin Tolentino</h3>
        </div>
      </div>
      <div className="row my-4 justify-content-center">
        <div className="text-center col-lg">
          <i className="contact-icon fas fa-map-marker-alt"></i> Los Angeles, CA
        </div>
        <div className="text-center contact-text col-lg">
          <a href="tel:562-303-7446"><i className="contact-icon fas fa-phone-alt"></i> (562) 303-7446</a>
        </div>
        <div className="text-center contact-text col-lg">
          <a href="mailto:kevin.tolentino95@gmail.com"><i className="contact-icon fas fa-envelope"></i> kevin.tolentino95@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
