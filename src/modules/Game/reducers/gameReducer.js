import {DEAL_CARD, GAME_OVER, NEW_GAME, PAUSE_GAME, PAYOUT_WINNERS} from "../actions/gameActions";
import {BUST, STAY} from '../../Players/actions/playersActions';
import {getValues} from "../helpers/gameLogic";

const initialState = {
    gamePaused: false,
    gameInProgress: false,
    payingOutWinners: false,
    gameOver: false,
    playerTurn: 0,
    dealer: {
        hand: {
            cards: [],
            softValue: 0,
            hardValue: 0,
            isBusted: false,
        },
        hasBlackjack: false,
    },
    deck: [],
};

export default (state = initialState, { type, ...payload}) =>{
    if (type === NEW_GAME){
        console.log('got deck', payload);
        const { cards, activePlayer } = payload;
        return {
            ...state,
            deck: { cards: cards},
            gameInProgress: true,
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
        hand.softvalue = values.soft;
        hand.hardValue = values.hard;
        hand.isBusted = values.busted;
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

    if (type === PAYOUT_WINNERS){
        console.log('winner winner chicken dinner');
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