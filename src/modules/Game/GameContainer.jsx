import { connect } from 'react-redux';
import Game from './Game';
import { getPlayers, getDealer, getDeck } from './selectors/gameSelectors';
// import { } from './actions/gameActions';

export const mapStateToProps = state => ({
    players: state.players,
    dealer: state.dealer,
    deck: state.deck
});

export const mapDispatchToPrpos = dispatch => ({
    addPlayer: player => dispatch(addPlayer(player)),


});

export default connect(mapStateToProps, mapDispatchToPrpos)(Game);