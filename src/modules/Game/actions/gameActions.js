import axios from 'axios';


export const NEW_PLAYER = 'NEW_PLAYER';
export const FETCH_CARDS = 'FETCH_CARDS';
export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';
export const FETCH_CARDS_FAILURE = 'FETCH_CARDS_FAILURE';
export const NEW_GAME = 'NEW_GAME';
export const HIT = 'HIT';
export const STAY = 'STAY';
export const DOUBLE_DOWN = 'DOUBLE_DOWN';
export const SPLIT = 'SPLIT';


export const newPlayerAction = (name) => {
        return {type: NEW_PLAYER, name}
};

export function fetchCardsAction(){
        return {
                types: [FETCH_CARDS, FETCH_CARDS_SUCCESS, FETCH_CARDS_FAILURE],
                payload: {
                        request: {
                                url: `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6`
                        }
                }
        }
}

// export const fetchCardsAction = () => {
//         return {type: NEW_GAME}
// };