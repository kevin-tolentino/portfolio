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
      <div className="row justify-content-center">
        <a className="mx-2 d-flex justify-content-center align-items-center contact-icon-styling" href="https://github.com/kevin-tolentino" target="_blank" rel="noopener noreferrer">
          <i className="mx-1 fab fa-github fa-2x"></i>
        </a>
        <a className="mx-2 d-flex justify-content-center align-items-center contact-icon-styling" href="https://www.linkedin.com/in/kevinstolentino/" target="_blank" rel="noopener noreferrer">
          <i className="mx-1 fab fa-linkedin fa-2x"></i>
        </a>
        <a className="mx-2 d-flex justify-content-center align-items-center contact-icon-styling" href="/images/Kevin_Tolentino_Resume.pdf" download>
          <i className="mx-1 fas fa-file-alt fa-2x"></i>
        </a>
      </div>
    </footer>
  );
}

export default Contact;
