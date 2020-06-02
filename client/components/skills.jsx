import React from 'react';
import SkillsList from './skills-list';

const skillsImages = [{
  name: 'JavaScript',
  path: '/images/01-javascript-original.svg'
},
{
  name: 'React.js',
  path: '/images/02-react-original-wordmark.svg'
},
{
  name: 'Node.js',
  path: '/images/03-nodejs-original.svg'
},
{
  name: 'Express',
  path: '/images/04-express-original.svg'
},
{
  name: 'PostgreSQL',
  path: '/images/05-postgresql-original.svg'
},
{
  name: 'Bootstrap 4',
  path: '/images/06-bootstrap-plain.svg'
},
{
  name: 'HTML 5',
  path: '/images/07-html5-original.svg'
},
{
  name: 'CSS 3',
  path: '/images/08-css3-original.svg'
}
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
