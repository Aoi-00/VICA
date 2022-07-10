import { ActionType } from '../action-types/actionType';
import { User } from '../../data/data';

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

interface ListAction {
    type: ActionType.LISTUSER;
    payload: User;
}

export type Action = AddAction | RemoveAction | UpdateAction | ListAction;
