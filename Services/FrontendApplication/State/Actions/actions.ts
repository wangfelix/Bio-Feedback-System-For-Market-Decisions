import { ActionType } from "State/Actions/actionTypes";
import { User } from "State/Reducers/meReducer";
import { Device, Experiment } from "State/Reducers/sessionPageReducer";

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

export interface AdminDeleteUser {
    type: ActionType.DELETE_USER;
    payload: string;
}

export type AdminAction = AdminSetUsers | AdminDeleteUser;

// -- SESSION --

export interface SessionSetSensors {
    type: ActionType.SET_DEVICES;
    payload: Device[];
}

export interface SessionSetFirstSensorFile {
    type: ActionType.SET_FIRST_DEVICE_FILE;
    payload: string;
}

export interface SessionSetExperiment {
    type: ActionType.SET_EXPERIMENT;
    payload: Experiment;
}

export interface SessionSetExperimentFile {
    type: ActionType.SET_EXPERIMENT_FILE;
    payload: string;
}

export interface SessionSetSessionName {
    type: ActionType.SET_SESSION_NAME;
    payload: string;
}

export interface SessionSetSessionDuration {
    type: ActionType.SET_SESSION_DURATION;
    payload: string;
}

export type SessionAction =
    | SessionSetExperiment
    | SessionSetExperimentFile
    | SessionSetSensors
    | SessionSetSessionName
    | SessionSetFirstSensorFile
    | SessionSetSessionDuration;
