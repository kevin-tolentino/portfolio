import React from 'react';
import LazyLoad from 'react-lazyload';

function SkillsListItem(props) {
  return (
    <LazyLoad height={'100%'} offset={100} once>
      <div className="fade-in-opacity col-6 col-md-4">
        <div className="d-flex justify-content-center dev-icon-div">
          <img className="dev-icon" src={props.image.path} alt={props.image.name}/>
        </div>
        <div className="text-center">
          <h6>{props.image.name}</h6>
        </div>
      </div>
    </LazyLoad>

  );
}

function SkillsList(props) {
  return (
    <div className="row flex-wrap">
      {props.devIcon.map(currentIcon => {
        return (
          <SkillsListItem key={currentIcon.name} image={currentIcon} />
        );
      })}
    </div>

  );
}

export default SkillsList;
