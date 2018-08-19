import { connect } from 'react-redux';
import Game from './Game';
import { getPlayers, getDealer, getDeck } from './selectors/gameSelectors';
import { pauseGameAction, dealerHitAction, dealerStayAction } from './actions/gameActions';

export const mapStateToProps = state => {
    return {
        gameInProgress: state.game.gameInProgress,
        gamePaused: state.game.gamePaused,
        dealer: state.game.dealer,
        deck: state.game.deck.cards,
        playerCount: getPlayers(state).players.length,
        playerTurn: state.game.playerTurn,
        payingOutWinners: state.game.payingOutWinners,
        gameOver: state.game.gameOver,
    }
};

export const mapDispatchToProps = dispatch => ({
    pauseGame: () => dispatch(pauseGameAction()),
    dealerHit: () => dispatch(dealerHitAction()),
    dealerStay: () => dispatch(dealerStayAction()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Game);