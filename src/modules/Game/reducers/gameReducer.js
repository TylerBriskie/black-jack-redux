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
        console.log("ADDING NEW PLAYER", payload);
        console.log("state:" , state);
        const { players } = state;
        console.log(players);
        let newPlayer = {
            name: payload.name,
            bankRoll: 500,
            hands: [],
        };
        console.log(newPlayer);
        players.push(newPlayer);
        console.log(players);
        return {
            ...state,
            players
        }
    }

    if (type === NEW_GAME){
        console.log("NEW GAME!!!!!!!")
        console.log(state);
    }
    return state;

}