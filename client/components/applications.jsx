import React from 'react';

function Applications(props) {
  return (
    <div className="pb-4 container-xl bg-light">
      <div className="row">
        <div className="p-3 col">
          <h2>Technical Skills</h2>
        </div>
      </div>
      <SkillsList devIcon={skillsImages} />
    </div>
  );
}

export default Applications;
