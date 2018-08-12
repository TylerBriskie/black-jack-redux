import { DEAL_CARD } from '../../Game/actions/gameActions';
export const NEW_PLAYER = 'NEW_PLAYER';
export const INCREASE_BET = "INCREASE_BET";
export const DECREASE_BET = "DECREASE_BET";
export const HIT = "HIT";
export const STAY = "STAY";
export const DOUBLE_DOWN = "DOUBLE_DOWN";
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

export const stayAction = id => ({
    type: STAY,
    id,
});

export const doubleDownAction = id => ({
    type: DOUBLE_DOWN,
    id,
});

export const splitAction = id => ({
    type: SPLIT,
    id,
})