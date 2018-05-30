import { connect } from 'react-redux';
import Game from './Game';
// import { getPlayers, getDealer, getDeck } from './selectors/gameSelectors';
// import { } from './actions/gameActions';

export const mapStateToProps = state => {
    console.log("STATE IN GAME CONTAINER: ", state);
    return {
        state: state,
        players: state.player.players,
        dealer: state.game.dealer,
        deck: state.game.deck,
        playerTurn: state.game.playerTurn,
    }
};

export const mapDispatchToProps = dispatch => ({
    // addPlayer: player => dispatch(addPlayer(player)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Game);