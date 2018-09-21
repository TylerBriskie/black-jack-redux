import React from 'react';
import './Dealer.css';
class Dealer extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidUpdate(){
        console.log(this.props);
        if (this.props.busted){
            this.props.dealerBusts();
        } else if (this.props.dealerTurn && this.props.hardValue < 17){
            this.props.dealerHit();
        } else if (this.props.dealerTurn && !this.props.busted) {
            this.props.dealerStay(this.props.hardValue);
        }
    }


    render () {
        const dealerCards = this.props.cards.map(card => {
            return (<div className="card-container"><img className={`single-card`} src={card.image} /></div>)
        });

        return (
            <div className="dealer-object">
                <div className="dealer-header">
                    <h2>Dealer</h2>
                </div>
                <div className="dealer-hand">
                    {this.props.hardValue}
                    <div className="dealer-cards">
                        {dealerCards}
                    </div>
                </div>
            </div>
        )
    }
};

export default Dealer;

