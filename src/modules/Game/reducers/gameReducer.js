import {NEW_PLAYER, NEW_GAME} from "../actions/gameActions";
import axios from 'axios';


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
        let deckId = '';
        let deck = [];
        const request = axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6').then(res=>{
            console.log(res.data);
            deckId = res.data.deck_id;
        }).then(()=> {
            console.log(deckId);
           deck = axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=312`);

        });

        return {
            ...state,
            deck
        };
    }
    return state;

}