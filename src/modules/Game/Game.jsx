import React, { Component } from 'react';
import Player from '../Players/Player/Player';
import PlayersContainer from '../Players/PlayersContainer';
// import Dealer from '../Dealer/Dealer';
import axios from 'axios';

class Game extends Component {
    constructor(props){
        super(props);

    };

    render() {
        return (
            <div className="game-container">
                <div className="dealer-container">

                </div>
                <PlayersContainer players={this.props.players.map(player=>( player ))}/>
            </div>
        );
    }
}

export default Game;