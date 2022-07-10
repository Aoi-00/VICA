import { Action } from '../actions/action';
import { ActionType } from '../action-types/actionType';
import { User, Users } from '../../data/data';

const initState: { users: User[] } = {
    users: Users
};

const userReducer = (state = initState, action: Action) => {
    switch (action.type) {
        case ActionType.ADDUSER:
            return {
                ...state,
                users: state.users.concat(action.payload)
            };
        case ActionType.REMOVEUSER:
            const updatedUsers: User[] = state.users.filter((user) => user.id !== action.payload.id);
            return {
                ...state,
                users: updatedUsers
            };
        case ActionType.UPDATEUSER:
            const newUsers: User[] = state.users.map((each) => {
                if (each.id === action.payload.id) {
                    return action.payload;
                }
                return each;
            });

            return {
                ...state,
                users: newUsers
            };
        case ActionType.LISTUSER:
            return {
                ...state
            };
        default:
            return state;
    }
};

export default userReducer;
