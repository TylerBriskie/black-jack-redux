import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Player from '../Player/Player';
// import Dealer from '../Dealer/Dealer';


class Game extends Component {
    constructor(){
        super();

    };

    render() {
        return (
            <div className="game-container">
                <div className="dealer-container">

                </div>
                <div className="players-container">
                    {players}
                </div>
            </div>
        );
    }
}

export default Game;