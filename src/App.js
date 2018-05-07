import React, { Component } from 'react';
import './App.css';
import './modules/Header/header.css';
import Header from './modules/Header/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          title="React - Jack"
          subtitle="Redux"
        />
      </div>
    );
  }
}

export default App;
