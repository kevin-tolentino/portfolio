import React from 'react';

function ApplicationListItem(props) {
  return (

    <div className="card col-md-4">
      <div className="d-flex justify-content-center dev-icon-div">

      </div>
      <div className="text-center">

      </div>
    </div>

  );
}

function ApplicationList(props) {
  return (
    <div className="row flex-wrap">
      {props.devIcon.map(currentIcon => {
        return (
          <ApplicationListItem key={currentIcon.name} image={currentIcon} />
        );
      })}
    </div>

  );
}

export default ApplicationList;
