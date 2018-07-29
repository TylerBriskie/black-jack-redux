import React, { Component } from 'react';
import './App.css';
import Header from './modules/Header/Header';
import GameContainer from './modules/Game/GameContainer';


class App extends Component {
  render() {

    return (
      <div className="App">
        <Header
          title="React - Jack"
          subtitle="Redux"
        />
        <GameContainer />
      </div>
    );
  }
}

export default App;
