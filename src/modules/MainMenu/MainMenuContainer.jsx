import { connect } from 'react-redux';
import MainMenu from './MainMenu';
import {newPlayerAction, fetchCardsAction} from '../Game/actions/gameActions';

export const mapStateToProps = () => ({});

export const mapDispatchToProps = dispatch => ({
    newPlayerAction: playerName => dispatch(newPlayerAction(playerName)),
    newGameAction: () => dispatch(fetchCardsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);