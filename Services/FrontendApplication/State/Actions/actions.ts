import { ActionType } from "State/Actions/actionTypes";
import { User } from "State/Reducers/meReducer";

// -- MODALS --

export interface RegistrationModalAction {
    type: ActionType.SET_IS_REGISTRATION_MODAL_OPEN;
    payload: boolean;
}

export interface RegistrationModalStateAction {
    type: ActionType.SET_IS_REGISTRATION_MODAL_STATE;
    payload: "login" | "registration";
}

export type ModalAction = RegistrationModalAction | RegistrationModalStateAction;

// -- ME --

export interface MeLogIn {
    type: ActionType.SET_ME_IS_LOGGED_IN;
    payload: User;
}

export interface MeLogOut {
    type: ActionType.SET_ME_IS_LOGGED_OUT;
    payload: null;
}

export type MeAction = MeLogIn | MeLogOut;

// -- ADMIN --

export interface AdminSetUsers {
    type: ActionType.SET_USERS;
    payload: User[];
}

export type AdminAction = AdminSetUsers;
