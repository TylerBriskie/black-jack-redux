import axios from 'axios';
export const NEW_GAME = 'NEW_GAME';
export const FETCH_DECK = 'FETCH_DECK';
export const DEAL_CARD= 'DEAL_CARD';
export const PAUSE_GAME = 'PAUSE_GAME';

export const newGameAction = (players, deckCount) => {
    return (dispatch, getState) => {
        const state = getState();
        console.log(state.players.players);
        const playerOneId = state.players.players[0].id;
        console.log("PLAYER ONE ID: ", playerOneId);
        axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${deckCount}`)
            .then(data => {
                const {deck_id} = data.data;
                axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${deckCount*52}`)
                    .then(deck => {
                        const { cards} = deck.data;
                        const numberOfPlayers = players.length + 1;
                        for (var i = 0; i<numberOfPlayers*2; i++){
                            const playerId = i === numberOfPlayers-1 || i=== numberOfPlayers*2-1
                                ? 'dealer' : i>=numberOfPlayers ? players[i%numberOfPlayers].id : players[i].id;
                            const card = cards.pop();
                            dispatch({ type: DEAL_CARD, card, playerId, currentHand: 0, })
                        }
                        dispatch({ type: NEW_GAME, cards, activePlayer: playerOneId })
                    });
            });
    }
};

export const pauseGameAction = () => ({
   type: PAUSE_GAME,
});
