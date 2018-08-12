import React from 'react';
import PlayerContainer from './Player/PlayerContainer';

class Players extends React.Component {
    constructor(props){
        super(props);

    };

    render() {
        const hit = id => {
            this.props.hit(id, 0);
        };

        const players = this.props.players.map((player) => {
        return (<PlayerContainer
                    key={this.props.players.indexOf(player)}
                    id ={player.id}
                    name={player.name}
                    hands={player.hands}
                    hit={hit}
                    bankRoll = {player.bankRoll}
                    initialWager = {player.initialWager}
            />)
        });

        return (
            <div className="players-container">
                {players}
            </div>
        )
    }
}

export default Players;