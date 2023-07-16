import { ActionType } from "State/Actions/actionTypes";

// -- MODALS --

export const setRegistrationModalOpen = (isOpen: boolean) => {
    return { type: ActionType.SET_IS_REGISTRATION_MODAL_OPEN, payload: isOpen };
};

export const setRegistrationModalState = (state: "login" | "registration") => {
    return { type: ActionType.SET_IS_REGISTRATION_MODAL_STATE, payload: state };
};
