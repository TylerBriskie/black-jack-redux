import React from 'react';
import './Dealer.css';
const Dealer = (props) => {

    const dealerCards = props.cards.map(card => {
        return (<div className="card-container"><img className={`single-card`} src={card.image} /></div>)
    });
    console.log(props);
    return (
        <div className="dealer-object">
            <div className="dealer-header">
                <h2>Dealer</h2>
            </div>
            <div className="dealer-hand">
                {props.soft} {props.hard}
                <div className="dealer-cards">
                    {dealerCards}
                </div>
            </div>
        </div>
    )
};

export default Dealer;

