import React from 'react';

function ToolsListItem(props) {
  return (

    <div className="col-6 col-md-4">
      <div className="d-flex justify-content-center dev-icon-div">
        <img className="dev-icon" src={props.image.path} alt={props.image.name}/>
      </div>
      <div className="text-center">
        <h6>{props.image.name}</h6>
      </div>
    </div>

  );
}

function ToolsList(props) {
  return (
    <div className="row flex-wrap">
      {props.devIcon.map(currentIcon => {
        return (
          <ToolsListItem key={currentIcon.name} image={currentIcon} />
        );
      })}
    </div>

  );
}

export default ToolsList;
