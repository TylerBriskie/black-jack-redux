import axios from 'axios';
export const NEW_GAME = 'NEW_GAME';
export const FETCH_DECK = 'FETCH_DECK';
export const DEAL_CARDSA = 'DEAL_CARDS';

export const newGameAction = () => {
    return (dispatch) => {
        axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6')
            .then(data => {
                const {deck_id} = data.data;
                axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=312`)
                    .then(deck => {
                        const { cards} = deck.data;
                        dispatch({ type: NEW_GAME, cards, })
                    });
            });
    }
};

export const dealCardsAction = () => {

};