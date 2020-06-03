import React from 'react';
import Navigation from './navigation';
import AboutMe from './about-me';
import Skills from './skills';
import Tools from './tools';

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
        <Skills />
        <Tools />
      </>
    );
  }
}
