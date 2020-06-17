import React from 'react';
import ApplicationList from './applications-list';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';

const applicationList = [
  {
    name: 'Itinize',
    desc: 'Itinize is a full-stack web application for travelers who want to organize their travel plans.',
    tech: ['React.js', 'React Router', 'Node.js', 'Express', 'PostgreSQL'],
    demo: '/images/app-images/itinize-demo-square-cut.gif',
    gitHub: 'https://github.com/helen-choi/itinize',
    live: 'https://itinize.kevintolentino.com/'
  },
  {
    name: 'Succulent Sales',
    desc: 'Succulent Sales is a full stack Node.js and React shopping cart app for succulent products.',
    tech: ['React.js', 'Webpack', 'Node.js', 'Express', 'Bootstrap 4', 'PostgreSQL'],
    demo: '/images/app-images/succulent-sales-square-demo.gif',
    gitHub: 'https://github.com/kevin-tolentino/succulent-sales-js',
    live: 'https://succulent-sales.kevintolentino.com/'
  },
  {
    name: 'Peace COVID-19 Tracker',
    desc: 'Peace COVID-19 Tracker is a front end web application that displays recent COVID-19 & Bible Verses API data.',
    tech: ['jQuery (AJAX)', 'JavaScript', 'CSS3', 'HTML5', 'Bootstrap 4'],
    demo: '/images/app-images/peace-covid-demo-square.gif',
    gitHub: 'https://github.com/kevin-tolentino/peace-covid19-tracker',
    live: 'https://peace-covid19-tracker.kevintolentino.com/'
  }
];

function Applications(props) {
  return (
    <div className={props.secondaryBackground}>
      <div id="applications"className="pb-4 container text-white component">
        <div className="row ">
          <div className="p-3 col">
            <h2>Applications</h2>
          </div>
        </div>
        <ApplicationList applicationList={applicationList}/>
        <div className="row">
          <div className="col d-flex justify-content-center bg-secondary">
            <GitHubCalendar username="kevin-tolentino" blockSize={13} fullYear={false}>
              <ReactTooltip delayShow={50} html />
            </GitHubCalendar>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Applications;
