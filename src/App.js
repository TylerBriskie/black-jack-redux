import React, { Component } from 'react';
import './App.css';
import Header from './modules/Header/Header';
import MainMenu from './modules/MainMenu/MainMenu';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          title="React - Jack"
          subtitle="Redux"
        />
        <MainMenu />
      </div>
    );
  }
}

export default App;
