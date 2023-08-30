import { MeAction } from "State/Actions/actions";
import { ActionType } from "State/Actions/actionTypes";

export type MeState = {
    isLoggedIn: boolean;
    data: User;
};

export type User = {
    firstName: string;
    lastName: string;
    email: string;
    _id: string;
    isAdmin: boolean;
};

export const ME_DATA_INITIAL_STATE = {
    firstName: "Max",
    lastName: "Musterman",
    email: "max-musterman@gmail.com",
    _id: "123456",
    isAdmin: false,
};

export const meReducer = (
    state: MeState = {
        isLoggedIn: false,
        data: ME_DATA_INITIAL_STATE,
    },
    action: MeAction
) => {
    switch (action.type) {
        case ActionType.SET_ME_IS_LOGGED_IN:
            return { ...state, isLoggedIn: true, data: action.payload };

        case ActionType.SET_ME_IS_LOGGED_OUT:
            return { ...state, isLoggedIn: false, data: ME_DATA_INITIAL_STATE };

        default:
            return state;
    }
};
