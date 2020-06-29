import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

function Contact(props) {
  return (
    <div className={props.background}>
      <footer id="contact" className="container-fluid pb-4 d-flex flex-column justify-content-center">
        <div className="row my-4">
          <div className="col d-flex justify-content-center">
            <h2 className="text-center">I look forward to talking with you!</h2>
          </div>
        </div>
        <div className="row my-4 justify-content-center">
          <div className="text-center col-12">
            <i className="contact-icon fas fa-map-marker-alt"></i> Los Angeles, CA
          </div>
          <div className="text-center contact-text col-12">
            <a className="" href="tel:562-303-7446"><i className="contact-icon fas fa-phone-alt"></i> (562) 303-7446</a>
          </div>
          <div className="text-center contact-text col-12">
            <a className="" href="mailto:kevin.tolentino95@gmail.com"><i className="contact-icon fas fa-envelope"></i> kevin.tolentino95@gmail.com</a>
          </div>
        </div>
        <div className="row justify-content-center">
          <div>
            <a className="mx-2 d-flex justify-content-center align-items-center contact-icon-styling" href="https://github.com/kevin-tolentino" target="_blank" rel="noopener noreferrer">
              <i className="mx-1 fab fa-github"></i>
            </a>
            <p className="text-center contact-icon-text">GitHub</p>
          </div>
          <div>
            <a className="mx-2 d-flex justify-content-center align-items-center contact-icon-styling" href="https://www.linkedin.com/in/kevinstolentino/" target="_blank" rel="noopener noreferrer">
              <i className="mx-1 fab fa-linkedin"></i>
            </a>
            <p className="text-center contact-icon-text">LinkedIn</p>
          </div>
          <div>
            <a className="mx-2 d-flex justify-content-center align-items-center contact-icon-styling" href="/images/Kevin_Tolentino_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <i className="mx-1 fas fa-file-alt"></i>
            </a>
            <p className="text-center contact-icon-text">Resume</p>
          </div>
        </div>
        <div className="row mt-3 justify-content-center">
          <div className="col">
            <p className="contact-scroll-to-top text-center cursor-pointer" onClick={() => {
              scroll.scrollToTop({
                duration: 800,
                smooth: 'easeInOutQuart'
              });
            }}> <em>&gt;&gt;Click here to go to top!&lt;&lt;</em></p></div>
        </div>
        <div className="row mt-4 justify-content-center">
          <div className="col">
            <p className="text-center">© Kevin Tolentino 2020</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
