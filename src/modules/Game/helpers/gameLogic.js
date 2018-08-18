
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

export const getValues = hand => {
    let value = {
        soft: 0,
        hard: 0,
        busted: false,
    };
    let aceCount = 0;
    for (let i = 0; i< hand.cards.length; i++){
        if (hand.cards[i].value === 'ACE'){
            aceCount++;
        } else {
            value.hard += cardValues[hand.cards[i].value];
            value.soft += cardValues[hand.cards[i].value];
        }
    }
    for (let j = 0; j < aceCount; j++){
        if (value.hard < 11){
            value.hard += 1;
            value.soft += 11;
        } else {
            value.soft += 11;
            value.hard += 1;
        }
    }
    if (value.hard > 21){
        value.busted = true;
    }
    return value;
};