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
        const stay = id => this.props.stay(id, 0);
        const bust = id => this.props.bust(id, 0);
        const activePlayer = this.props.playerTurn;
        const players = this.props.players.map((player) => {
        return (<PlayerContainer
                    key={this.props.players.indexOf(player)}
                    id ={player.id}
                    name={player.name}
                    hands={player.hands}
                    hit={hit}
                    stay={stay}
                    bust={bust}
                    bankRoll = {player.bankRoll}
                    initialWager = {player.initialWager}
                    playerActive = {activePlayer === player.id }
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