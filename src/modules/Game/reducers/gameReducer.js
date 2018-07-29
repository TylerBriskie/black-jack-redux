import { NEW_GAME} from "../actions/gameActions";

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


    return {...state};

}