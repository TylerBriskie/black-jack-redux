import { NEW_PLAYER } from "../actions/playersActions";

const initialState = {
    players: [],
};

export default (state = initialState, { type, ...payload}) =>{
    if (type === NEW_PLAYER){
        console.log('adding player');
        console.log(state);
        const { players } = state;
        let newPlayer = {
            name: payload.name,
            bankRoll: 450,
            hands: [],
            initialWager: 50,
        };
        players.push(newPlayer);
        return {
            ...state,
            players
        }
    }

    return state;
}