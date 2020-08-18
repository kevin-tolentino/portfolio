import React from 'react';

class MediaSection extends React.Component {
  render() {

    return (
      <div className={this.props.background}>
        <div id="media" className="pb-4 container-xl text-white media-component">
          <div className="row">
            <div className="p-3 col">
              <h2>Media</h2>
            </div>
          </div>
          <div className="row">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/2c-5Wc2EoLU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    );
  }

}

export default MediaSection;
