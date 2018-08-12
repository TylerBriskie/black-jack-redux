import { connect } from 'react-redux';
import MainMenu from './MainMenu';
import { newGameAction} from '../Game/actions/gameActions';
import { newPlayerAction } from '../Players/actions/playersActions';
import { getPlayers } from '../Players/selectors/playersSelectors';

export const mapStateToProps = state => ({
    players: getPlayers(state),
    gameInProgress: state.game.gameInProgress,
});

export const mapDispatchToProps = dispatch => ({
    newPlayerAction: playerName => dispatch(newPlayerAction(playerName)),
    newGameAction: (playerCount, deckCount) => dispatch(newGameAction(playerCount, deckCount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);