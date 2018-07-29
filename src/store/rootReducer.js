import { combineReducers } from 'redux';
import playersReducer from '../modules/Players/reducers/playersReducer';
import gameReducer  from '../modules/Game/reducers/gameReducer';

const rootReducer = combineReducers({
    players: playersReducer,
    game: gameReducer,
});

export default rootReducer;
