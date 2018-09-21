import React from 'react';
import "./PayoutModal.css";

const PayoutModal = (props) => {
    const dealerBust = props.dealer.isBusted;
    const headline = dealerBust ? "Dealer Busts!" : "Dealer Wins!";
    return (
        <div className="payout-modal">

            <h1>{headline}</h1>
        </div>

    )

};

export default PayoutModal;