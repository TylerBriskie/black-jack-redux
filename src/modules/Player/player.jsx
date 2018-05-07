import React from 'react';
import PropTypes from 'prop-types';
import './player.css';

const propTypes = {

};

class Player extends React.Component {
  componentDidMount() {
    console.log('player component mounted');
  }

  render() {

    return (
      <div className="player-container">
        <p>Player Component</p>
        {/*<Hand />*/}
        {/*<Score />*/}
        {/*<Wager />*/}
      </div>
    )
  }
}

export default Player;