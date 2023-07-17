import { ActionType } from "State/Actions/actionTypes";
import { MeData } from "State/Reducers/meReducer";

// -- MODALS --

export const setRegistrationModalOpen = (isOpen: boolean) => {
    return { type: ActionType.SET_IS_REGISTRATION_MODAL_OPEN, payload: isOpen };
};

export const setRegistrationModalState = (state: "login" | "registration") => {
    return { type: ActionType.SET_IS_REGISTRATION_MODAL_STATE, payload: state };
};

// -- ME --

export const logInMe = (data: MeData) => {
    return { type: ActionType.SET_ME_IS_LOGGED_IN, payload: data };
};

export const logOutMe = () => {
    return { type: ActionType.SET_ME_IS_LOGGED_OUT };
};
