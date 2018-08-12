import { DEAL_CARD } from '../../Game/actions/gameActions';
export const NEW_PLAYER = 'NEW_PLAYER';
export const INCREASE_BET = "INCREASE_BET";
export const DECREASE_BET = "DECREASE_BET";
export const HIT = "HIT";
export const STAY = "STAY";
export const DOUBLE_DOWN = "DOUBLE_DOWN";
export const BUST = "BUST";
export const SPLIT = "SPLIT";


export const newPlayerAction = (name) => {
    return {type: NEW_PLAYER, name}
};

export const increaseBetAction = id => ({
    type: INCREASE_BET,
    id,
});

export const decreaseBetAction = id => ({
    type: DECREASE_BET,
    id,
});

export const hitAction = (id, currentHand) => {
    return (dispatch, getState) => {
        const state = getState();
        console.log('current hand: ', currentHand);
        console.log(state);
        const deck = state.game.deck.cards;
        const card = deck.pop();
        dispatch({
            type: DEAL_CARD,
            playerId: id,
            card,
            currentHand,
            deck,
        })
    }
};

export const stayAction = (id, currentHand) => {

    return (dispatch, getState) => {
        const state = getState();
        const players = state.players.players;
        const currentPlayer = players.find(player => player.id === id);
        const currentPlayerIndex = players.indexOf(currentPlayer);
        let nextPlayerId;
        if (players.length === currentPlayerIndex +1){
            nextPlayerId = 'DEALER';
        } else {
            nextPlayerId = players[currentPlayerIndex+1].id;
        }
        dispatch({
            type: STAY,
            playerId: id,
            nextPlayerId
        })
    }
};

export const doubleDownAction = id => ({
    type: DOUBLE_DOWN,
    id,
});

export const bustAction = (id, currentHand) => ({
    type: BUST,
    id,
    currentHand,
});

export const splitAction = id => ({
    type: SPLIT,
    id,
})