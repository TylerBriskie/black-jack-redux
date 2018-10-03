import React from 'react';
import "./PayoutModal.css";

const PayoutModal = (props) => {
    console.log(props);
    const dealerBust = props.dealer.hand.isBusted;
    const headline = dealerBust ? "Dealer Busts!" : "Dealer Wins!";
    const winners = props.players.players.map(player => {
        console.log(player)
        if (player.hands.length === 1){
            return (
                player.hands[0].handWins ?
                    <h2>{player.name} wins!</h2>
                    : player.hands[0].handPushes ?
                        <h2>{player.name} pushes.</h2> :
                        <h2>{player.name} loses...</h2>
            )
        } else {
            console.log('multicple hands found.  Payout logic not yet implemented.');
        }

    });
    return (
        <div className="payout-modal">
            <h1>{headline}</h1>
            {winners}
            <button className="btn new-hand-button" onClick={props.playAgain}>
                Play Again
            </button>
        </div>

    )

};

export default PayoutModal;