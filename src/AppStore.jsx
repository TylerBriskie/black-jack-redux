import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/appReducer';
import AppSaga from './AppSaga';

const sagaMiddleware = createSagaMiddleware();
export default createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(AppSaga);