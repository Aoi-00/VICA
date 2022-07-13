import { Action } from '../actions/action';
import { ActionType } from '../action-types/actionType';
import { Book, Books } from '../../data/data';

const initState: { book: Book[] } = {
    book: Books
};

const bookReducer = (state = initState, action: Action) => {
    switch (action.type) {
        case ActionType.ADDBOOK:
            return {
                ...state,
                book: state.book.concat(action.payload)
            };
        case ActionType.REMOVEBOOK:
            const updatedBook: Book[] = state.book.filter((book) => book.id !== action.payload.id);
            return {
                ...state,
                book: updatedBook
            };
        case ActionType.UPDATEBOOK:
            const newBooks: Book[] = state.book.map((each) => {
                if (each.id === action.payload.id) {
                    return action.payload;
                }
                return each;
            });

            return {
                ...state,
                book: newBooks
            };
        default:
            return state;
    }
};

export default bookReducer;
