import {
    NEW_PLAYER,
    NEW_GAME,
    FETCH_CARDS_SUCCESS,
    FETCH_CARDS_FAILURE
} from "../actions/gameActions";
import axios from 'axios';


const initialState = {
    gameInProgress: false,
    players: [],
    dealer: {
      hand: [],
      score: 0,
      hasBlackjack: false,
    },
    deck: {
    },
    playerTurn: 0,
};

export default (state = initialState, { type, ...payload}) =>{
    if (type === NEW_PLAYER){
        if (payload.name === ''){
            alert("Player Name must not be blank")
            return state
        }
        const { players } = state;
        let newPlayer = {
            id: players.length,
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
        console.log("new game (reducer)")
        return state

    }
    if (type === FETCH_CARDS_SUCCESS){
        console.log("whoa, api call sucessful");
        console.log("payload from API: ", payload);
        return {
            ...state,
            deck: {
                ...state.deck,
                id: payload.payload.data.deck_id
            }
        }
    }
    if (type === FETCH_CARDS_FAILURE){
        console.log("Fetching cards failed, payload: ", payload);
        return {
            state
        }
    }
    return state;

}