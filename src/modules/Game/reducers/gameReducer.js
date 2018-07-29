import { NEW_GAME, FETCH_DECK } from "../actions/gameActions";

const initialState = {
    gameInProgress: false,
    dealer: {
      hand: [],
      score: 0,
      hasBlackjack: false,
    },
    deck: [],
};

export default (state = initialState, { type, ...payload}) =>{
    if (type === NEW_GAME){
        return {
            ...state,
            gameInProgress: true,
        };
    }

    if (type === FETCH_DECK){
        console.log('got deck', payload);
        return {
            ...state,
            deck: payload,
        }
    }
    return state;

}