import {NEW_PLAYER, NEW_GAME} from "../actions/gameActions";

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
        let newPlayer = {
            name: payload.name,
            bankRoll: 500,
            hands: [],
        };
        players.push(newPlayer);
        return {
            ...state,
            players
        }
    }

    if (type === NEW_GAME){
        return state;
    }
    return state;

}