import { SessionAction } from "State/Actions/actions";
import { ActionType } from "State/Actions/actionTypes";

export type Device = {
    alias: string;
    id: string;
    fileName?: string;
};

export type Experiment =
    | {
          alias: string;
          id: string;
          fileName?: string;
      }
    | undefined;

export type SessionState = {
    name: string;
    id: string;
    devices: Device[];
    duration: string;
    experiment: Experiment;
};

export const SESSION_INITIAL_STATE: SessionState = {
    name: "",
    id: "",
    devices: [],
    duration: "",
    experiment: undefined,
};

export const sessionPageReducer = (state: SessionState = SESSION_INITIAL_STATE, action: SessionAction) => {
    switch (action.type) {
        case ActionType.SET_DEVICES:
            return { ...state, devices: action.payload };

        case ActionType.SET_FIRST_DEVICE_FILE:
            return { ...state, devices: [{ ...state.devices[0], fileName: action.payload }, ...state.devices] };

        case ActionType.SET_EXPERIMENT:
            return { ...state, experiment: action.payload };

        case ActionType.SET_EXPERIMENT_FILE:
            return { ...state, experiment: { ...state.experiment, fileName: action.payload } };

        case ActionType.SET_SESSION_NAME:
            return { ...state, name: action.payload };

        default:
            return state;
    }
};
