import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import userReducer from './userReducer';

const RootReducer = combineReducers({
    user: userReducer,
    book: bookReducer
});

export default RootReducer;

export type State = ReturnType<typeof RootReducer>;
