import React from 'react';

function Contact(props) {
  return (
    <footer id="contact" className="text-light container-fluid pb-4 bg-dark d-flex flex-column justify-content-center">
      <div className="row my-4">
        <div className="col d-flex justify-content-center">
          <img className="contact-logo" src="/images/logo-name-white.png" alt="White logo contact"/>
        </div>
      </div>
      <div className="row my-4 justify-content-center">
        <div className="text-center col-lg">
          <i className="contact-icon fas fa-map-marker-alt"></i> Los Angeles, CA
        </div>
        <div className="text-center contact-text col-lg">
          <a className="text-light" href="tel:562-303-7446"><i className="contact-icon fas fa-phone-alt"></i> (562) 303-7446</a>
        </div>
        <div className="text-center contact-text col-lg">
          <a className="text-light" href="mailto:kevin.tolentino95@gmail.com"><i className="contact-icon fas fa-envelope"></i> kevin.tolentino95@gmail.com</a>
        </div>
      </div>
      <div className="row justify-content-center">
        <a className="mx-2 d-flex justify-content-center align-items-center contact-icon-styling" href="https://github.com/kevin-tolentino" target="_blank" rel="noopener noreferrer">
          <i className="mx-1 fab fa-github"></i>
        </a>
        <a className="mx-2 d-flex justify-content-center align-items-center contact-icon-styling" href="https://www.linkedin.com/in/kevinstolentino/" target="_blank" rel="noopener noreferrer">
          <i className="mx-1 fab fa-linkedin"></i>
        </a>
        <a className="mx-2 d-flex justify-content-center align-items-center contact-icon-styling" href="/images/Kevin_Tolentino_Resume.pdf" download>
          <i className="mx-1 fas fa-file-alt"></i>
        </a>
      </div>
    </footer>
  );
}

export default Contact;
