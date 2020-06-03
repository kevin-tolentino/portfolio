import React from 'react';

function ApplicationListItem(props) {
  const techItems = [];
  for (let techIterator = 0; techIterator < props.tech.length; techIterator++) {
    if (techIterator === props.tech.length - 1) {
      techItems.push(props.tech[techIterator]);
    } else {
      techItems.push(props.tech[techIterator] + ', ');
    }
  }

  return (
    <div className="p-3 card col-md-4">
      <img className="card-img-top app-img" src={props.demo} alt={props.name}/>
      <div className="card-body d-flex flex-column">
        <div>
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.desc}</p>
        </div>
        <div className="d-flex justify-content-center">
          <a className="m-1 btn btn-primary" href={props.gitHub} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="m-1 btn btn-secondary" href={props.live} target="_blank" rel="noopener noreferrer">Live</a>
        </div>
      </div>
      <div className="card-footer">
        {techItems}
      </div>
    </div>

  );
}

function ApplicationList(props) {
  return (
    <div className="p-4 row flex-wrap">
      {props.applicationList.map(currentApp => {
        return (
          <ApplicationListItem key={currentApp.name}
            demo={currentApp.demo}
            name={currentApp.name}
            desc={currentApp.desc}
            gitHub={currentApp.gitHub}
            live={currentApp.live}
            tech={currentApp.tech}/>
        );
      })}
    </div>

  );
}

export default ApplicationList;
