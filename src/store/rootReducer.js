import { combineReducers } from 'redux';
import playerReducer from '../modules/Player/reducers/PlayerReducer';
import gameReducer  from '../modules/Game/reducers/gameReducer';

const rootReducer = combineReducers({
    player: playerReducer,
    game: gameReducer,
});

export default rootReducer;
