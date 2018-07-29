import React from 'react';
import PlayerContainer from './Player/PlayerContainer';

class Players extends React.Component {
    constructor(props){
        super(props);

    };

    render() {
        console.log(this.props);
        const players = this.props.players.map((player) => {
        return (<PlayerContainer
                    key={this.props.players.indexOf(player)}
                    id ={player.id}
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