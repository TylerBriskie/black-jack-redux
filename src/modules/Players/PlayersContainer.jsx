import { connect } from 'react-redux';
import Players from './Players';

export const mapStateToProps = state => {
    return {
        players: state.players.players
    }
};

export const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Players);