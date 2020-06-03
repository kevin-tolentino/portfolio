import React from 'react';
import ApplicationList from './applications-list';

const applicationList = [{
  name: 'Itinize',
  desc: 'Itinize is a full-stack web application for travelers who want to organize their travel plans.',
  tech: ['React.js', 'React Router', 'Node.js', 'Express', 'PostgreSQL'],
  demo: '/images/app-images/peace-covid19-demo.gif',
  gitHub: 'https://github.com/helen-choi/itinize',
  live: 'https://itinize.kevintolentino.com/'
}];

function Applications(props) {
  return (
    <div className="pb-4 container-xl bg-light">
      <div className="row">
        <div className="p-3 col">
          <h2>Applications</h2>
        </div>
      </div>
      <ApplicationList applicationList={applicationList}/>
    </div>
  );
}

export default Applications;
