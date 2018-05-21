import React, { Component } from 'react';
import './App.css';
import Header from './modules/Header/Header';
import MainMenuContainer from './modules/MainMenu/MainMenuContainer';
import GameContainer from './modules/Game/GameContainer';


class App extends Component {


  render() {

      console.log("app.js: state", this.state);


      return (
      <div className="App">
        <Header
          title="React - Jack"
          subtitle="Redux"
        />
        <GameContainer />
        <MainMenuContainer />
      </div>
    );
  }
}

export default App;
