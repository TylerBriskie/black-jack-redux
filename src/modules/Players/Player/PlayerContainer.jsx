import { connect } from 'react-redux';
import { increaseBetAction, decreaseBetAction } from "../actions/playersActions";
import Player from './Player'

export const mapStateToProps = () => ({});

export const mapDispatchToProps = dispatch => ({
    increaseBet: id => dispatch(increaseBetAction(id)),
    decreaseBet: id => dispatch(decreaseBetAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);