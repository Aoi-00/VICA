import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/RootReducer';
import { composeWithDevTools } from '@redux-devtools/extension';

const initialState = {};
export const store = createStore(
    RootReducer,
    initialState, //initial state
    composeWithDevTools(applyMiddleware(thunk))
);
