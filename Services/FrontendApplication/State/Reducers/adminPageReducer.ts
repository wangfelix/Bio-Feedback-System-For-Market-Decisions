import { AdminAction } from "State/Actions/actions";
import { ActionType } from "State/Actions/actionTypes";
import { User } from "State/Reducers/meReducer";

export type AdminState = {
    users: User[];
};

export const ADMIN_DATA_INITIAL_STATE: AdminState = {
    users: [],
};

export const adminPageReducer = (state: AdminState = ADMIN_DATA_INITIAL_STATE, action: AdminAction) => {
    switch (action.type) {
        case ActionType.SET_USERS:
            return { ...state, users: action.payload };

        case ActionType.DELETE_USER:
            return { ...state, users: state.users.filter((user) => user.email !== action.payload) };

        default:
            return state;
    }
};
