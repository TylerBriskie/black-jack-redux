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

    componentDidMount(){
        console.log('rendering player', this.props);
    }

    render (){

        const increaseBet = () => this.props.increaseBet(this.props.id);

        const decreaseBet = () => this.props.decreaseBet(this.props.id);

        const hit = () => this.props.hit(this.props.id, 0);

        const stay = () => this.props.stay(this.props.id, 0);

        // const bust = () => this.props.bust(this.props.id, 0);

        const doubleDown = () => this.props.doubleDown(this.props.id);

        const buildHands = () => {
            const handCount = this.props.hands.length;
            if (handCount === 0){
                return
            }

            return this.props.hands.map((hand) => {
                const cards = hand.cards.map(card => {
                    return (<div className="card-container"><img className={`single-card`} src={card.image} /></div>)
                });
                const hardValue = hand.hardValue;
                const softValue = hand.softValue;
                const isBlackjack = hand.isBlackjack;
                const isBusted = hand.isBusted;
                const score = hand.score;
                return (
                <div className="player-single-hand">
                        {isBusted ?
                            (
                                <div className="hand-values">
                                    <h1>BUST</h1>
                                </div>
                            ) :
                                <div className="hand-values">
                                    <h1>{score}</h1>
                                </div>
                        }
                    <div className="hand-cards">
                        {cards}
                    </div>
                </div>)
            });
        };

        return (
            <div className={this.props.playerActive ? "player-object active-player": "player-object"}>
                <div className="player-header">
                    <h1 className="player-name">{this.props.name}</h1>
                    <h3>${this.props.bankRoll}</h3>
                </div>
                <div className="player-hands">
                    {buildHands()}
                </div>
                <div className="player-buttons">
                    {!this.props.placeYourBets ?
                        this.props.playerTurn === this.props.id ?
                            <div className="action-button-container">
                                <button className="action-button" onClick={hit}>Hit</button>
                                <button className="action-button" onClick={stay}>Stay</button>
                                <button className="action-button" onClick={stay}>Split</button>
                                <button className="action-button" id="double-down-button" onClick={doubleDown}>Double Down</button>
                            </div>
                            :
                            null
                        :
                        <div className="wager-button-container">
                            <h3>Place Your Bets</h3>
                            <div>
                                <button className="wager-button" onClick={decreaseBet}>-</button>
                                <h4>${this.props.initialWager}</h4>
                                <button className="wager-button" onClick={increaseBet}>+</button>
                            </div>
                        </div>
                    }

                </div>
            </div>
        )
    }


}

export default Player;

