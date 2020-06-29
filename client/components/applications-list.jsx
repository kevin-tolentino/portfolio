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
    <div className="col-12 col-md-6 col-lg-4">
      <div className="p-1 my-1 card ">
        <div className="card-body d-flex flex-column">
          <LazyLoad height={'100%'} offset={300} once>
            <a href={props.live} target="_blank" rel="noopener noreferrer"><img className="fade-in-opacity card-img-top" src={props.demo} alt={props.name}/></a>
          </LazyLoad>
          <h5 className="mt-4 card-title text-center">{props.name}</h5>
          <p className="card-text text-center">{props.desc}</p>
          <div className="d-flex justify-content-center">
          </div>
        </div>
        <div className="card-footer card-footer-height">
          <div className='d-flex justify-content-center flex-column'>
            <div className='d-flex justify-content-center'>
              <a className="m-1 btn btn-outline-secondary" href={props.gitHub} target="_blank" rel="noopener noreferrer"><i className="mx-1 fab fa-github"></i>GitHub</a>
              <a className="m-1 btn btn-outline-success" href={props.live} target="_blank" rel="noopener noreferrer"><i className="mx-1 fas fa-tv"></i>Live</a>
            </div>
            <div>
              <div className="tech-item text-center"><h6>developed with</h6>
                <div>
                  {techItems.map(currentItem => {
                    return (
                      <div className="tech-item-div" key={currentItem}>
                        <span className="badge badge-pill badge-secondary">{currentItem}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
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
    </div>

  );
}

export default ApplicationList;
