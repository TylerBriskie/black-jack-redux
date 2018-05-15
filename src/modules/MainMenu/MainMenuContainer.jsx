import { connect } from 'react-redux';
import MainMenu from './MainMenu';
import {addNewPlayerAction} from './actions/MainMenuActions';

export const mapStateToProps = state => ({

});

export const mapDispatchToProps = dispatch => ({
   addNewPlayer: playerName => dispatch(addNewPlayerAction(playerName))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);