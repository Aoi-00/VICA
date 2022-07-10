import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/RootReducer';

const initialState = {};
export const store = createStore(
    RootReducer,
    initialState, //initial state
    applyMiddleware(thunk)
);
