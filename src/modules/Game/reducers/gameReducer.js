import { NEW_GAME, PAUSE_GAME } from "../actions/gameActions";
import { BUST } from '../../Players/actions/playersActions';

const initialState = {
    gameInProgress: false,
    gamePaused: false,
    playerTurn: 0,
    dealer: {
      hand: [],
      score: 0,
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
    if (type === PAUSE_GAME){
        state.gamePaused ? console.log('unpausing game') : console.log('pausing game');
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
    return state;

}