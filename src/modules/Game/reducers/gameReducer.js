import {DEAL_CARD, GAME_OVER, NEW_GAME, PAUSE_GAME, CALCULATE_WINNERS, PAYOUT_WINNERS, NEW_HAND} from "../actions/gameActions";
import {BUST, STAY} from '../../Players/actions/playersActions';
import {getValues} from "../helpers/gameLogic";

const initialState = {
    gamePaused: false,
    gameInProgress: false,
    placeYourBets: true,
    payingOutWinners: false,
    gameOver: false,
    playerTurn: 0,
    dealer: {
        hand: {
            cards: [],
            score: 0,
            softValue: 0,
            hardValue: 0,
            isBusted: false,
        },
        hasBlackjack: false,
    },
    deck: [],
};

export default (state = initialState, { type, ...payload}) =>{
    if (type === NEW_HAND) {
        console.log('new hand!');
        return {
            ...state,
            payingOutWinners: false,
            placeYourBets: true,
            playerTurn: 0,
            dealer: {
                hand: {
                    cards: [],
                    score: 0,
                    softValue: 0,
                    hardValue: 0,
                    isBusted: false,
                },
                hasBlackjack: false,
            },

        }
    }

    if (type === NEW_GAME){
        console.log('got deck', payload);
        const { cards, activePlayer } = payload;
        return {
            ...state,
            deck: { cards: cards},
            gameInProgress: true,
            placeYourBets: false,
            playerTurn: activePlayer,
        }
    }
    if (type === DEAL_CARD){
        if (typeof payload.playerId === "number"){
            return state;
        }
        const { dealer } = state;
        const hand = dealer.hand;
        hand.cards.push(payload.card);
        const values = getValues(hand);
        hand.score = values.score;
        hand.softValue = values.soft;
        hand.hardValue = values.hard;
        hand.isBusted = values.busted;
        hand.isBlackjack = values.isBlackjack;
        return {
            ...state,
            dealer: {
                hand,
            }
        }
    }

    if (type === BUST){
        return {
            ...state,
            playerTurn: payload.nextPlayerId,
        }
    }

    if (type === PAUSE_GAME){
        const {gamePaused} = state;
        return {
            ...state,
            gamePaused: !gamePaused,
        }
    }

    if (type === STAY){
        return {
            ...state,
            playerTurn: payload.nextPlayerId,
        }
    }

    if (type === CALCULATE_WINNERS){
        console.log("CALCULATING");
        console.log(payload);
        let payout = {};
        let winningHands = [];
        let pushHands = [];
        payload.players.forEach(player => {
            console.log(player);
            player.hands.forEach(hand => {
                console.log(hand);
                if (payload.dealerScore === "BUST"){
                    console.log('dealer busts');
                    if (!hand.isBusted){
                        winningHands.push(hand);
                    }
                } else {
                    console.log('dealer stays, score: ', payload.dealerScore);
                    if (!hand.isBusted && hand.hardValue > payload.dealerScore ) {
                        winningHands.push(hand);
                    }
                    if (!hand.isBusted && hand.softValue === payload.dealerScore) {
                        pushHands.push(hand);
                    }
                }
            });

        });
        console.log("win:", winningHands);
        console.log("push:", pushHands);

        return {
            ...state,
            payingOutWinners: true,
        }
    }

    if (type === PAYOUT_WINNERS){
        console.log(payload);
        return {
            ...state,
            payingOutWinners: true,
        }
    }

    if (type === GAME_OVER){
        console.log('game over man');
        return {
            ...state,
            gameOver: true,
        }
    }
    return state;

}