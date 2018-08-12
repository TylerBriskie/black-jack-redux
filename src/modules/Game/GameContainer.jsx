import { connect } from 'react-redux';
import Game from './Game';
import { getPlayers, getDealer, getDeck } from './selectors/gameSelectors';
import { pauseGameAction } from './actions/gameActions';

export const mapStateToProps = state => {
    return {
        gameInProgress: state.game.gameInProgress,
        gamePaused: state.game.gamePaused,
        dealer: state.game.dealer,
        deck: state.game.deck.cards,
        playerCount: getPlayers(state).players.length,
        playerTurn: state.game.playerTurn,
    }
};

export const mapDispatchToProps = dispatch => ({
    pauseGame: () => dispatch(pauseGameAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);