import React, { Component } from 'react';
import './App.scss';
import HomeBody from '../component/HomeBody/HomeBody';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <HomeBody />
      </div>
    );
  }
}

export default App;
