import { ActionType } from "State/Actions/actionTypes";
import { User } from "State/Reducers/meReducer";
import { Device, Experiment } from "State/Reducers/sessionPageReducer";

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

// -- SESSION --

export const setDevices = (devices: Device[]) => {
    return { type: ActionType.SET_DEVICES, payload: devices };
};

export const setFirstDeviceFile = (deviceFile: string) => {
    return { type: ActionType.SET_FIRST_DEVICE_FILE, payload: deviceFile };
};

export const setExperiment = (experiment: Experiment) => {
    return { type: ActionType.SET_EXPERIMENT, payload: experiment };
};

export const setExperimentFile = (experimentFile: string) => {
    return { type: ActionType.SET_EXPERIMENT_FILE, payload: experimentFile };
};

export const setSessionName = (name: string) => {
    return { type: ActionType.SET_SESSION_NAME, payload: name };
};
