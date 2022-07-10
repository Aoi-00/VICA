import { ActionType } from '../action-types/actionType'; //for actiontype enum
import { User, Book } from '../../data/data';
import { Dispatch } from 'redux';
import { Action } from '../actions/action'; //interface for actions

export const addUser = (user: User) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADDUSER,
            payload: user
        });
    };
};

export const removeUser = (user: User) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.REMOVEUSER,
            payload: user
        });
    };
};
export const updateUser = (user: User) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.UPDATEUSER,
            payload: user
        });
    };
};

export const listUser = (user: User) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.UPDATEUSER,
            payload: user
        });
    };
};
