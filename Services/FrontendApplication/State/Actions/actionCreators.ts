import { ActionType } from "State/Actions/actionTypes";
import { User } from "State/Reducers/meReducer";

// -- MODALS --

export const setRegistrationModalOpen = (isOpen: boolean) => {
    return { type: ActionType.SET_IS_REGISTRATION_MODAL_OPEN, payload: isOpen };
};

export const setRegistrationModalState = (state: "login" | "registration") => {
    return { type: ActionType.SET_IS_REGISTRATION_MODAL_STATE, payload: state };
};

// -- ME --

export const logInMe = (data: User) => {
    return { type: ActionType.SET_ME_IS_LOGGED_IN, payload: data };
};

export const logOutMe = () => {
    return { type: ActionType.SET_ME_IS_LOGGED_OUT };
};

// -- ADMIN --

export const setUsers = (users: User[]) => {
    return { type: ActionType.SET_USERS, payload: users };
};
