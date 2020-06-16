import React from 'react';
import LazyLoad from 'react-lazyload';

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
    <div className="app-card p-1 my-1 card col-md-3">
      <LazyLoad height={'100%'} offset={100} once>
        <a href={props.live} target="_blank" rel="noopener noreferrer"><img className="fade-in-opacity card-img-top app-img" src={props.demo} alt={props.name}/></a>
      </LazyLoad>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-center">{props.name}</h5>
        <p className="card-text text-center">{props.desc}</p>
        <div className="d-flex justify-content-center">
        </div>
      </div>
      <div className="card-footer card-footer-height">
        <div className='d-flex justify-content-center flex-column'>
          <div className='d-flex justify-content-center'>
            <a className="m-1 btn btn-outline-secondary" href={props.gitHub} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="m-1 btn btn-outline-success" href={props.live} target="_blank" rel="noopener noreferrer">Live</a>
          </div>
          <div>
            <div className="tech-item text-center"><em>developed with</em> <br/>{techItems.map(currentItem => {
              return (
                <span key={currentItem}>{currentItem}</span>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ApplicationList(props) {
  return (
    <div className="p-4 row flex-wrap justify-content-between text-dark">
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
      <div className="app-card p-1 my-1 card col-md-3">
        <LazyLoad height={'100%'} offset={100} once>
          <img className="fade-in-opacity card-img-top app-img" src="/images/app-images/coming-soon.jpg" alt="Coming Soon Picture" />
        </LazyLoad>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-center">Coming Soon!</h5>
          <p className="card-text"></p>
          <div className="d-flex justify-content-center">
          </div>
        </div>
        <div className="card-footer card-footer-height">
          <div className='d-flex justify-content-center flex-column'>
            <div className='d-flex justify-content-center'>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ApplicationList;
