import React from 'react';
import './Dealer.css';
const Dealer = (props) => {

        //
        // const buildHands = () => {
        //     return this.props.hands.map((hand) => {
        //         const cards = hand.cards.map(card => {
        //             return (<div className="card-container"><img className={`single-card`} src={card.image} /></div>)
        //         });
        //         const hardValue = hand.hardValue;
        //         const softValue = hand.softValue;
        //         const isBusted = hand.isBusted;
        //         return (
        //             <div className="player-single-hand">
        //                 {isBusted ?
        //                     (
        //                         <div className="hand=values"> <h1>BUST</h1></div>
        //                     ) :
        //                     softValue !== hardValue && softValue < 22 ?
        //                         (<div className="hand-values">
        //                                 <h1>{hardValue}</h1>
        //                                 <h1>(soft {softValue})</h1>
        //                             </div>
        //                         )
        //                         :
        //                         <div className="hand-values">
        //                             <h1>{hardValue}</h1>
        //                         </div>
        //                 }
        //                 <div className="hand-cards">
        //                     {cards}
        //                 </div>
        //
        //
        //             </div>)
        //     });
        // };
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

