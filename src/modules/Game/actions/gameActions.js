import axios from 'axios';


export const NEW_PLAYER = 'NEW_PLAYER';
export const FETCH_CARDS = 'FETCH_CARDS';
export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';
export const FETCH_CARDS_FAILURE = 'FETCH_CARDS_FAILURE';
export const NEW_GAME = 'NEW_GAME';
export const DEAL_CARD = 'DEAL_CARD';
export const DEAL_CARD_SUCCESS = 'DEAL_CARD_SUCCESS';
export const DEAL_CARD_FAILURE = 'DEAL_CARD_FAILURE';
export const HIT = 'HIT';
export const STAY = 'STAY';
export const DOUBLE_DOWN = 'DOUBLE_DOWN';
export const SPLIT = 'SPLIT';



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

export const dealACardAction = (deckId) => {
        console.log("ACTION: DEALING A CARD FOR DECK ", deckId);
        return {
        types: [DEAL_CARD, DEAL_CARD_SUCCESS, DEAL_CARD_FAILURE],
                payload: {
                        request: {
                                url: `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1
`
                        }
                }
        }
}