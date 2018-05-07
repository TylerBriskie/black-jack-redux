import React from 'react';
import PropTypes from 'prop-types';
import './game.css';
import Player from '../Player/player';

const propTypes = {

};

class Game extends React.Component {

  componentDidMount() {
    console.log('game component mounted');
  }

  render() {

    return (
      <div className="game-container">
        <Player />
      </div>
    )
  }
}

export default Game;