import React from 'react';
import Navigation from './navigation';
import AboutMe from './about-me';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <Navigation />
        <AboutMe />
      </>
    );
  }
}
