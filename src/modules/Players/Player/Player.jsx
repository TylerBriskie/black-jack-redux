import React from 'react';
import './Player.css';

class Player extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currentHand: 0,
            wager: 0,
        }
    }

    render (){
        const increaseBet = () => {
          this.props.increaseBet(this.props.id);
        };

        const decreaseBet = () => {
            this.props.decreaseBet(this.props.id);
        };

        const hit = () => {
            this.props.hit(this.props.id);
        };

        const stay = () => {
            this.props.stay(this.props.id)
        };

        const doubleDown = () => {
            this.props.doubleDown(this.props.id)
        };

        return (
            <div className="player-object">
                <div className="player-header">
                    <h3>{this.props.name}</h3>
                    <h3>${this.props.bankRoll}</h3>
                </div>

                <div className="player-buttons">
                    {this.props.gameInProgress ?
                        <div className="action-button-container">
                            <button className="action-button" onClick={hit}>Hit</button>
                            <button className="action-button" onClick={stay}>Stay</button>
                            <button className="action-button" onClick={stay}>Split</button>
                            <button className="action-button" id="double-down-button" onClick={doubleDown}>Double Down</button>
                        </div>
                        :
                        <div>
                            <button className="wager-button" onClick={decreaseBet}>-</button>
                            <h4>${this.props.initialWager}</h4>
                            <button className="wager-button" onClick={increaseBet}>+</button>
                        </div>
                    }

                </div>
            </div>
        )
    }


}

export default Player;

