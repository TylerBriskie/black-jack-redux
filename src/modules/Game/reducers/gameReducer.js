import {
    NEW_PLAYER,
    NEW_GAME,
    FETCH_CARDS_SUCCESS,
    FETCH_CARDS_FAILURE,
    DEAL_CARD_SUCCESS,
    DEAL_CARD_FAILURE,
} from "../actions/gameActions";
import axios from 'axios';


const initialState = {
    gameInProgress: false,
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
    if (type === FETCH_CARDS_SUCCESS){
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
    // if (type === DEAL_CARD_SUCCESS){
    //     console.log("dealing card: ", payload)
    //     console.log(state);
    //     let currentPlayerId = state.playerTurn;
    //     let currentHand = 0;
    //     let playerHand = state.players[currentPlayerId].hands[currentHand];
    //     return {
    //         ...state}
    // }
    if (type === DEAL_CARD_FAILURE){
        console.log("FAILURE DEALING A CARD, payload: ", payload);
        return {
            ...state
        }
    }

    return state;

}