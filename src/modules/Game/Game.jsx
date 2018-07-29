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
        const players = this.props.players.map((player)=> {
            return (<Player key={this.props.players.indexOf(player)}
                     name={player.name}
                     bankRoll = {player.bankRoll}
            />)
        });

        return (
            <div className="game-container">
                <div className="dealer-container">

                </div>
                <PlayersContainer players={players}/>
            </div>
        );
    }
}

export default Game;