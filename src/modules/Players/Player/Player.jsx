import React from 'react';
import './Player.css';
import { getHardValue, getSoftValue } from '../../Game/helpers/gameLogic';
class Player extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currentHand: 0,
            wager: 0,
        }
    }

    render (){

        const increaseBet = () => this.props.increaseBet(this.props.id);

        const decreaseBet = () => this.props.decreaseBet(this.props.id);

        const hit = () => this.props.hit(this.props.id, 0);

        const bust = () => this.props.bust(this.props.id, 0);

        const stay = () => this.props.stay(this.props.id, 0);

        const doubleDown = () => this.props.doubleDown(this.props.id);

        const buildHands = () => {
            const handCount = this.props.hands.length;
            if (handCount === 0){
                return 'no hands'
            }

            return this.props.hands.map((hand) => {
                const cards = hand.cards.map(card => {
                    return (<div className="card-container"><img className={`single-card`} src={card.image} /></div>)
                });
                const hardValue = hand.hardValue;
                const softValue = hand.softValue;
                return (
                <div className="player-single-hand">
                    <div className="hand-values">
                        {softValue !== hardValue ?
                            (<div className="hand-values">
                                    <h1>{hardValue}</h1>
                                    <h1>(soft {softValue})</h1>
                                </div>
                            )

                            :<div className="hand-values">
                                <h1>{hardValue}</h1>
                            </div>
                        }
                    </div>
                    <div className="hand-cards">
                        {cards}
                    </div>


                </div>)
            });
        };

        return (
            <div className={this.props.playerActive ? "player-object active-player": "player-object"}>
                <div className="player-header">
                    <h3>{this.props.name}</h3>
                    <h3>${this.props.bankRoll}</h3>
                </div>
                <div className="player-hands">
                    {buildHands()}
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

