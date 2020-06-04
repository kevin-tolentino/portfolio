import React from 'react';
import ApplicationList from './applications-list';

const applicationList = [
  {
    name: 'Itinize',
    desc: 'Itinize is a full-stack web application for travelers who want to organize their travel plans.',
    tech: ['React.js', 'React Router', 'Node.js', 'Express', 'PostgreSQL'],
    demo: '/images/app-images/itinize-demo.gif',
    gitHub: 'https://github.com/helen-choi/itinize',
    live: 'https://itinize.kevintolentino.com/'
  },
  {
    name: 'Succulent Sales',
    desc: 'A full stack Node.js and React shopping cart app for succulent products.',
    tech: ['React.js', 'Webpack', 'Node.js', 'Express', 'PostgreSQL', 'Bootstrap 4'],
    demo: '/images/app-images/succulent-demo.gif',
    gitHub: 'https://github.com/kevin-tolentino/succulent-sales-js',
    live: 'https://succulent-sales.kevintolentino.com/'
  },
  {
    name: 'Peace COVID-19 Tracker',
    desc: 'A web application that displays recent COVID-19 case data and daily Bible Verses API data.',
    tech: ['jQuery (AJAX)', 'JavaScript', 'CSS3', 'HTML5', 'Bootstrap 4'],
    demo: '/images/app-images/peace-covid19-demo.gif',
    gitHub: 'https://github.com/kevin-tolentino/peace-covid19-tracker',
    live: 'https://peace-covid19-tracker.kevintolentino.com/'
  }];

function Applications(props) {
  return (
    <div className="pb-4 container-xl bg-light component">
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
