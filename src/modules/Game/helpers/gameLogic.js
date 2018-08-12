
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

export const getSoftValue = hand => {
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
    return value;
};

export const getHardValue = hand => {
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
        // this.props.bust(this.props.id);
        return "BUST"
    }
    return value;
};