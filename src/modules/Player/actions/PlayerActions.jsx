export const NEW_PLAYER = 'NEW_PLAYER'
export const DEAL_CARD = 'DEAL_CARD';
export const DEAL_CARD_SUCCESS = "DEAL_CARD_SUCCESS";
export const DEAL_CARD_FAILURE = "DEAL_CARD_FAILURE";

export const dealCardAction = (deckId, playerId) => {
    console.log("action! dealing a card from deck ', deckId, ' to player ", playerId);
    return {
        types: [DEAL_CARD, DEAL_CARD_SUCCESS, DEAL_CARD_FAILURE],
        payload: {
            request: {
                url: `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1
`
            },
        playerTurn: playerId,
        }
    }
};


export const newPlayerAction = (name) => {
    return {type: NEW_PLAYER, name}
};