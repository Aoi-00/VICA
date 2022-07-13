import { ActionType } from '../action-types/actionType';
import { Book, User } from '../../data/data';

interface AddAction {
    type: ActionType.ADDUSER;
    payload: User;
}
interface RemoveAction {
    type: ActionType.REMOVEUSER;
    payload: User;
}
interface UpdateAction {
    type: ActionType.UPDATEUSER;
    payload: User;
}

interface AddBook {
    type: ActionType.ADDBOOK;
    payload: Book;
}
interface RemoveBook {
    type: ActionType.REMOVEBOOK;
    payload: Book;
}
interface UpdateBook {
    type: ActionType.UPDATEBOOK;
    payload: Book;
}

export type Action = AddAction | RemoveAction | UpdateAction | AddBook | RemoveBook | UpdateBook;
