import { connect } from 'react-redux';
import { increaseBetAction,
    decreaseBetAction,
    stayAction,
    doubleDownAction
} from "../actions/playersActions";
import Player from './Player'

export const mapStateToProps = state => {
    return {
        gameInProgress: state.game.gameInProgress,
    }
};

export const mapDispatchToProps = dispatch => ({
    increaseBet: id => dispatch(increaseBetAction(id)),
    decreaseBet: id => dispatch(decreaseBetAction(id)),
    stay: id => dispatch(stayAction(id)),
    doubleDown: id => dispatch(doubleDownAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);