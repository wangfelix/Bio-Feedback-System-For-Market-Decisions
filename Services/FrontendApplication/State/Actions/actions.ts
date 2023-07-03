import { ActionType } from "State/Actions/actionTypes";

// -- MODALS --

export interface RegistrationModalAction {
    type: ActionType.SET_IS_REGISTRATION_MODAL_OPEN;
    payload: boolean;
}

export type ModalAction = RegistrationModalAction;
