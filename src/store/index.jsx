import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(
        axiosMiddleware(axios)
    ),
));

export default store;
