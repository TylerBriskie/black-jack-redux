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
            console.log(this.props.id);
            this.props.hit(this.props.id);
        };

        const stay = () => {
            this.props.stay(this.props.id)
        };

        const doubleDown = () => {
            this.props.doubleDown(this.props.id)
        };

        const cardValues = {
            'JACK': 10,
            'QUEEN': 10,
            'KING': 10,
            'ACE': 'ACE',
            '10': 10,
            '9': 9,
            '8': 8,
            '7': 7,
            '6': 6,
            '5': 5,
            '4': 4,
            '3': 3,
            '2': 2,
        };

        const getHardValue = hand => {
            let value = 0;
            for (let i = 0; i< hand.cards.length; i++){
                if (hand.cards[i].value === 'ACE'){
                    value += 11;
                }
                else {
                    value += cardValues[hand.cards[i].value]
                }
            }
            if (value > 21){
                return "BUST"
            }
            return value;
        };

        const getSoftValue = hand => {
            let value = 0;
            for (let i = 0; i< hand.cards.length; i++){
                let aceCount = 0;
                if (hand.cards[i].value === 'ACE'){
                    aceCount ++;
                    if (aceCount === 0 || getHardValue(hand) + 11 > 21){
                        value += 1
                    } else {
                        value += 11
                    }
                }
                else {
                    value += cardValues[hand.cards[i].value]
                }
            }
            if (value > 21){
                return "BUST"
            }
            return value;
        };

        const buildHands = () => {
            const handCount = this.props.hands.length;
            if (handCount === 0){
                return 'no hands'
            }
            return this.props.hands.map((hand) => {
                const cards = hand.cards.map(card => {
                    return (<div className="card-container"><img className={`single-card`} src={card.image} /></div>)
                });
                const hardValue = getHardValue(hand);
                const softValue = getSoftValue(hand)
                return (
                <div className="player-single-hand">
                    <div className="hand-values">
                        {softValue !== hardValue && softValue !== "BUST" ?
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
            <div className="player-object">
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

