import { AdminAction } from "State/Actions/actions";
import { ActionType } from "State/Actions/actionTypes";
import { User } from "State/Reducers/meReducer";

export type AdminState = {
    users: User[];
    sessions: Session[];
};

export type Session = {
    duration: string;
    experimentAlias: string;
    experimentFilePath: string;
    experimentId: string;
    name: string;
    sensorFilePath: string;
    sensorId: string;
    sensorName: string;
    userId: string;
    _id: string;
};

export const ADMIN_DATA_INITIAL_STATE: AdminState = {
    users: [],
    sessions: [],
};

export const adminPageReducer = (state: AdminState = ADMIN_DATA_INITIAL_STATE, action: AdminAction) => {
    switch (action.type) {
        case ActionType.SET_USERS:
            return { ...state, users: action.payload };

        case ActionType.DELETE_USER:
            return { ...state, users: state.users.filter((user) => user.email !== action.payload) };

        case ActionType.SET_SESSIONS:
            return { ...state, sessions: action.payload };

        default:
            return state;
    }
};
