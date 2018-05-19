import { connect } from 'react-redux';
import MainMenu from './MainMenu';
import {newPlayerAction, newGameAction} from '../Game/actions/gameActions';

export const mapStateToProps = () => ({});

export const mapDispatchToProps = dispatch => ({
    newPlayerAction: playerName => dispatch(newPlayerAction(playerName)),
    newGameAction: () => dispatch(newGameAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);