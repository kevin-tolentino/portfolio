import React from 'react';

function ApplicationListItem(props) {
  return (
    <div className="card col-md-4">
      <img className="card-img-top app-img" src={props.demo} alt={props.name}/>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.desc}</p>
      </div>
      <div className="card-footer">
        {props.tech}
      </div>
    </div>

  );
}

function ApplicationList(props) {
  return (
    <div className="row flex-wrap">
      {props.applicationList.map(currentApp => {
        return (
          <ApplicationListItem key={currentApp.name}
            demo={currentApp.demo}
            name={currentApp.name}
            desc={currentApp.desc} gitHub={props.github}
            live={currentApp.live}
            tech={currentApp.tech}/>
        );
      })}
    </div>

  );
}

export default ApplicationList;
