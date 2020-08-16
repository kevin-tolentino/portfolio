import React from 'react';

class MediaSection extends React.Component {
  render() {

    return (
      <div id="MediaSection" className={`${this.props.background} 'pb-4 container component`}>
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/2c-5Wc2EoLU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    );
  }

}

export default MediaSection;
