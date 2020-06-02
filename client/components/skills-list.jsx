import React from 'react';

function SkillsListItem(props) {
  return (

    <div className="col-sm-2 col-md-3">
      <img src={props.image} alt={props.image}/>
    </div>

  );
}

function SkillsList(props) {
  return (
    <div className="row flex-wrap">
      {props.devIcon.map(currentIcon => {
        return (
          <SkillsListItem key={currentIcon} image={currentIcon} />
        );
      })}
    </div>

  );
}

export default SkillsList;
