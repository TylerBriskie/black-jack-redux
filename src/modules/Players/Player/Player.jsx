import React from 'react';
import './Player.css';

class Player extends React.Component {

    constructor(props){
        super(props)

    }

    render (){
        const increaseBet = () => {
          this.props.increaseBet(this.props.id);
        };

        const decreaseBet = () => {
            this.props.decreaseBet(this.props.id);
        };
        return (
            <div className="player-object">
                <div className="player-header">
                    <h3>{this.props.name}</h3>
                    <h3>${this.props.bankRoll}</h3>
                </div>

                <div className="player-buttons">
                    <button className="wager-button" onClick={decreaseBet}>-</button>
                    <h4>${this.props.initialWager}</h4>
                    <button className="wager-button" onClick={increaseBet}>+</button>
                </div>
            </div>
        )
    }


}

export default Player;

