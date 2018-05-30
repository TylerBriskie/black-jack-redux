import React, { Component } from 'react';
import PlayerContainer from '../Player/PlayerContainer';
// import Dealer from '../Dealer/Dealer';
import axios from 'axios';

class Game extends Component {
    constructor(props){
        super(props);

    };

    componentDidMount(){
        // console.log("GAME MOUNTED, PROPS: ", this.props);
    }

    render() {
        console.log("PROPS: ", this.props);
        const players = this.props.players.map((player)=> {
            return (<PlayerContainer
                 key={this.props.players.indexOf(player)}
                 id={this.props.players.indexOf(player)}
                 name={player.name}
                 bankRoll = {player.bankRoll}
            />)
        });

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