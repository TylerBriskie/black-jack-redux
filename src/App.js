import React, { Component } from 'react';
import './App.css';
import Header from './modules/Header/Header';
import MainMenu from './modules/MainMenu/MainMenu';
import Game from './modules/Game/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          title="React - Jack"
          subtitle="Redux"
        />
        <Game />
        <MainMenu />
      </div>
    );
  }
}

export default App;
