import { connect } from 'react-redux';
import MainMenu from './MainMenu';
import { newGameAction} from '../Game/actions/gameActions';
import { newPlayerAction } from '../Players/actions/playersActions';
export const mapStateToProps = () => ({});

export const mapDispatchToProps = dispatch => ({
    newPlayerAction: playerName => dispatch(newPlayerAction(playerName)),
    newGameAction: () => dispatch(newGameAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);