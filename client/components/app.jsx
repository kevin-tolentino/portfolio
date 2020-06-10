import React from 'react';
import Navigation from './navigation';
import AboutMe from './about-me';
import Skills from './skills';
import Tools from './tools';
import Applications from './applications';
import Contact from './contact';
import Hello from './hello';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helloActive: true
    };
  }

  changeActiveFalse() {
    this.setState({ helloActive: false });
  }

  changeActiveTrue() {
    this.setState({ helloActive: false });

  }

  render() {
    return (
      <>
        <Navigation />
        <Hello changeActiveFalse={this.changeActiveFalse} changeActiveTrue={this.changeActiveTrue}/>
        <AboutMe />
        <Skills />
        <Tools />
        <Applications />
        <Contact />
      </>
    );
  }
}
