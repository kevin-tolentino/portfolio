import React from 'react';
import ToolsList from './tools-list';

const toolsImages = [{
  name: 'JavaScript',
  path: '/images/skills/01-javascript-original.svg'
},
{
  name: 'React.js',
  path: '/images/skills/02-react-original-wordmark.svg'
},
{
  name: 'Node.js',
  path: '/images/skills/03-nodejs-original.svg'
},
{
  name: 'Express',
  path: '/images/skills/04-express-original.svg'
},
{
  name: 'PostgreSQL',
  path: '/images/skills/05-postgresql-original.svg'
},
{
  name: 'Bootstrap 4',
  path: '/images/skills/06-bootstrap-plain.svg'
},
{
  name: 'HTML 5',
  path: '/images/skills/07-html5-original.svg'
},
{
  name: 'CSS 3',
  path: '/images/skills/08-css3-original.svg'
}
];

function Tools(props) {
  return (
    <div className="container-xl bg-light">
      <div className="row">
        <div className="p-3 col">
          <h2>Tools</h2>
        </div>
      </div>
      <ToolsList devIcon={toolsImages} />
    </div>
  );
}

export default Tools;
