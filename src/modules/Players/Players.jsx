import React from 'react';
import Player from './Player/Player';

class Players extends React.Component {
    constructor(props){
        super(props);

    };

    render() {
        console.log(this.props);
        const players = this.props.players.map((player) => {
            return (<Player key={this.props.players.indexOf(player)}
                            name={player.name}
                            bankRoll = {player.bankRoll}
                            initialWager = {player.initialWager}
            />)
        });
        console.log(this.props);
        console.log(players);
        return (
            <div className="players-container">
                {players}
            </div>
        )
    }
}

export default Players;