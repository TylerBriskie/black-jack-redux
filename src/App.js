import React, { Component } from 'react';
import './App.css';
import Header from './modules/Header/Header';
import MainMenu from './modules/MainMenu/MainMenu';
import Player from './modules/Player/Player';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          title="React - Jack"
          subtitle="Redux"
        />
        <div className="players-container">
            <Player />
            <Player />
            <Player />
            <Player />
        </div>
        <MainMenu />
      </div>
    );
  }
}

export default App;
