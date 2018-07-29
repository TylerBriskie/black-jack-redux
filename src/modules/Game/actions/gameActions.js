import axios from 'axios';
export const NEW_GAME = 'NEW_GAME';
export const FETCH_DECK = 'FETCH_DECK';

export const newGameAction = () => {
    // return {type: NEW_GAME}
    return (dispatch) => {
        axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6')
            .then(data => {
                const {deck_id} = data.data;
                axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=312`)
                    .then(deck => {
                        const { cards} = deck.data;
                        dispatch({ type: FETCH_DECK, cards, })
                    });
            });
    }
};

export const fetchDeck = () => {
    // axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    //     .then(res => res.json())
    //     .then(deck => {
    //         dispatch({ type: FETCH_DECK, payload: deck, })
    //
    //     });
    // return (dispatch) => {
    // }
};