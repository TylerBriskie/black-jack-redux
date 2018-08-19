import {DEAL_CARD, NEW_GAME, PAUSE_GAME} from "../actions/gameActions";
import {BUST, STAY} from '../../Players/actions/playersActions';
import {getValues} from "../helpers/gameLogic";

const initialState = {
    gameInProgress: false,
    gamePaused: false,
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
        }
    }

    if (type === PAUSE_GAME){
        const {gamePaused} = state;
        return {
            ...state,
            gamePaused: !gamePaused,
        }
    }
    if (type === BUST){
        console.log('player busted, moving onto next player');

        return {
            ...state,
        }
    }
    if (type === STAY){
        return {
            ...state,
            playerTurn: payload.nextPlayerId,
        }
    }
    return state;

}