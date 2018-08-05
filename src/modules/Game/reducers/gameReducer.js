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
        console.log('got deck', payload);
        return {
            ...state,
            deck: payload,
            gameInProgress: true,
        }
    }
    return state;

}