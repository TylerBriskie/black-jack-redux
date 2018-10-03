import React from 'react';
import './Dealer.css';
import cardBack from "../../assets/images/PlayingCardBack.png";
class Dealer extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidUpdate(){
        console.log(this.props);
        if (this.props.busted){
            this.props.dealerBusts();
        } else if (this.props.dealerTurn && this.props.score < 17){
            this.props.dealerHit();
        } else if (this.props.dealerTurn && !this.props.busted) {
            this.props.dealerStay(this.props.score);
        }
    }


    render () {
        const dealerCards = this.props.cards.map(card => {
            if (card === this.props.cards[0]){
                return (<div className="card-container"><img className="card-back" src={cardBack} /></div>)
            }
            return (<div className="card-container"><img className={`single-card`} src={card.image} /></div>)
        });

        return (
            <div className="dealer-object">
                <div className="dealer-header">
                    <h2>Dealer</h2>
                </div>
                <div className="dealer-hand">
                    {this.props.dealerTurn ? this.props.score : null}
                    <div className="dealer-cards">
                        {dealerCards}
                    </div>
                </div>
            </div>
        )
    }
};

export default Dealer;

