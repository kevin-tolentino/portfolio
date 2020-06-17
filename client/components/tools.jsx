import React from 'react';
import ToolsList from './tools-list';

const toolsImages = [{
  name: 'Github',
  path: '/images/tools/01-github-original.svg'
},
{
  name: 'VS Code',
  path: '/images/tools/02-visualstudio-plain.svg'
},
{
  name: 'npm',
  path: '/images/tools/03-npm-original-wordmark.svg'
},
{
  name: 'Webpack',
  path: '/images/tools/04-webpack-original.svg'
},
{
  name: 'Babel',
  path: '/images/tools/05-babel-original.svg'
},
{
  name: 'Figma',
  path: '/images/tools/07-figma.svg'
},
{
  name: 'AWS',
  path: '/images/tools/08-amazonwebservices-original.svg'
},
{
  name: 'Ubuntu',
  path: '/images/tools/09-ubuntu-plain.svg'
},
{
  name: 'Slack',
  path: '/images/tools/10-slack-original.svg'
}
];

function Tools(props) {
  return (
    <div className={props.background}>
      <div id="tools" className="pb-4 container component ">
        <div className="row">
          <div className="p-3 col">
            <h2>Tools</h2>
          </div>
        </div>
        <ToolsList devIcon={toolsImages} />
      </div>
    </div>
  );
}

export default Tools;
