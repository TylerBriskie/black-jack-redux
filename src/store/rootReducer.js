import { combineReducers } from 'redux';
import { playerReducer } from '../modules/Player/reducers/PlayerReducer';

const rootReducer = combineReducers({
    player: playerReducer,
});

export default rootReducer;
