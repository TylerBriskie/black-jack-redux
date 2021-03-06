import axios from 'axios';
import {STAY} from "../../Players/actions/playersActions";
import {getValues} from "../helpers/gameLogic";
export const NEW_GAME = 'NEW_GAME';
export const FETCH_DECK = 'FETCH_DECK';
export const DEAL_CARD= 'DEAL_CARD';
export const PAUSE_GAME = 'PAUSE_GAME';
export const BUST = 'BUST';
export const CALCULATE_WINNERS = "CALCULATE_WINNERS";
export const PAYOUT_WINNERS = 'PAYOUT_WINNERS';
export const NEW_HAND = 'NEW_HAND';
export const GAME_OVER = 'GAME_OVER';

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
                                ? 'DEALER' : i>=numberOfPlayers ? players[i%numberOfPlayers].id : players[i].id;
                            const card = cards.pop();
                            dispatch({ type: DEAL_CARD, card, playerId, currentHand: 0, })
                        }
                        dispatch({ type: NEW_GAME, cards, activePlayer: playerOneId })
                    });
            });
    }
};

export const dealerHitAction = () => {
  return (dispatch, getState) => {
      const state = getState();
      const dealer = state.game.dealer;
      const deck = state.game.deck.cards;
      const card = deck.pop();

      const hand = {cards: []};
      for (var i = 0; i<dealer.hand.cards.length; i++){
          hand.cards.push(dealer.hand.cards[i])
      }

      dispatch({
          type: DEAL_CARD,
          playerId: 'DEALER',
          card,
          currentHand: 0,
          deck,
      })

  }
};

// export const dealerStayAction = score => {
//     return (dispatch, getState) => {
//         const state = getState();
//         const players = state.players.players;
//         dispatch({
//             type: CALCULATE_WINNERS,
//             dealerScore: score,
//             players,
//         })
//     }
// };

// export const dealerBustAction = () => {
//     calculateWinners("BUST");
    // return (dispatch, getState) => {
    //     const state = getState();
    //     const players = state.players.players;
    //     dispatch({
    //         type: CALCULATE_WINNERS,
    //         dealerScore: "BUST",
    //         players,
    //     })
    // }
// };
export const hitAction = (playerId, currentHand) => {
    return (dispatch, getState) => {
        const state = getState();
        const players = state.players.players;
        const player = players.find(player => player.id === playerId);

        const hand = {cards: []};
        for (var i = 0; i<player.hands[currentHand].cards.length; i++){
            hand.cards.push(player.hands[currentHand].cards[i])
        }
        const deck = state.game.deck.cards;
        const card = deck.pop();
        hand.cards.push(card);
        const {busted} = getValues(hand);

        if (busted){
            const currentPlayerIndex = players.indexOf(player);
            let nextPlayerId;
            if (players.length === currentPlayerIndex +1){
                nextPlayerId = 'DEALER';
            } else {
                nextPlayerId = players[currentPlayerIndex+1].id;
            }
            dispatch({
                type: BUST,
                playerId,
                card,
                currentHand,
                deck,
                nextPlayerId
            })
        } else {
            dispatch({
                type: DEAL_CARD,
                playerId,
                card,
                currentHand,
                deck,
            })
        }
    }
};

export const stayAction = (playerId, currentHand) => {
    return (dispatch, getState) => {
        const state = getState();
        const players = state.players.players;
        const currentPlayer = players.find(player => player.id === playerId);
        const currentPlayerIndex = players.indexOf(currentPlayer);
        let nextPlayerId;
        if (players.length === currentPlayerIndex +1){
            nextPlayerId = 'DEALER';
        } else {
            nextPlayerId = players[currentPlayerIndex+1].id;
        }

        dispatch({
            type: STAY,
            playerId,
            nextPlayerId
        })
    }
};

export const payWinnersAction = () => {
  return (dispatch, getState) => {
      const state = getState();
      console.log(state);

      dispatch({
          type: PAYOUT_WINNERS
      })
  }
};


export const pauseGameAction = () => ({
   type: PAUSE_GAME,
});

export const newHandAction = () => ({
    type: NEW_HAND,
});

export const calculateWinnersAction = (dealerScore) => {
    return (dispatch, getState) => {
    const state = getState();
    const players = state.players.players;
    players.forEach(player => {
        player.hands.forEach(hand => {
            hand.handWins = false;
            hand.handPushes = false;
            if (dealerScore === "BUST"){
                if (!hand.isBusted){
                    hand.handWins = true;
                }
            } else {
                if (!hand.isBusted && hand.hardValue > dealerScore ) {
                    hand.handWins = true;
                }
                if (!hand.isBusted && hand.softValue === dealerScore) {
                    hand.handPushes = true;
                }
            }
        });

        dispatch({
            type: PAYOUT_WINNERS,
            playerId: player.id,
            playerName: player.name,
            hands: player.hands,
        })
    });

}
};