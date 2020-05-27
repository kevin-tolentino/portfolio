import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true
    };
  }
  render() {
    return (
      <h1>hello!</h1>
    )
  }
}
