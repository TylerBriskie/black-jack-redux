import { connect } from 'react-redux';
import Players from './Players';
import { getPlayers } from './selectors/playersSelectors';

export const mapStateToProps = state => {
    return {
        state: state,
        players: getPlayers(state),
    }
};

export const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Players);