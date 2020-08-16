import React from 'react';
import Navigation from './navigation';
import AboutMe from './about-me';
import Skills from './skills';
import Tools from './tools';
import Applications from './applications';
import Contact from './contact';
import Hello from './hello';
import MediaSection from './media';

export default class App extends React.Component {

  render() {
    const firstBackground = 'bg-white';
    const secondaryBackground = 'bg-dark';

    return (
      <>
        <div className="fade-in-all">
          <Navigation />
          <Hello/>
          <AboutMe background={firstBackground}/>
          <Applications background={secondaryBackground}/>
          <Skills background={secondaryBackground}/>
          <Tools background={firstBackground} />
          <MediaSection background={secondaryBackground} />
          <Contact background={firstBackground}/>
        </div>
      </>
    );
  }
}
