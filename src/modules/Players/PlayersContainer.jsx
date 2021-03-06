import { connect } from 'react-redux';
import Players from './Players';
import { getPlayers } from './selectors/playersSelectors';
import {bustAction } from "./actions/playersActions";
import {hitAction, stayAction } from '../Game/actions/gameActions';

export const mapStateToProps = state => {
    return {
        state: state,
        deck: state.game.deck,
        players: getPlayers(state),
    }
};

export const mapDispatchToProps = dispatch => ({
    hit: (id, currentHand) => dispatch(hitAction(id, currentHand)),
    stay: (id, currentHand) => dispatch(stayAction(id, currentHand)),
    bust: (id, currentHand) => dispatch(bustAction(id, currentHand)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);