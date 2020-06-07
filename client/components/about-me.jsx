import React from 'react';

function AboutMe(props) {
  return (
    <div id="about-me" className="container-xl bg-secondary text-light component d-flex align-items-center">
      <div className="row py-2 align-items-center">
        <div className="p-1 col-md-5 d-flex flex-column align-items-center justify-content-around">
          <div className="my-2 d-flex justify-content-center">
            <img className="cutout" src="/images/profile-cutout-3.png" alt="Profile Cut Out"/>
          </div>
          {/* consider adding tooltips via bootstrap for these icons */}
          <div className="about-me-icons my-2 d-flex justify-content-between">
            <a className="about-icon-styling d-flex justify-content-center align-items-center" href="https://github.com/kevin-tolentino" target="_blank" rel="noopener noreferrer">
              <i className="mx-1 fab fa-github "></i>
            </a>
            <a className="about-icon-styling d-flex justify-content-center align-items-center" href="https://www.linkedin.com/in/kevinstolentino/" target="_blank" rel="noopener noreferrer">
              <i className="mx-1 fab fa-linkedin "></i>
            </a>
            <a className="about-icon-styling d-flex justify-content-center align-items-center" href="tel:562-303-7446">
              <i className="mx-1  fas fa-phone-alt"></i>
            </a>
            <a className="about-icon-styling d-flex justify-content-center align-items-center" href="mailto:kevin.tolentino95@gmail.com">
              <i className="mx-1 fas fa-envelope "></i>
            </a>
            <a className="about-icon-styling d-flex justify-content-center align-items-center" href="/images/Kevin_Tolentino_Resume.pdf" download>
              <i className="mx-1 fas fa-file-alt "></i>
            </a>
          </div>
        </div>
        <div className="p-3 col-md-7">
          <h2>About Me</h2>
          <p>Hello! My name is Kevin Tolentino, and I&apos;m a Web Developer passionate about coding, working in a team, learning new things related to code, and developing software that will help others! I also love assisting others in connecting the dots and walking alongside them as their support.</p>
          <p>I&apos;ve had the privilege of working in roles such as a Library Page, Church Youth Group Director Intern, and Data Entry Clerk. These roles developed my compassion, teamwork, and technical skills, all of which I have brought with me on this journey of being a web developer.</p>
          <p>During my time as a Full-Time Data Entry Clerk, I self-studied computer programming for two months to learn the basics of Web Development. I resigned from my job and went through an Accelerated Full Stack Web Development program at LearningFuze in Orange County. I had the pleasure of accumulating my skills in languages such as HTML5, CSS3, JavaScript, PostgreSQL, React.js, and Node.js, and I am grateful to have participated in group projects that allowed me to work collaboratively with my peers. The learning never stops, and I am always looking forward to adding new technical skills in my developer toolkit.</p>
          <p>I am your supporter, your helper, and your friend. I look forward to connecting with you!</p>
        </div>
      </div>

    </div>
  );
}

export default AboutMe;
