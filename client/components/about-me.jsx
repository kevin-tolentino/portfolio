import React from 'react';
import LazyLoad from 'react-lazyload';

function AboutMe(props) {
  return (
    <div id="about-me" className="container-xl bg-white component d-flex align-items-center">
      <div className="row py-2 align-items-center">
        <div className="p-1 col-md-5 d-flex flex-column align-items-center justify-content-around">
          <div className="my-2 d-flex justify-content-center">
            <LazyLoad height={'100%'} offset={100} once>
              <img className="cutout fade-in-opacity" src="/images/profile-cutout-3.png" alt="Profile Cut Out"/>
            </LazyLoad>
          </div>
          <div className="about-me-icons-div my-2 d-flex justify-content-around">
            <div>
              <a className="about-icon-styling d-flex justify-content-center align-items-center" href="https://github.com/kevin-tolentino" target="_blank" rel="noopener noreferrer">
                <i className="icon-hover mx-1 fab fa-github "></i>
              </a>
              <p className="text-center about-me-icon-text">Github</p>
            </div>
            <div>
              <a className="about-icon-styling d-flex justify-content-center align-items-center" href="https://www.linkedin.com/in/kevinstolentino/" target="_blank" rel="noopener noreferrer">
                <i className="mx-1 fab fa-linkedin "></i>
              </a>
              <p className="text-center about-me-icon-text">LinkedIn</p>
            </div>
            <div>
              <a className="about-icon-styling d-flex justify-content-center align-items-center" href="tel:562-303-7446">
                <i className="mx-1  fas fa-phone-alt"></i>
              </a>
              <p className="text-center about-me-icon-text">Phone</p>
            </div>
            <div>
              <a className="about-icon-styling d-flex justify-content-center align-items-center" href="mailto:kevin.tolentino95@gmail.com">
                <i className="mx-1 fas fa-envelope "></i>
              </a>
              <p className="text-center about-me-icon-text">Email</p>
            </div>
            <div>
              <a className="about-icon-styling d-flex justify-content-center align-items-center" href="/images/Kevin_Tolentino_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <i className="mx-1 fas fa-file-alt "></i>
              </a>
              <p className="text-center about-me-icon-text">Resume</p>
            </div>
          </div>
        </div>
        <div className="p-3 col-md-7">
          <h2>About Me</h2>
          <p className='about-me-p'>Hi there! My name is Kevin Tolentino, and I&apos;m a Full-Stack Web Developer passionate about develop web applications that will serve other people&apos;s needs.</p>
          <p className='about-me-p'>In order to learn coding, I went through an Accelerated Full Stack Web Development program at LearningFuze in Orange County. I am now well-versed in languages like React.js, JavaScript, Node.js, Express and Relational Database Management Systems like PostgreSQL. I have also participated in Agile teams (with daily standups and Zoom/Slack Communication), maintained source control (Git/Github), and utilized project management tools (Figma, MeisterTask). Even with these skills obtained, I&apos;m not shy to learn more and widen my skillset!</p>
          <p className='about-me-p'>Outside of coding, you&apos;ll see me watch a good anime while also spending quality time with family and friends. I look forward to connecting with you!</p>
        </div>
      </div>

    </div>
  );
}

export default AboutMe;
