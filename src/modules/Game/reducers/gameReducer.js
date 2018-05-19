import {NEW_PLAYER} from "../actions/gameActions";

const initialState = {
    gameInProgress: false,
    players: [],
    dealer: {
      hand: [],
      score: 0,
      hasBlackjack: false,
    },
    deck: [],
};

export default (state = initialState, { type, ...payload}) =>{
    if (type === NEW_PLAYER){
        const { players } = state;
        const newPlayer = {
            name: payload.name,
            bankRoll: 500,
        }
        players.concat(newPlayer);
        return {
            ...state,
            players
        }

    }

}