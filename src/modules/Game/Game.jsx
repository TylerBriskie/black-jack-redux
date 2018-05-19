import React, { Component } from 'react';
import Player from '../Player/Player';
// import Dealer from '../Dealer/Dealer';


class Game extends Component {
    constructor(props){
        super(props);

    };


    render() {
        console.log(this.props);
        console.log(this.state);
        // const players = this.props.players.map((player)=> {
        //     (<Player id={this.props.players.indexOf(player)}
        //              name={player.name}
        //              bankRoll = {player.bankRoll}
        //     />)
        // });

        return (
            <div className="game-container">
                <div className="dealer-container">

                </div>
                <div className="players-container">
                     {/*{players}*/}
                </div>
            </div>
        );
    }
}

export default Game;