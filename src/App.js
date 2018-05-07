import React, { Component } from 'react';
import './App.css';
import './modules/Header/header.css';
import Header from './modules/Header/header';
import Game from './modules/Game/game';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          title="React - Jack"
          subtitle="Redux"
        />
        <Game />
      </div>
    );
  }
}

export default App;
