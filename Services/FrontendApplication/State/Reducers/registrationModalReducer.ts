import { ModalAction } from "State/Actions/actions";
import { ActionType } from "State/Actions/actionTypes";

type ModalState = {
    isRegistrationModalOpen: boolean;
    modalAuthMode: "login" | "registration";
};

export const modalReducer = (
    state: ModalState = {
        isRegistrationModalOpen: false,
        modalAuthMode: "registration",
    },
    action: ModalAction
) => {
    switch (action.type) {
        case ActionType.SET_IS_REGISTRATION_MODAL_OPEN:
            return { ...state, isRegistrationModalOpen: action.payload };

        case ActionType.SET_IS_REGISTRATION_MODAL_STATE:
            return { ...state, modalAuthMode: action.payload };

        default:
            return state;
    }
};
