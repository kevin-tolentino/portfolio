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
    <div className="app-card p-3 my-1 card col-md-3">
      <img className="card-img-top app-img" src={props.demo} alt={props.name}/>
      <div className="card-body d-flex flex-column">
        <div>
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.desc}</p>
          <div>
            <p className="text-center"><em>developed with</em></p>
            <div className="tech-item text-center">{techItems.map(currentItem => {
              return (
                <span key={currentItem}>{currentItem}</span>
              );
            })}</div></div>
        </div>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-center">
          <a className="m-1 btn btn-outline-secondary" href={props.gitHub} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="m-1 btn btn-outline-success" href={props.live} target="_blank" rel="noopener noreferrer">Live</a>
        </div>
      </div>
    </div>

  );
}

function ApplicationList(props) {
  return (
    <div className="p-4 row flex-wrap justify-content-around">
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
      {/* implement after mvp */}
      {/* <div className="p-3 my-1 mx-1 card col-md-3">
        <h1 className="card-img-top app-img" src={props.demo} alt={props.name}>Coming Soon</h1>
        <div className="card-body d-flex flex-column">
          <div>
            <h5 className="card-title">Coming Soon</h5>
            <p className="card-text">{props.desc}</p>
          </div>
          <div className="d-flex justify-content-center">
            <a disabled className="m-1 btn btn-primary" href={props.gitHub} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a disabled className="m-1 btn btn-secondary" href={props.live} target="_blank" rel="noopener noreferrer">Live</a>
          </div>
        </div>
        <div className="card-footer">
        </div>
      </div> */}
    </div>

  );
}

export default ApplicationList;
