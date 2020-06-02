import React from 'react';
import SkillsList from './skills-list';

const skillsImages = [
  '/images/01-javascript-original.svg',
  '/images/02-react-original-wordmark.svg',
  '/images/03-nodejs-original.svg',
  '/images/04-express-original.svg',
  '/images/05-postgresql-original.svg',
  '/images/06-bootstrap-plain.svg',
  '/images/07-html5-original.svg',
  '/images/08-css3-original.svg'

];

function Skills(props) {
  return (
    <div className="container-xl bg-light">
      <div className="row">
        <div className="p-3 col">
          <h2>Technical Skills</h2>
        </div>
      </div>
      <SkillsList devIcon={skillsImages} />
    </div>
  );
}

export default Skills;
