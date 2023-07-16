import { ActionType } from "State/Actions/actionTypes";

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
